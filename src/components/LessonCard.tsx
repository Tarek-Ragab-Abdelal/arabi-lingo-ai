import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { 
  BookA, 
  Users, 
  Check, 
  Palette, 
  MessageCircle, 
  Hash, 
  Calendar, 
  Zap, 
  HelpCircle, 
  Plane, 
  MapPin, 
  Navigation, 
  Briefcase, 
  Shield, 
  LucideIcon,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  BookA,
  Users,
  Check,
  Palette,
  MessageCircle,
  Hash,
  Calendar,
  Zap,
  HelpCircle,
  Plane,
  MapPin,
  Navigation,
  Briefcase,
  Shield,
};

const colorStyles: Record<string, { gradient: string; bg: string; border: string; badge: string }> = {
  primary: {
    gradient: "from-violet-500 to-indigo-600",
    bg: "from-violet-50 to-indigo-50/50",
    border: "border-violet-100",
    badge: "bg-violet-100 text-violet-700",
  },
  secondary: {
    gradient: "from-amber-500 to-orange-500",
    bg: "from-amber-50 to-orange-50/50",
    border: "border-amber-100",
    badge: "bg-amber-100 text-amber-700",
  },
  accent: {
    gradient: "from-emerald-500 to-teal-600",
    bg: "from-emerald-50 to-teal-50/50",
    border: "border-emerald-100",
    badge: "bg-emerald-100 text-emerald-700",
  },
  warning: {
    gradient: "from-rose-500 to-pink-600",
    bg: "from-rose-50 to-pink-50/50",
    border: "border-rose-100",
    badge: "bg-rose-100 text-rose-700",
  },
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
  const style = colorStyles[color] || colorStyles.primary;

  return (
    <Link to={`/lesson/${id}`} className="block group">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border card-hover cursor-pointer",
          `bg-gradient-to-br ${style.bg} ${style.border}`,
          completed && "ring-2 ring-emerald-400/50"
        )}
      >
        {/* Top accent line */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${style.gradient}`} />

        {/* Completed overlay badge */}
        {completed && (
          <div className="absolute top-3 left-3 z-10">
            <div className="flex items-center gap-1 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
              <CheckCircle2 className="w-3 h-3" />
              مكتمل
            </div>
          </div>
        )}

        <div className="p-5 pt-6">
          {/* Icon + Category */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={cn(
                "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg",
                `${style.gradient}`,
                "group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
              )}
            >
              <Icon className="w-7 h-7" />
            </div>
            <Badge className={cn("text-xs font-semibold border-0", style.badge)}>
              {category}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="text-lg font-black text-gray-900 mb-1 leading-tight">{titleAr}</h3>
          <p className="text-xs text-muted-foreground font-medium mb-3 dir-ltr">{titleEn}</p>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{descriptionAr}</p>

          {/* CTA */}
          <div className={cn(
            "mt-4 flex items-center justify-between text-sm font-bold rounded-xl px-3 py-2 transition-all duration-300",
            `bg-gradient-to-r ${style.gradient} text-white opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0`
          )}>
            <span>{completed ? "مراجعة الدرس" : "ابدأ الدرس"}</span>
            <span className="text-lg">←</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
