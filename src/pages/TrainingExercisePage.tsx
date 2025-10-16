import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allTrainingParagraphs } from "@/data/training";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Pause, Volume2, VolumeX, CheckCircle, XCircle } from "lucide-react";
import { TrainingProgress } from "@/types/lesson";
import { useToast } from "@/hooks/use-toast";

const TrainingExercisePage = () => {
  const { paragraphId } = useParams<{ paragraphId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [showArabic, setShowArabic] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const paragraph = allTrainingParagraphs.find(p => p.id === paragraphId);

  useEffect(() => {
    if (!paragraph) {
      navigate('/training');
    }
  }, [paragraph, navigate]);

  if (!paragraph) {
    return <div>Loading...</div>;
  }

  const currentQuiz = paragraph.quizzes[currentQuizIndex];
  const isLastQuiz = currentQuizIndex === paragraph.quizzes.length - 1;

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuizIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuiz = () => {
    if (currentQuizIndex < paragraph.quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const correctAnswers = paragraph.quizzes.filter((quiz, index) => 
      quiz.correctAnswer === selectedAnswers[index]
    ).length;
    
    const score = Math.round((correctAnswers / paragraph.quizzes.length) * 100);
    
    // Save progress
    const progress: TrainingProgress = {
      paragraphId: paragraph.id,
      completed: true,
      quizScore: score,
      lastAccessed: new Date().toISOString(),
    };
    
    const existingProgress = JSON.parse(localStorage.getItem("training-progress") || "[]");
    const filteredProgress = existingProgress.filter((p: TrainingProgress) => p.paragraphId !== paragraph.id);
    const updatedProgress = [...filteredProgress, progress];
    localStorage.setItem("training-progress", JSON.stringify(updatedProgress));
    
    setShowResults(true);
    
    toast({
      title: "تم إكمال التمرين!",
      description: `حصلت على ${score}% من الدرجة الكاملة`,
    });
  };

  const resetQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setIsQuizMode(false);
  };

  const playAudio = () => {
    // Placeholder for audio functionality
    setIsPlaying(!isPlaying);
    toast({
      title: "تشغيل الصوت",
      description: "ميزة الصوت ستكون متاحة قريباً",
    });
  };

  const categoryNames = {
    daily: "الحياة اليومية",
    descriptive: "الوصف",
    dialogue: "المحادثة",
    workplace: "مكان العمل",
    travel: "السفر"
  };

  if (showResults) {
    const correctAnswers = paragraph.quizzes.filter((quiz, index) => 
      quiz.correctAnswer === selectedAnswers[index]
    ).length;
    const score = Math.round((correctAnswers / paragraph.quizzes.length) * 100);

    return (
      <div className="min-h-screen bg-background">
        <header className="gradient-secondary text-white py-6 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/training')}
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4" />
                العودة للتدريب
              </Button>
              <h1 className="text-2xl font-bold">نتائج التمرين</h1>
            </div>
          </div>
        </header>

        <main className="container mx-auto max-w-4xl px-4 py-8">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">
                {(() => {
                  if (score >= 80) return "🎉 ممتاز!";
                  if (score >= 60) return "👍 جيد!";
                  return "💪 حاول مرة أخرى!";
                })()}
              </CardTitle>
              <p className="text-xl">حصلت على {score}% من الدرجة الكاملة</p>
              <p className="text-muted-foreground">
                {correctAnswers} من {paragraph.quizzes.length} إجابات صحيحة
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Button onClick={resetQuiz} variant="outline" className="w-full">
                  إعادة التمرين
                </Button>
                <Button onClick={() => navigate('/training')} className="w-full">
                  العودة للتدريب
                </Button>
              </div>
              
              {/* Show detailed results */}
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-bold">مراجعة الإجابات:</h3>
                {paragraph.quizzes.map((quiz, index) => {
                  const userAnswer = selectedAnswers[index];
                  const isCorrect = userAnswer === quiz.correctAnswer;
                  
                  return (
                    <Card key={quiz.id} className={`${isCorrect ? 'border-green-500' : 'border-red-500'}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          {isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500 mt-1" />
                          )}
                          <div className="flex-1 text-right">
                            <p className="font-medium mb-2">{quiz.questionAr}</p>
                            <p className="text-sm text-muted-foreground mb-2">{quiz.questionEn}</p>
                            <p className="text-sm">
                              <span className="font-medium">إجابتك: </span>
                              <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                                {userAnswer || "لم تجب"}
                              </span>
                            </p>
                            {!isCorrect && (
                              <p className="text-sm">
                                <span className="font-medium">الإجابة الصحيحة: </span>
                                <span className="text-green-600">{quiz.correctAnswer}</span>
                              </p>
                            )}
                            {quiz.explanation && (
                              <p className="text-sm text-muted-foreground mt-2">
                                {quiz.explanation}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  if (isQuizMode) {
    return (
      <div className="min-h-screen bg-background">
        <header className="gradient-secondary text-white py-6 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsQuizMode(false)}
                  className="text-white hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4" />
                  العودة للنص
                </Button>
                <h1 className="text-xl font-bold">أسئلة الفهم</h1>
              </div>
              <Badge variant="secondary">
                {currentQuizIndex + 1} من {paragraph.quizzes.length}
              </Badge>
            </div>
          </div>
        </header>

        <main className="container mx-auto max-w-4xl px-4 py-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-right text-lg">{currentQuiz.questionAr}</CardTitle>
              <p className="text-muted-foreground text-right">{currentQuiz.questionEn}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentQuiz.options.map((option) => (
                <Button
                  key={option}
                  variant={selectedAnswers[currentQuizIndex] === option ? "default" : "outline"}
                  className="w-full text-right justify-end h-auto p-4"
                  onClick={() => handleAnswerSelect(option)}
                >
                  {option}
                </Button>
              ))}
              
              <div className="flex justify-between pt-4">
                <Button
                  onClick={() => setCurrentQuizIndex(Math.max(0, currentQuizIndex - 1))}
                  disabled={currentQuizIndex === 0}
                  variant="outline"
                >
                  السابق
                </Button>
                <Button
                  onClick={handleNextQuiz}
                  disabled={!selectedAnswers[currentQuizIndex]}
                >
                  {isLastQuiz ? "إنهاء" : "التالي"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-secondary text-white py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/training')}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              العودة للتدريب
            </Button>
            <div>
              <h1 className="text-2xl font-bold">{paragraph.titleAr}</h1>
              <p className="text-white/80">{paragraph.titleEn}</p>
            </div>
          </div>
          <Badge variant="secondary">{categoryNames[paragraph.category]}</Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-8">
        <div className="space-y-6">
          {/* Audio Controls */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-4">
                <Button onClick={playAudio} size="lg">
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  <span className="mr-2">{isPlaying ? "إيقاف" : "تشغيل"}</span>
                </Button>
                <Button variant="outline" onClick={() => setShowArabic(!showArabic)}>
                  {showArabic ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span className="mr-2">{showArabic ? "إخفاء الترجمة" : "إظهار الترجمة"}</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Text Content */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">النص الإنجليزي</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg leading-relaxed text-right p-6 bg-blue-50 rounded-lg">
                {paragraph.englishText}
              </div>
              
              {paragraph.transliteration && (
                <div className="text-sm text-muted-foreground text-right p-4 bg-gray-50 rounded-lg">
                  <strong>النطق:</strong> {paragraph.transliteration}
                </div>
              )}
              
              {showArabic && (
                <div className="text-lg leading-relaxed text-right p-6 bg-green-50 rounded-lg">
                  <strong>الترجمة العربية:</strong><br />
                  {paragraph.arabicTranslation}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quiz Button */}
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4">اختبر فهمك للنص</h3>
              <p className="text-muted-foreground mb-6">
                أجب على {paragraph.quizzes.length} أسئلة لاختبار فهمك للنص
              </p>
              <Button 
                onClick={() => setIsQuizMode(true)} 
                size="lg"
                className="w-full md:w-auto"
              >
                ابدأ الاختبار
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TrainingExercisePage;