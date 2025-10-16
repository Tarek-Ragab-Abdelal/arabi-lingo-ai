import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Trophy, Target, Star } from "lucide-react";

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
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <Card className="p-6 gradient-card shadow-medium border-0">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Trophy className="w-5 h-5 text-warning" />
            تقدمك التعليمي
          </h3>
          <span className="text-sm text-muted-foreground">
            {completedLessons} من {totalLessons}
          </span>
        </div>

        <div className="space-y-2">
          <Progress value={progressPercentage} className="h-3" />
          <p className="text-sm text-muted-foreground text-center">
            {progressPercentage.toFixed(0)}% مكتمل
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10">
            <Target className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">الدروس المكتملة</p>
              <p className="text-lg font-bold">{completedLessons}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-lg bg-warning/10">
            <Star className="w-5 h-5 text-warning" />
            <div>
              <p className="text-xs text-muted-foreground">متوسط النتائج</p>
              <p className="text-lg font-bold">{averageScore.toFixed(0)}%</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
