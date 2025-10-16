import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  BookOpen, 
  Headphones, 
  ChevronLeft, 
  Sparkles,
  Target,
  Volume2,
  BarChart3,
  Star,
  Users,
  Trophy
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-200 rounded-full"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-200 rounded-full"></div>
        <div className="absolute top-80 left-1/4 w-2 h-2 bg-purple-200 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-4 h-4 bg-blue-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-green-200 rounded-full"></div>
      </div>
      
      {/* Header */}
      <header className="relative gradient-primary text-white py-20 px-4 shadow-strong overflow-hidden">
        {/* Header Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"></div>
              <GraduationCap className="w-20 h-20 relative z-10 drop-shadow-lg" />
            </div>
            <div className="text-right">
              <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-l from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
                أهلاً وسهلاً
              </h1>
            </div>
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-white/95 font-semibold leading-relaxed">
              مرحباً بك في تطبيق تعلم الإنجليزية
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              رحلتك لإتقان اللغة الإنجليزية تبدأ من هنا • تعلم بطريقة تفاعلية وممتعة
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-white/90">
                <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                <span className="text-sm font-medium">تقييم ممتاز</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2 text-white/90">
                <Trophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-medium">منهج معتمد</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-green-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">اختر مسارك التعليمي</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-l from-gray-900 to-gray-600 bg-clip-text text-transparent">
            اختر طريقة التعلم المناسبة لك
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            يمكنك البدء بالدروس المنظمة أو التدريب العملي المباشر حسب مستواك وأهدافك
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* Lessons Option */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 cursor-pointer overflow-hidden relative bg-gradient-to-br from-white to-blue-50/30 hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full"></div>
            <CardContent className="p-8 relative z-10" onClick={() => navigate('/lessons')}>
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                    <BookOpen className="w-14 h-14 text-white drop-shadow-md" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Badge variant="default" className="bg-blue-500 text-white shadow-md">
                      جديد
                    </Badge>
                  </div>
                </div>
                
                <h3 className="text-3xl font-black mb-4 text-right flex items-center justify-center gap-3">
                  <span className="text-3xl">📘</span>
                  <span>الدروس التفاعلية</span>
                </h3>
                
                <p className="text-muted-foreground mb-8 text-right leading-relaxed text-lg">
                  تعلم اللغة الإنجليزية خطوة بخطوة من خلال دروس منظمة تبدأ من الأساسيات وتتدرج حتى المستوى المتقدم
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
                  <div className="flex items-center justify-end gap-2 bg-blue-50 p-3 rounded-lg">
                    <span className="font-medium">دروس الحروف والأرقام</span>
                    <ChevronLeft className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-end gap-2 bg-purple-50 p-3 rounded-lg">
                    <span className="font-medium">قواعد اللغة الأساسية</span>
                    <ChevronLeft className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex items-center justify-end gap-2 bg-green-50 p-3 rounded-lg">
                    <span className="font-medium">المفردات والمحادثة</span>
                    <ChevronLeft className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-end gap-2 bg-yellow-50 p-3 rounded-lg">
                    <span className="font-medium">اختبارات تفاعلية</span>
                    <ChevronLeft className="w-4 h-4 text-yellow-600" />
                  </div>
                </div>
                
                <Button 
                  className="w-full text-lg py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  onClick={() => navigate('/lessons')}
                >
                  <BookOpen className="w-5 h-5 ml-2" />
                  ابدأ التعلم الآن
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Training Option */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/30 cursor-pointer overflow-hidden relative bg-gradient-to-br from-white to-green-50/30 hover:scale-[1.02]">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-br-full"></div>
            <CardContent className="p-8 relative z-10" onClick={() => navigate('/training')}>
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                    <Headphones className="w-14 h-14 text-white drop-shadow-md" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Badge variant="default" className="bg-green-500 text-white shadow-md">
                      مميز
                    </Badge>
                  </div>
                </div>
                
                <h3 className="text-3xl font-black mb-4 text-right flex items-center justify-center gap-3">
                  <span className="text-3xl">🎧</span>
                  <span>التدريب العملي</span>
                </h3>
                
                <p className="text-muted-foreground mb-8 text-right leading-relaxed text-lg">
                  تدرب على الاستماع والفهم من خلال نصوص إنجليزية متدرجة الصعوبة مع ترجمة عربية وتمارين تفاعلية
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
                  <div className="flex items-center justify-end gap-2 bg-green-50 p-3 rounded-lg">
                    <span className="font-medium">نصوص للمبتدئين والمتقدمين</span>
                    <ChevronLeft className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-end gap-2 bg-teal-50 p-3 rounded-lg">
                    <span className="font-medium">ملفات صوتية بأصوات مختلفة</span>
                    <ChevronLeft className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="flex items-center justify-end gap-2 bg-blue-50 p-3 rounded-lg">
                    <span className="font-medium">ترجمة ونطق باللغة العربية</span>
                    <ChevronLeft className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex items-center justify-end gap-2 bg-purple-50 p-3 rounded-lg">
                    <span className="font-medium">أسئلة فهم واستيعاب</span>
                    <ChevronLeft className="w-4 h-4 text-purple-600" />
                  </div>
                </div>
                
                <Button 
                  className="w-full text-lg py-6 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  onClick={() => navigate('/training')}
                >
                  <Headphones className="w-5 h-5 ml-2" />
                  ابدأ التدريب الآن
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-green-50/50 rounded-3xl"></div>
          
          <div className="relative z-10 p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 text-purple-600 fill-purple-600" />
                <span className="text-sm font-semibold text-gray-700">مميزات التطبيق</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-l from-gray-900 to-gray-600 bg-clip-text text-transparent">
                لماذا تطبيقنا؟
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                تطبيق متكامل يجمع بين أفضل الطرق التعليمية والتكنولوجيا الحديثة
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-xs">✨</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">منهج مدروس</h4>
                <p className="text-muted-foreground leading-relaxed">
                  دروس منظمة تتدرج من الأساسيات إلى المستوى المتقدم بطريقة علمية مدروسة
                </p>
                <div className="mt-4 flex justify-center">
                  <Badge variant="outline" className="text-xs">
                    منهج معتمد
                  </Badge>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Volume2 className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-xs">🔊</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">نطق صحيح</h4>
                <p className="text-muted-foreground leading-relaxed">
                  ملفات صوتية عالية الجودة بأصوات متنوعة لتعلم النطق الصحيح والواضح
                </p>
                <div className="mt-4 flex justify-center">
                  <Badge variant="outline" className="text-xs">
                    جودة عالية
                  </Badge>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-xs">📊</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">تتبع التقدم</h4>
                <p className="text-muted-foreground leading-relaxed">
                  راقب تقدمك واحصل على إحصائيات مفصلة وتقارير دورية لأدائك
                </p>
                <div className="mt-4 flex justify-center">
                  <Badge variant="outline" className="text-xs">
                    تقارير مفصلة
                  </Badge>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">
                  جاهز لبدء رحلة التعلم؟
                </h4>
                <p className="text-blue-100 mb-6 max-w-md mx-auto">
                  انضم إلى آلاف المتعلمين الذين حققوا أهدافهم معنا
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    variant="secondary" 
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold"
                    onClick={() => navigate('/lessons')}
                  >
                    <BookOpen className="w-4 h-4 ml-2" />
                    ابدأ الدروس
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-semibold"
                    onClick={() => navigate('/training')}
                  >
                    <Headphones className="w-4 h-4 ml-2" />
                    جرب التدريب
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;