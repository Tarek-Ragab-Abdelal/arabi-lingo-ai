import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allLessons } from "@/data/lessons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, CheckCircle2, XCircle, Trophy } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const QuizPage = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = allLessons.find((l) => l.id === lessonId);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  if (!lesson || !lesson.quizzes) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">الاختبار غير متوفر</h2>
          <Button onClick={() => navigate("/")}>العودة للرئيسية</Button>
        </div>
      </div>
    );
  }

  const quiz = lesson.quizzes[currentQuestion];
  const totalQuestions = lesson.quizzes.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer) return; // Already answered
    setSelectedAnswer(answer);

    const isCorrect = answer === quiz.correctAnswer;
    setAnswers([...answers, isCorrect]);

    if (isCorrect) {
      setScore(score + 1);
      toast.success("إجابة صحيحة! 🎉");
    } else {
      toast.error(`إجابة خاطئة. الإجابة الصحيحة: ${quiz.correctAnswer}`);
    }

    // Auto advance after 2 seconds
    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
        saveProgress();
      }
    }, 2000);
  };

  const saveProgress = () => {
    const savedProgress = localStorage.getItem("lesson-progress");
    const progress = savedProgress ? JSON.parse(savedProgress) : [];
    
    const finalScore = ((score + (selectedAnswer === quiz.correctAnswer ? 1 : 0)) / totalQuestions) * 100;
    
    const existingIndex = progress.findIndex((p: any) => p.lessonId === lessonId);
    
    const newProgress = {
      lessonId,
      completed: true,
      quizScore: finalScore,
      lastAccessed: new Date().toISOString(),
    };

    if (existingIndex >= 0) {
      progress[existingIndex] = newProgress;
    } else {
      progress.push(newProgress);
    }

    localStorage.setItem("lesson-progress", JSON.stringify(progress));
  };

  const getFinalScore = () => {
    return ((score + (selectedAnswer === quiz.correctAnswer ? 1 : 0)) / totalQuestions) * 100;
  };

  if (showResult) {
    const finalScore = getFinalScore();
    const passed = finalScore >= 70;

    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 gradient-card shadow-strong border-0 text-center">
          <div
            className={cn(
              "w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center",
              passed ? "bg-success/20" : "bg-destructive/20"
            )}
          >
            {passed ? (
              <Trophy className="w-12 h-12 text-success" />
            ) : (
              <XCircle className="w-12 h-12 text-destructive" />
            )}
          </div>

          <h2 className="text-3xl font-black mb-4">
            {passed ? "أحسنت! 🎉" : "حاول مرة أخرى"}
          </h2>
          
          <div className="mb-6">
            <div className="text-6xl font-black mb-2 gradient-primary bg-clip-text text-transparent">
              {finalScore.toFixed(0)}%
            </div>
            <p className="text-muted-foreground">
              {score + (selectedAnswer === quiz.correctAnswer ? 1 : 0)} من {totalQuestions} إجابات صحيحة
            </p>
          </div>

          <div className="space-y-3">
            <Button
              size="lg"
              className="w-full gradient-primary text-white"
              onClick={() => navigate(`/lesson/${lessonId}`)}
            >
              مراجعة الدرس
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full"
              onClick={() => {
                setCurrentQuestion(0);
                setSelectedAnswer(null);
                setShowResult(false);
                setScore(0);
                setAnswers([]);
              }}
            >
              إعادة الاختبار
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="w-full"
              onClick={() => navigate("/")}
            >
              العودة للرئيسية
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary text-white py-6 px-4 shadow-strong">
        <div className="container mx-auto max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate(`/lesson/${lessonId}`)}
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowRight className="w-4 h-4 ml-2" />
            العودة للدرس
          </Button>
          <h1 className="text-2xl font-black mb-4">{lesson.titleAr} - اختبار</h1>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>السؤال {currentQuestion + 1} من {totalQuestions}</span>
              <span>النتيجة: {score}</span>
            </div>
            <Progress value={progress} className="h-2 bg-white/20" />
          </div>
        </div>
      </header>

      {/* Quiz Content */}
      <main className="container mx-auto max-w-4xl px-4 py-8">
        <Card className="p-8 gradient-card shadow-medium border-0">
          <h2 className="text-2xl font-bold mb-8 text-center">{quiz.questionAr}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quiz.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === quiz.correctAnswer;
              const showCorrect = selectedAnswer && isCorrect;
              const showWrong = isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={!!selectedAnswer}
                  className={cn(
                    "p-6 rounded-xl border-2 transition-all duration-300 text-right font-bold text-lg",
                    "hover:scale-105 hover:shadow-medium",
                    !selectedAnswer &&
                      "border-border bg-card hover:border-primary hover:bg-primary/5",
                    showCorrect &&
                      "border-success bg-success/10 text-success scale-105",
                    showWrong && "border-destructive bg-destructive/10 text-destructive",
                    selectedAnswer && !isSelected && !isCorrect && "opacity-50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showCorrect && <CheckCircle2 className="w-6 h-6" />}
                    {showWrong && <XCircle className="w-6 h-6" />}
                  </div>
                </button>
              );
            })}
          </div>

          {selectedAnswer && (
            <div className="mt-8 p-4 rounded-lg bg-muted/50 text-center">
              <p className="text-sm text-muted-foreground">
                {currentQuestion < totalQuestions - 1
                  ? "الانتقال للسؤال التالي..."
                  : "عرض النتائج..."}
              </p>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
};

export default QuizPage;
