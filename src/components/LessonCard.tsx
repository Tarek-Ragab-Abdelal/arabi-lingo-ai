import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookA, Users, Check, Palette, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  BookA,
  Users,
  Check,
  Palette,
};

interface LessonCardProps {
  id: string;
  titleAr: string;
  titleEn: string;
  category: string;
  descriptionAr: string;
  icon: string;
  color: string;
  completed?: boolean;
}

export const LessonCard = ({
  id,
  titleAr,
  titleEn,
  category,
  descriptionAr,
  icon,
  color,
  completed = false,
}: LessonCardProps) => {
  const Icon = iconMap[icon] || BookA;

  const colorClasses = {
    primary: "bg-gradient-primary hover:shadow-medium",
    secondary: "bg-gradient-secondary hover:shadow-medium",
    accent: "bg-accent hover:shadow-medium",
    warning: "bg-warning hover:shadow-medium",
  };

  return (
    <Link to={`/lesson/${id}`}>
      <Card
        className={cn(
          "relative overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-soft cursor-pointer border-0",
          "gradient-card"
        )}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div
              className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center text-white transition-transform duration-300 hover:rotate-6",
                colorClasses[color as keyof typeof colorClasses] || colorClasses.primary
              )}
            >
              <Icon className="w-7 h-7" />
            </div>
            {completed && (
              <Badge className="bg-success text-white">مكتمل</Badge>
            )}
          </div>

          <div className="space-y-2">
            <Badge variant="outline" className="mb-2">
              {category}
            </Badge>
            <h3 className="text-xl font-bold text-foreground mb-1">{titleAr}</h3>
            <p className="text-sm text-muted-foreground dir-ltr font-medium">
              {titleEn}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              {descriptionAr}
            </p>
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary opacity-50" />
      </Card>
    </Link>
  );
};
