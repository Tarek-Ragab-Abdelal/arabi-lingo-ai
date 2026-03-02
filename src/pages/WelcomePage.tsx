import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  BookOpen, 
  Headphones, 
  Sparkles,
  Target,
  Volume2,
  BarChart3,
  Star,
  Trophy,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUserProfile } from "@/hooks/useUserProfile";

const WelcomePage = () => {
  const navigate = useNavigate();
  const { profile } = useUserProfile();

  const greeting = profile
    ? `أهلاً، ${profile.name}! 👋`
    : "أهلاً وسهلاً! 👋";

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 px-4" style={{ background: "linear-gradient(135deg, hsl(258 80% 25%) 0%, hsl(280 80% 30%) 40%, hsl(220 80% 28%) 100%)" }}>
        {/* Orbs */}
        <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, hsl(280 80% 60% / 0.35) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-[-60px] left-[-60px] w-[350px] h-[350px] rounded-full" style={{ background: "radial-gradient(circle, hsl(220 80% 60% / 0.35) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full -translate-x-1/2 -translate-y-1/2" style={{ background: "radial-gradient(circle, hsl(258 90% 70% / 0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />

        {/* Floating decorations */}
        <div className="absolute top-8 left-8 w-3 h-3 bg-violet-400/60 rounded-full animate-float" />
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-float-delay" />
        <div className="absolute bottom-12 left-1/3 w-4 h-4 bg-purple-400/40 rounded-full animate-float-delay-2" />
        <div className="absolute bottom-20 right-12 w-2 h-2 bg-indigo-400/60 rounded-full animate-float" />

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          {/* User greeting badge */}
          {profile && (
            <div className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full mb-8 animate-slide-up">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold avatar-ring">
                {profile.name.charAt(0)}
              </div>
              <span className="text-white/90 text-sm font-medium">{greeting}</span>
            </div>
          )}

          {/* Logo */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-slide-up">
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-2xl">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 text-yellow-900" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 animate-slide-up leading-tight">
            تعلّم الإنجليزية
            <br />
            <span style={{ background: "linear-gradient(90deg, #a78bfa, #60a5fa, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              بطريقة مختلفة
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            منهج تفاعلي متكامل يجمع بين الدروس، الاستماع، والاختبارات لتحقيق أهدافك بسرعة
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-slide-up">
            {[
              { icon: Star, label: "تقييم ممتاز", value: "4.9 ⭐" },
              { icon: Trophy, label: "دروس متاحة", value: "17+" },
              { icon: Zap, label: "تمرين تدريبي", value: "15+" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass px-5 py-3 rounded-2xl flex items-center gap-3">
                <Icon className="w-4 h-4 text-violet-300" />
                <div className="text-right">
                  <p className="text-white font-bold text-sm">{value}</p>
                  <p className="text-white/50 text-xs">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              onClick={() => navigate('/lessons')}
              className="px-10 py-7 text-lg font-bold rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 border-0 shadow-xl hover:shadow-violet-500/40 transition-all duration-300 hover:scale-105"
            >
              <BookOpen className="w-5 h-5 ml-2" />
              ابدأ التعلم الآن
            </Button>
            <Button
              onClick={() => navigate('/training')}
              variant="outline"
              className="px-10 py-7 text-lg font-bold rounded-2xl border-white/25 text-white bg-white/10 hover:bg-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              <Headphones className="w-5 h-5 ml-2" />
              التدريب العملي
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-16">
        {/* Section title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            اختر مسارك التعليمي
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gradient-primary">طريقتان للتعلم</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            ابدأ بالدروس المنظمة أو التدريب العملي — كلاهما يقودك للإتقان
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* Lessons Card */}
          <div
            className="group relative overflow-hidden rounded-3xl cursor-pointer card-hover lesson-card-glow"
            style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)", border: "1px solid #ddd6fe" }}
            onClick={() => navigate('/lessons')}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full" style={{ background: "radial-gradient(circle, hsl(258 90% 70% / 0.15) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
            
            <div className="relative z-10 p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <Badge className="bg-violet-500 text-white shadow-md">مميز</Badge>
              </div>

              <h3 className="text-2xl font-black mb-3 text-violet-900">📘 الدروس التفاعلية</h3>
              <p className="text-violet-700/70 mb-6 leading-relaxed">
                تعلم من الصفر حتى الاحتراف عبر دروس منظمة ومتدرجة، تبدأ بالحروف وتنتهي بالمحادثة المتقدمة
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {["الحروف والأرقام", "القواعد الأساسية", "المفردات", "اختبارات تفاعلية"].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-xl text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    <span className="text-violet-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full py-6 text-base font-bold bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 rounded-2xl shadow-lg hover:shadow-violet-500/30 transition-all duration-300">
                <BookOpen className="w-4 h-4 ml-2" />
                ابدأ الدروس الآن
              </Button>
            </div>
          </div>

          {/* Training Card */}
          <div
            className="group relative overflow-hidden rounded-3xl cursor-pointer card-hover lesson-card-glow"
            style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)", border: "1px solid #bbf7d0" }}
            onClick={() => navigate('/training')}
          >
            <div className="absolute top-0 left-0 w-48 h-48 rounded-full" style={{ background: "radial-gradient(circle, hsl(162 80% 50% / 0.15) 0%, transparent 70%)", transform: "translate(-30%, -30%)" }} />

            <div className="relative z-10 p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <Badge className="bg-emerald-500 text-white shadow-md">جديد</Badge>
              </div>

              <h3 className="text-2xl font-black mb-3 text-emerald-900">🎧 التدريب العملي</h3>
              <p className="text-emerald-700/70 mb-6 leading-relaxed">
                تدرب على الاستماع والفهم عبر نصوص متدرجة الصعوبة مع ترجمة فورية وتمارين تفاعلية
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {["نصوص للجميع", "ملفات صوتية", "ترجمة عربية", "أسئلة فهم"].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-xl text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-emerald-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full py-6 text-base font-bold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300">
                <Headphones className="w-4 h-4 ml-2" />
                ابدأ التدريب الآن
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-black mb-3">لماذا نحن الأفضل؟</h3>
            <p className="text-muted-foreground">ميزات حصرية تجعل تعلمك أسرع وأمتع</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "منهج مدروس",
                desc: "دروس منظمة تتدرج من الصفر حتى الاحتراف بطريقة علمية مثبتة",
                color: "from-violet-500 to-indigo-600",
                bg: "bg-violet-50",
                badge: "منهج معتمد",
                emoji: "🎯",
              },
              {
                icon: Volume2,
                title: "نطق صحيح",
                desc: "ملفات صوتية بجودة عالية وأصوات متنوعة لتعلم النطق المثالي",
                color: "from-emerald-500 to-teal-600",
                bg: "bg-emerald-50",
                badge: "جودة عالية",
                emoji: "🔊",
              },
              {
                icon: BarChart3,
                title: "تتبع التقدم",
                desc: "راقب مستواك واحصل على إحصائيات مفصلة وتقارير تحليلية دورية",
                color: "from-orange-500 to-red-500",
                bg: "bg-orange-50",
                badge: "تحليل ذكي",
                emoji: "📊",
              },
            ].map(({ icon: Icon, title, desc, color, bg, badge, emoji }) => (
              <div
                key={title}
                className={`group ${bg} rounded-3xl p-6 border border-black/5 card-hover text-center`}
              >
                <div className="relative mb-5 inline-block">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 text-xl">{emoji}</div>
                </div>
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
                <Badge variant="outline" className="text-xs">{badge}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl p-10 text-center" style={{ background: "linear-gradient(135deg, hsl(258 80% 55%) 0%, hsl(280 80% 60%) 50%, hsl(220 80% 60%) 100%)" }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)", transform: "translate(20%, -20%)" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)", transform: "translate(-20%, 20%)" }} />

          <div className="relative z-10">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-3xl font-black text-white mb-3">
              {profile ? `${profile.name}، جاهز لبدء الرحلة؟` : "جاهز لبدء رحلة التعلم؟"}
            </h4>
            <p className="text-white/75 mb-8 max-w-md mx-auto">
              انضم لآلاف المتعلمين الذين حققوا أهدافهم وطوّروا مستواهم معنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/lessons')}
                className="px-8 py-6 text-base font-bold bg-white text-violet-700 hover:bg-white/90 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-4 h-4 ml-2" />
                ابدأ الدروس
              </Button>
              <Button
                onClick={() => navigate('/training')}
                variant="outline"
                className="px-8 py-6 text-base font-bold border-white/30 text-white bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Headphones className="w-4 h-4 ml-2" />
                جرب التدريب
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;
