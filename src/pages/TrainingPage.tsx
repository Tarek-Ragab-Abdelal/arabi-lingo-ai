import { allTrainingParagraphs, trainingByLevel } from "@/data/training";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Headphones, Play, Clock, Target, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TrainingProgress } from "@/types/lesson";
import { useUserProfile } from "@/hooks/useUserProfile";

const levelConfig = {
  1: { title: "مبتدئ", color: "from-emerald-500 to-teal-600", textColor: "text-emerald-700", bg: "from-emerald-50 to-teal-50/50", border: "border-emerald-100" },
  2: { title: "متوسط", color: "from-blue-500 to-cyan-600", textColor: "text-blue-700", bg: "from-blue-50 to-cyan-50/50", border: "border-blue-100" },
  3: { title: "متقدم", color: "from-violet-500 to-indigo-600", textColor: "text-violet-700", bg: "from-violet-50 to-indigo-50/50", border: "border-violet-100" },
  4: { title: "خبير", color: "from-orange-500 to-amber-600", textColor: "text-orange-700", bg: "from-orange-50 to-amber-50/50", border: "border-orange-100" },
  5: { title: "محترف", color: "from-rose-500 to-pink-600", textColor: "text-rose-700", bg: "from-rose-50 to-pink-50/50", border: "border-rose-100" },
} as const;

const categoryIcons: Record<string, string> = {
  daily: "🏠",
  descriptive: "📝",
  dialogue: "💬",
  workplace: "💼",
  travel: "✈️",
};

const categoryNames: Record<string, string> = {
  daily: "الحياة اليومية",
  descriptive: "الوصف",
  dialogue: "المحادثة",
  workplace: "مكان العمل",
  travel: "السفر",
};

const TrainingPage = () => {
  const navigate = useNavigate();
  const { profile } = useUserProfile();
  const [progress, setProgress] = useState<TrainingProgress[]>([]);

  useEffect(() => {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden py-16 px-4" style={{ background: "linear-gradient(135deg, hsl(162 70% 20%) 0%, hsl(180 70% 22%) 40%, hsl(200 70% 22%) 100%)" }}>
        <div className="absolute top-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full" style={{ background: "radial-gradient(circle, hsl(162 80% 50% / 0.3) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full" style={{ background: "radial-gradient(circle, hsl(200 80% 50% / 0.3) 0%, transparent 70%)", filter: "blur(60px)" }} />

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
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl">
              <Headphones className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white">التدريب العملي</h1>
              {profile && (
                <p className="text-white/60 text-sm mt-1">
                  هيا يا {profile.name}، تدرب وطور مهاراتك! 🎧
                </p>
              )}
            </div>
          </div>
          <p className="text-white/70 text-base mt-2">
            تدرب على الاستماع والفهم من خلال نصوص متدرجة الصعوبة
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-8">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { icon: Target, label: "مكتملة", value: completedCount, color: "from-violet-500 to-indigo-600" },
            { icon: Clock, label: "الإجمالي", value: allTrainingParagraphs.length, color: "from-emerald-500 to-teal-600" },
            { icon: Play, label: "متوسط النتائج", value: `${averageScore.toFixed(0)}%`, color: "from-amber-500 to-orange-500" },
          ].map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100 text-center card-hover">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-2`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-2xl font-black text-gray-900">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        {/* Training by Level */}
        {(Object.entries(trainingByLevel) as [string, typeof allTrainingParagraphs][]).map(([level, paragraphs]) => {
          if (paragraphs.length === 0) return null;
          const levelNum = Number(level) as keyof typeof levelConfig;
          const cfg = levelConfig[levelNum];

          return (
            <div key={level} className="mb-14">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cfg.color} flex items-center justify-center text-white font-black text-sm shadow-lg`}>
                  {level}
                </div>
                <div>
                  <h2 className="text-xl font-black text-gray-900">المستوى {cfg.title}</h2>
                </div>
                <div className="mr-auto">
                  <span className="text-xs text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
                    {paragraphs.filter((p) => progress.find((pr) => pr.paragraphId === p.id)?.completed).length} / {paragraphs.length}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {paragraphs.map((paragraph) => {
                  const paragraphProgress = progress.find((p) => p.paragraphId === paragraph.id);
                  const isCompleted = paragraphProgress?.completed || false;

                  return (
                    <div
                      key={paragraph.id}
                      className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${cfg.bg} ${cfg.border} card-hover cursor-pointer`}
                      onClick={() => navigate(`/training/${paragraph.id}`)}
                    >
                      {/* Top accent */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cfg.color}`} />

                      {isCompleted && (
                        <div className="absolute top-3 left-3 z-10">
                          <div className="flex items-center gap-1 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                            <CheckCircle2 className="w-3 h-3" />
                            مكتمل
                          </div>
                        </div>
                      )}

                      <div className="p-5 pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-black text-gray-900 mb-1">{paragraph.titleAr}</h3>
                            <p className="text-xs text-muted-foreground dir-ltr">{paragraph.titleEn}</p>
                          </div>
                          <span className="text-2xl">{categoryIcons[paragraph.category]}</span>
                        </div>

                        <Badge className={`text-xs border-0 mb-3 ${cfg.textColor} bg-white/60`}>
                          {categoryNames[paragraph.category]}
                        </Badge>

                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                          {paragraph.englishText.substring(0, 100)}...
                        </p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <span>{paragraph.quizzes.length} سؤال</span>
                          {paragraphProgress?.quizScore !== undefined && (
                            <span className="text-emerald-600 font-bold">
                              النتيجة: {paragraphProgress.quizScore}%
                            </span>
                          )}
                        </div>

                        <Button
                          className={`w-full font-bold rounded-xl bg-gradient-to-r ${cfg.color} border-0 text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300`}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/training/${paragraph.id}`);
                          }}
                        >
                          <Play className="w-4 h-4 ml-2" />
                          {isCompleted ? "إعادة التدريب" : "ابدأ التدريب"}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Coming Soon */}
        <div className="mt-8 p-8 rounded-3xl text-center" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)", border: "2px dashed #86efac" }}>
          <div className="text-3xl mb-3">🎧</div>
          <h3 className="text-xl font-black mb-2 text-emerald-900">المزيد من التمارين قادم!</h3>
          <p className="text-emerald-600/70">نعمل على إضافة محادثات تفاعلية وتمارين جديدة</p>
        </div>
      </main>
    </div>
  );
};

export default TrainingPage;
