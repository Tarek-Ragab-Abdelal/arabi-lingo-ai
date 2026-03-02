import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Sparkles, User, Calendar } from "lucide-react";
import { UserProfile } from "@/hooks/useUserProfile";

interface OnboardingDialogProps {
  onComplete: (profile: UserProfile) => void;
}

const OnboardingDialog = ({ onComplete }: OnboardingDialogProps) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<{ name?: string; age?: string }>({});

  const validateName = () => {
    if (!name.trim() || name.trim().length < 2) {
      setErrors((e) => ({ ...e, name: "الرجاء إدخال اسمك (حرفان على الأقل)" }));
      return false;
    }
    setErrors((e) => ({ ...e, name: undefined }));
    return true;
  };

  const validateAge = () => {
    const ageNum = Number(age);
    if (!age || isNaN(ageNum) || ageNum < 5 || ageNum > 120) {
      setErrors((e) => ({ ...e, age: "الرجاء إدخال عمر صحيح (بين 5 و 120)" }));
      return false;
    }
    setErrors((e) => ({ ...e, age: undefined }));
    return true;
  };

  const handleNext = () => {
    if (validateName()) setStep(2);
  };

  const handleSubmit = () => {
    if (validateAge()) {
      onComplete({ name: name.trim(), age: Number(age) });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 onboarding-bg" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md mx-4 glass-card rounded-3xl p-8 shadow-2xl animate-slide-up">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-xl">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-yellow-900" />
            </div>
          </div>
          <h1 className="text-2xl font-black text-white mb-1">أهلاً بك في عربي لينجو!</h1>
          <p className="text-white/70 text-sm text-center">دعنا نتعرف عليك أولاً</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className={`w-8 h-2 rounded-full transition-all duration-300 ${step >= 1 ? "bg-violet-400" : "bg-white/20"}`} />
          <div className={`w-8 h-2 rounded-full transition-all duration-300 ${step >= 2 ? "bg-violet-400" : "bg-white/20"}`} />
        </div>

        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6 text-violet-300" />
              </div>
              <h2 className="text-xl font-bold text-white">ما اسمك؟</h2>
              <p className="text-white/60 text-sm mt-1">سنخصص تجربتك التعليمية لك</p>
            </div>
            <div className="space-y-2">
              <Label className="text-white/80 text-right block">الاسم</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleNext()}
                placeholder="أدخل اسمك هنا..."
                className="onboarding-input text-right text-lg py-6"
                autoFocus
              />
              {errors.name && (
                <p className="text-red-400 text-sm text-right">{errors.name}</p>
              )}
            </div>
            <Button
              onClick={handleNext}
              className="w-full py-6 text-lg font-bold bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 border-0 shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
            >
              التالي →
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-violet-300" />
              </div>
              <h2 className="text-xl font-bold text-white">مرحباً، {name}! 👋</h2>
              <p className="text-white/60 text-sm mt-1">كم عمرك؟ سنضبط المحتوى المناسب لك</p>
            </div>
            <div className="space-y-2">
              <Label className="text-white/80 text-right block">العمر</Label>
              <Input
                type="number"
                min={5}
                max={120}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="أدخل عمرك..."
                className="onboarding-input text-right text-lg py-6"
                autoFocus
              />
              {errors.age && (
                <p className="text-red-400 text-sm text-right">{errors.age}</p>
              )}
            </div>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                onClick={() => setStep(1)}
                className="flex-1 py-6 text-white/70 hover:text-white hover:bg-white/10 border border-white/20"
              >
                ← رجوع
              </Button>
              <Button
                onClick={handleSubmit}
                className="flex-[2] py-6 text-lg font-bold bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 border-0 shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
              >
                🚀 ابدأ رحلتك!
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingDialog;
