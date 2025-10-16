import { useParams, useNavigate } from "react-router-dom";
import { allLessons } from "@/data/lessons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AudioPlayer } from "@/components/AudioPlayer";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LessonPage = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = allLessons.find((l) => l.id === lessonId);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">الدرس غير موجود</h2>
          <Button onClick={() => navigate("/")}>العودة للرئيسية</Button>
        </div>
      </div>
    );
  }

  const handleStartQuiz = () => {
    navigate(`/quiz/${lessonId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary text-white py-6 px-4 shadow-strong">
        <div className="container mx-auto max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowRight className="w-4 h-4 ml-2" />
            العودة
          </Button>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                {lesson.category}
              </Badge>
              <h1 className="text-3xl font-black mb-1">{lesson.titleAr}</h1>
              <p className="text-white/90 text-sm dir-ltr">{lesson.titleEn}</p>
            </div>
          </div>
          <p className="mt-4 text-white/90">{lesson.descriptionAr}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-8">
        <div className="space-y-4">
          {lesson.items.map((item, index) => (
            <Card
              key={index}
              className="p-6 gradient-card shadow-soft border-0 hover:shadow-medium transition-shadow duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <h3 className="text-2xl font-bold dir-ltr">{item.english}</h3>
                    </div>
                    <p className="text-xl text-foreground mb-1">{item.arabic}</p>
                    {item.transliteration && (
                      <p className="text-sm text-muted-foreground dir-ltr italic">
                        [{item.transliteration}]
                      </p>
                    )}
                  </div>
                  <AudioPlayer text={item.english} />
                </div>

                {item.exampleSentence && (
                  <div className="mt-4 p-4 rounded-lg bg-muted/50 border-r-4 border-accent">
                    <p className="text-sm text-muted-foreground mb-1">مثال:</p>
                    <p className="font-medium dir-ltr mb-1">
                      {item.exampleSentence.en}
                    </p>
                    <p className="text-muted-foreground">{item.exampleSentence.ar}</p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Quiz Button */}
        {lesson.quizzes && lesson.quizzes.length > 0 && (
          <div className="mt-8 p-6 rounded-2xl gradient-card shadow-medium border-0 text-center">
            <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-success" />
            <h3 className="text-xl font-bold mb-2">اختبر معلوماتك!</h3>
            <p className="text-muted-foreground mb-6">
              أنهيت الدرس؟ حان وقت الاختبار لتثبيت المعلومات
            </p>
            <Button
              size="lg"
              className="gradient-primary text-white px-8 shadow-medium hover:shadow-strong transition-all duration-300"
              onClick={handleStartQuiz}
            >
              ابدأ الاختبار ({lesson.quizzes.length} أسئلة)
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default LessonPage;
