import { allLessons } from "@/data/lessons";
import { LessonCard } from "@/components/LessonCard";
import { ProgressTracker } from "@/components/ProgressTracker";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProgress } from "@/types/lesson";
import { useUserProfile } from "@/hooks/useUserProfile";

const levelConfig = {
  1: { title: "المستوى الأول – المبتدئ", desc: "الحروف والأرقام والكلمات الأساسية", color: "from-emerald-500 to-teal-600", bg: "bg-emerald-500" },
  2: { title: "المستوى الثاني – الأساسي", desc: "قواعد اللغة الأساسية والضمائر", color: "from-blue-500 to-cyan-600", bg: "bg-blue-500" },
  3: { title: "المستوى الثالث – المتوسط", desc: "المفردات المتوسطة والمحادثات", color: "from-violet-500 to-indigo-600", bg: "bg-violet-500" },
  4: { title: "المستوى الرابع – المتقدم", desc: "التعامل مع المواقف المعقدة", color: "from-orange-500 to-amber-600", bg: "bg-orange-500" },
  5: { title: "المستوى الخامس – الخبير", desc: "إتقان اللغة والتعبيرات المتقدمة", color: "from-rose-500 to-pink-600", bg: "bg-rose-500" },
} as const;

const LessonsPage = () => {
  const navigate = useNavigate();
  const { profile } = useUserProfile();
  const [progress, setProgress] = useState<UserProgress[]>([]);

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

  const lessonsByLevel = {
    1: allLessons.filter((l) => l.level === 1),
    2: allLessons.filter((l) => l.level === 2),
    3: allLessons.filter((l) => l.level === 3),
    4: allLessons.filter((l) => l.level === 4),
    5: allLessons.filter((l) => l.level === 5),
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden py-16 px-4" style={{ background: "linear-gradient(135deg, hsl(258 80% 25%) 0%, hsl(280 80% 30%) 40%, hsl(220 80% 28%) 100%)" }}>
        <div className="absolute top-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full" style={{ background: "radial-gradient(circle, hsl(280 80% 60% / 0.3) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full" style={{ background: "radial-gradient(circle, hsl(220 80% 60% / 0.3) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="text-white/80 hover:text-white hover:bg-white/10 mb-6 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 ml-1" />
            العودة للرئيسية
          </Button>

          <div className="flex items-center gap-4 mb-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-xl">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white">الدروس التفاعلية</h1>
              {profile && (
                <p className="text-white/60 text-sm mt-1">
                  استمر في رحلتك يا {profile.name}! 💪
                </p>
              )}
            </div>
          </div>
          <p className="text-white/70 text-base mt-2">
            تعلم اللغة الإنجليزية خطوة بخطوة من خلال دروس منظمة ومتدرجة
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-8">
        {/* Progress */}
        <div className="mb-10">
          <ProgressTracker
            completedLessons={completedCount}
            totalLessons={allLessons.length}
            averageScore={averageScore}
          />
        </div>

        {/* Lessons by Level */}
        {(Object.entries(lessonsByLevel) as [string, typeof allLessons][]).map(([level, lessons]) => {
          if (lessons.length === 0) return null;
          const levelNum = Number(level) as keyof typeof levelConfig;
          const cfg = levelConfig[levelNum];

          return (
            <div key={level} className="mb-14">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cfg.color} flex items-center justify-center text-white font-black text-sm shadow-lg`}>
                  {level}
                </div>
                <div>
                  <h2 className="text-xl font-black text-gray-900">{cfg.title}</h2>
                  <p className="text-sm text-muted-foreground">{cfg.desc}</p>
                </div>
                <div className="mr-auto">
                  <span className="text-xs text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
                    {lessons.filter((l) => progress.find((p) => p.lessonId === l.id)?.completed).length} / {lessons.length}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

        {/* Coming Soon */}
        <div className="mt-8 p-8 rounded-3xl text-center" style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)", border: "2px dashed #c4b5fd" }}>
          <div className="text-3xl mb-3">✨</div>
          <h3 className="text-xl font-black mb-2 text-violet-900">المزيد من الدروس قادم!</h3>
          <p className="text-violet-600/70">نعمل على إضافة دروس متقدمة وميزات تفاعلية جديدة</p>
        </div>
      </main>
    </div>
  );
};

export default LessonsPage;
