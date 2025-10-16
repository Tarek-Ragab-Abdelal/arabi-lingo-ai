import { allLessons } from "@/data/lessons";
import { LessonCard } from "@/components/LessonCard";
import { ProgressTracker } from "@/components/ProgressTracker";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProgress } from "@/types/lesson";

const LessonsPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState<UserProgress[]>([]);

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem("lesson-progress");
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const completedCount = progress.filter((p) => p.completed).length;
  const averageScore =
    progress.length > 0
      ? progress.reduce((acc, p) => acc + (p.quizScore || 0), 0) / progress.length
      : 0;

  // Group lessons by level
  const lessonsByLevel = {
    1: allLessons.filter(lesson => lesson.level === 1),
    2: allLessons.filter(lesson => lesson.level === 2),
    3: allLessons.filter(lesson => lesson.level === 3),
    4: allLessons.filter(lesson => lesson.level === 4),
    5: allLessons.filter(lesson => lesson.level === 5),
  };

  const levelTitles = {
    1: "المستوى الأول - المبتدئ",
    2: "المستوى الثاني - الأساسي", 
    3: "المستوى الثالث - المتوسط",
    4: "المستوى الرابع - المتقدم",
    5: "المستوى الخامس - الخبير"
  };

  const levelDescriptions = {
    1: "الحروف والأرقام والكلمات الأساسية",
    2: "قواعد اللغة الأساسية والضمائر",
    3: "المفردات المتوسطة والمحادثات",
    4: "التعامل مع المواقف المعقدة",
    5: "إتقان اللغة والتعبيرات المتقدمة"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary text-white py-8 px-4 shadow-strong">
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
              <BookOpen className="w-10 h-10" />
              <h1 className="text-3xl md:text-4xl font-black">دروس اللغة الإنجليزية</h1>
            </div>
          </div>
          <p className="text-center text-white/90 text-sm md:text-base">
            تعلم اللغة الإنجليزية خطوة بخطوة من خلال دروس منظمة ومتدرجة
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-8">
        {/* Progress Section */}
        <div className="mb-8">
          <ProgressTracker
            completedLessons={completedCount}
            totalLessons={allLessons.length}
            averageScore={averageScore}
          />
        </div>

        {/* Lessons by Level */}
        {Object.entries(lessonsByLevel).map(([level, lessons]) => {
          if (lessons.length === 0) return null;
          
          const levelNum = Number.parseInt(level);
          const getBgColor = (num: number) => {
            if (num === 1) return 'bg-green-500';
            if (num === 2) return 'bg-blue-500';
            if (num === 3) return 'bg-purple-500';
            if (num === 4) return 'bg-orange-500';
            return 'bg-red-500';
          };
          
          return (
            <div key={level} className="mb-12">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${getBgColor(levelNum)}`}>
                    {level}
                  </span>
                  <h2 className="text-2xl font-bold">{levelTitles[levelNum as keyof typeof levelTitles]}</h2>
                </div>
                <p className="text-muted-foreground mr-11">
                  {levelDescriptions[levelNum as keyof typeof levelDescriptions]}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lessons.map((lesson) => {
                  const lessonProgress = progress.find((p) => p.lessonId === lesson.id);
                  return (
                    <LessonCard
                      key={lesson.id}
                      {...lesson}
                      completed={lessonProgress?.completed || false}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Coming Soon Section */}
        <div className="mt-12 p-8 rounded-2xl gradient-card shadow-medium border-2 border-dashed border-primary/30 text-center">
          <h3 className="text-xl font-bold mb-2">المزيد من الدروس قادم قريباً!</h3>
          <p className="text-muted-foreground">
            نعمل على إضافة المزيد من الدروس المتقدمة والميزات التفاعلية
          </p>
        </div>
      </main>
    </div>
  );
};

export default LessonsPage;