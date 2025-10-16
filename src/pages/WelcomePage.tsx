import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Headphones, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="gradient-primary text-white py-12 px-4 shadow-strong">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <GraduationCap className="w-16 h-16" />
            <h1 className="text-4xl md:text-6xl font-black">أهلاً وسهلاً</h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 mb-2">
            مرحباً بك في تطبيق تعلم الإنجليزية
          </p>
          <p className="text-lg text-white/80">
            رحلتك لإتقان اللغة الإنجليزية تبدأ من هنا
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">اختر طريقة التعلم المناسبة لك</h2>
          <p className="text-lg text-muted-foreground">
            يمكنك البدء بالدروس المنظمة أو التدريب العملي المباشر
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Lessons Option */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer overflow-hidden">
            <CardContent className="p-8" onClick={() => navigate('/lessons')}>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-right">📘 الدروس</h3>
                <p className="text-muted-foreground mb-6 text-right leading-relaxed">
                  تعلم اللغة الإنجليزية خطوة بخطوة من خلال دروس منظمة تبدأ من الأساسيات وتتدرج حتى المستوى المتقدم
                </p>
                <ul className="text-right space-y-2 mb-8 text-sm text-muted-foreground">
                  <li className="flex items-center justify-end gap-2">
                    <span>دروس الحروف والأرقام</span>
                    <ChevronLeft className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>قواعد اللغة الأساسية</span>
                    <ChevronLeft className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>المفردات والمحادثة</span>
                    <ChevronLeft className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>اختبارات تفاعلية</span>
                    <ChevronLeft className="w-4 h-4" />
                  </li>
                </ul>
                <Button 
                  className="w-full text-lg py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  onClick={() => navigate('/lessons')}
                >
                  ابدأ التعلم
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Training Option */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50 cursor-pointer overflow-hidden">
            <CardContent className="p-8" onClick={() => navigate('/training')}>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-right">🎧 التدريب</h3>
                <p className="text-muted-foreground mb-6 text-right leading-relaxed">
                  تدرب على الاستماع والفهم من خلال نصوص إنجليزية متدرجة الصعوبة مع ترجمة عربية وتمارين تفاعلية
                </p>
                <ul className="text-right space-y-2 mb-8 text-sm text-muted-foreground">
                  <li className="flex items-center justify-end gap-2">
                    <span>نصوص للمبتدئين والمتقدمين</span>
                    <ChevronLeft className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>ملفات صوتية بأصوات مختلفة</span>
                    <ChevronLeft className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>ترجمة ونطق باللغة العربية</span>
                    <ChevronLeft className="w-4 h-4" />
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>أسئلة فهم واستيعاب</span>
                    <ChevronLeft className="w-4 h-4" />
                  </li>
                </ul>
                <Button 
                  className="w-full text-lg py-6 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700"
                  onClick={() => navigate('/training')}
                >
                  ابدأ التدريب
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">لماذا تطبيقنا؟</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-bold mb-2">منهج مدروس</h4>
              <p className="text-sm text-muted-foreground">دروس منظمة تتدرج من الأساسيات إلى المستوى المتقدم</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔊</span>
              </div>
              <h4 className="font-bold mb-2">نطق صحيح</h4>
              <p className="text-sm text-muted-foreground">ملفات صوتية واضحة لتعلم النطق الصحيح</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-bold mb-2">تتبع التقدم</h4>
              <p className="text-sm text-muted-foreground">راقب تقدمك واحصل على إحصائيات مفصلة</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;