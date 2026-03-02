import { allLessons } from "@/data/lessons";
import { LessonCard } from "@/components/LessonCard";
import { ProgressTracker } from "@/components/ProgressTracker";
import { GraduationCap, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { UserProgress } from "@/types/lesson";
import { useUserProfile } from "@/hooks/useUserProfile";

const Index = () => {
  const [progress, setProgress] = useState<UserProgress[]>([]);
  const { profile } = useUserProfile();

  useEffect(() => {
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
      <header className="relative overflow-hidden py-16 px-4" style={{ background: "linear-gradient(135deg, hsl(258 80% 25%) 0%, hsl(280 80% 30%) 40%, hsl(220 80% 28%) 100%)" }}>
        <div className="absolute top-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full" style={{ background: "radial-gradient(circle, hsl(280 80% 60% / 0.3) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full" style={{ background: "radial-gradient(circle, hsl(220 80% 60% / 0.3) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </div>
          {profile ? (
            <>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-2">
                أهلاً، {profile.name}! 👋
              </h1>
              <p className="text-white/70">تابع رحلتك في تعلم الإنجليزية</p>
            </>
          ) : (
            <>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-2">تعلم الإنجليزية</h1>
              <p className="text-white/70">تطبيقك الشامل لتعلم اللغة الإنجليزية</p>
            </>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <ProgressTracker
            completedLessons={completedCount}
            totalLessons={allLessons.length}
            averageScore={averageScore}
          />
        </div>

        <div className="mb-6 flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-violet-500" />
          <h2 className="text-2xl font-black">الدروس المتاحة</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-8">
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

        <div className="mt-8 p-8 rounded-3xl text-center" style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)", border: "2px dashed #c4b5fd" }}>
          <div className="text-3xl mb-3">✨</div>
          <h3 className="text-xl font-black mb-2 text-violet-900">المزيد قادم قريباً!</h3>
          <p className="text-violet-600/70">المزيد من الدروس والاختبارات والميزات التفاعلية في الطريق</p>
        </div>
      </main>
    </div>
  );
};

export default Index;
