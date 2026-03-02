import { Card } from "@/components/ui/card";
import { Trophy, Target, Star, Flame } from "lucide-react";

interface ProgressTrackerProps {
  completedLessons: number;
  totalLessons: number;
  averageScore?: number;
}

export const ProgressTracker = ({
  completedLessons,
  totalLessons,
  averageScore = 0,
}: ProgressTrackerProps) => {
  const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  const getLevel = () => {
    if (progressPercentage >= 80) return { label: "خبير", emoji: "🏆", color: "from-yellow-500 to-orange-500", gradientColors: "#f59e0b, #f97316" };
    if (progressPercentage >= 60) return { label: "متقدم", emoji: "🌟", color: "from-violet-500 to-indigo-600", gradientColors: "#8b5cf6, #6366f1" };
    if (progressPercentage >= 40) return { label: "متوسط", emoji: "📈", color: "from-blue-500 to-cyan-500", gradientColors: "#3b82f6, #06b6d4" };
    if (progressPercentage >= 20) return { label: "مبتدئ", emoji: "🌱", color: "from-emerald-500 to-teal-500", gradientColors: "#10b981, #14b8a6" };
    return { label: "جديد", emoji: "🚀", color: "from-gray-400 to-gray-500", gradientColors: "#9ca3af, #6b7280" };
  };

  const level = getLevel();

  return (
    <Card className="overflow-hidden border-0 shadow-medium" style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 60%, #e0e7ff 100%)" }}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center shadow-md`}>
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-black text-gray-900 text-lg">تقدمك التعليمي</h3>
              <p className="text-xs text-muted-foreground">واصل التعلم لترتقي بمستواك</p>
            </div>
          </div>
          <div className="text-left">
            <span className="text-2xl">{level.emoji}</span>
            <p className="text-xs font-bold text-center" style={{ background: `linear-gradient(90deg, ${level.gradientColors})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {level.label}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">الدروس المكتملة</span>
            <span className="font-bold text-violet-700">{progressPercentage.toFixed(0)}%</span>
          </div>
          <div className="h-4 bg-white/60 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full rounded-full progress-gradient transition-all duration-700"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0</span>
            <span>{completedLessons} من {totalLessons}</span>
            <span>{totalLessons}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 text-center">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mx-auto mb-2">
              <Target className="w-4 h-4 text-white" />
            </div>
            <p className="text-xl font-black text-gray-900">{completedLessons}</p>
            <p className="text-xs text-muted-foreground">مكتمل</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 text-center">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-2">
              <Star className="w-4 h-4 text-white" />
            </div>
            <p className="text-xl font-black text-gray-900">{averageScore.toFixed(0)}%</p>
            <p className="text-xs text-muted-foreground">متوسط</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 text-center">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center mx-auto mb-2">
              <Flame className="w-4 h-4 text-white" />
            </div>
            <p className="text-xl font-black text-gray-900">{totalLessons - completedLessons}</p>
            <p className="text-xs text-muted-foreground">متبقي</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
