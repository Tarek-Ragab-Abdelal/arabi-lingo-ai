import { allTrainingParagraphs, trainingByLevel } from "@/data/training";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Headphones, Play, Clock, Target } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TrainingProgress } from "@/types/lesson";

const TrainingPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState<TrainingProgress[]>([]);

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem("training-progress");
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const completedCount = progress.filter((p) => p.completed).length;
  const averageScore =
    progress.length > 0
      ? progress.reduce((acc, p) => acc + (p.quizScore || 0), 0) / progress.length
      : 0;

  const levelTitles = {
    1: "مبتدئ",
    2: "متوسط",
    3: "متقدم",
    4: "خبير",
    5: "محترف"
  };

  const levelColors = {
    1: "bg-green-500",
    2: "bg-blue-500", 
    3: "bg-purple-500",
    4: "bg-orange-500",
    5: "bg-red-500"
  };

  const categoryIcons = {
    daily: "🏠",
    descriptive: "📝",
    dialogue: "💬",
    workplace: "💼",
    travel: "✈️"
  };

  const categoryNames = {
    daily: "الحياة اليومية",
    descriptive: "الوصف",
    dialogue: "المحادثة",
    workplace: "مكان العمل",
    travel: "السفر"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-secondary text-white py-8 px-4 shadow-strong">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              العودة
            </Button>
            <div className="flex items-center gap-3">
              <Headphones className="w-10 h-10" />
              <h1 className="text-3xl md:text-4xl font-black">التدريب العملي</h1>
            </div>
          </div>
          <p className="text-center text-white/90 text-sm md:text-base">
            تدرب على الاستماع والفهم من خلال نصوص متدرجة الصعوبة
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-8">
        {/* Progress Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <Target className="h-8 w-8 text-primary mr-4" />
              <div>
                <p className="text-2xl font-bold">{completedCount}</p>
                <p className="text-xs text-muted-foreground">تمارين مكتملة</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Clock className="h-8 w-8 text-accent mr-4" />
              <div>
                <p className="text-2xl font-bold">{allTrainingParagraphs.length}</p>
                <p className="text-xs text-muted-foreground">إجمالي التمارين</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Play className="h-8 w-8 text-secondary mr-4" />
              <div>
                <p className="text-2xl font-bold">{averageScore.toFixed(0)}%</p>
                <p className="text-xs text-muted-foreground">متوسط النتائج</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Training Paragraphs by Level */}
        {Object.entries(trainingByLevel).map(([level, paragraphs]) => {
          if (paragraphs.length === 0) return null;
          
          const levelNum = Number.parseInt(level);
          return (
            <div key={level} className="mb-12">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${levelColors[levelNum as keyof typeof levelColors]}`}>
                    {level}
                  </span>
                  <h2 className="text-2xl font-bold">المستوى {levelTitles[levelNum as keyof typeof levelTitles]}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paragraphs.map((paragraph) => {
                  const paragraphProgress = progress.find((p) => p.paragraphId === paragraph.id);
                  const isCompleted = paragraphProgress?.completed || false;
                  
                  return (
                    <Card 
                      key={paragraph.id} 
                      className={`cursor-pointer hover:shadow-lg transition-all duration-300 ${isCompleted ? 'ring-2 ring-green-500' : ''}`}
                      onClick={() => navigate(`/training/${paragraph.id}`)}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2 text-right">{paragraph.titleAr}</CardTitle>
                            <p className="text-sm text-muted-foreground text-right">{paragraph.titleEn}</p>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <span className="text-2xl">{categoryIcons[paragraph.category]}</span>
                            {isCompleted && (
                              <Badge variant="secondary" className="text-xs">
                                مكتمل ✓
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          <Badge variant="outline" className="text-xs">
                            {categoryNames[paragraph.category]}
                          </Badge>
                          
                          <p className="text-sm text-muted-foreground text-right line-clamp-3">
                            {paragraph.englishText.substring(0, 100)}...
                          </p>
                          
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{paragraph.quizzes.length} سؤال</span>
                            {paragraphProgress?.quizScore && (
                              <span className="text-green-600">
                                النتيجة: {paragraphProgress.quizScore}%
                              </span>
                            )}
                          </div>
                          
                          <Button 
                            className="w-full" 
                            variant={isCompleted ? "secondary" : "default"}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/training/${paragraph.id}`);
                            }}
                          >
                            <Play className="w-4 h-4 ml-2" />
                            {isCompleted ? "إعادة التدريب" : "ابدأ التدريب"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Coming Soon Section */}
        <div className="mt-12 p-8 rounded-2xl gradient-card shadow-medium border-2 border-dashed border-accent/30 text-center">
          <h3 className="text-xl font-bold mb-2">المزيد من التمارين قادم قريباً!</h3>
          <p className="text-muted-foreground">
            نعمل على إضافة المزيد من التمارين والمحادثات التفاعلية
          </p>
        </div>
      </main>
    </div>
  );
};

export default TrainingPage;