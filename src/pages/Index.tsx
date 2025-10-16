import { allLessons } from "@/data/lessons";
import { LessonCard } from "@/components/LessonCard";
import { ProgressTracker } from "@/components/ProgressTracker";
import { GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";
import { UserProgress } from "@/types/lesson";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary text-white py-8 px-4 shadow-strong">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-3 mb-2">
            <GraduationCap className="w-10 h-10" />
            <h1 className="text-3xl md:text-4xl font-black">تعلم الإنجليزية</h1>
          </div>
          <p className="text-center text-white/90 text-sm md:text-base">
            تطبيقك الشامل لتعلم اللغة الإنجليزية من الصفر
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

        {/* Lessons Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-gradient-primary rounded-full" />
            الدروس المتاحة
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
          {allLessons.map((lesson) => {
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

        {/* Coming Soon Section */}
        <div className="mt-12 p-8 rounded-2xl gradient-card shadow-medium border-2 border-dashed border-primary/30 text-center">
          <h3 className="text-xl font-bold mb-2">المزيد قادم قريباً!</h3>
          <p className="text-muted-foreground">
            المزيد من الدروس والاختبارات والميزات التفاعلية في الطريق
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
