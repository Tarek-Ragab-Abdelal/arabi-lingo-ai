import { Lesson } from "@/types/lesson";

export const greetingsLesson: Lesson = {
  id: "greetings",
  titleAr: "التحيات",
  titleEn: "Greetings",
  category: "محادثة",
  descriptionAr: "تعلم التحيات والعبارات الأساسية للترحيب والوداع",
  icon: "MessageCircle",
  color: "primary",
  level: 1,
  items: [
    { english: "Hello", arabic: "مرحبا", transliteration: "hel-oh", exampleSentence: { en: "Hello, how are you?", ar: "مرحبا، كيف حالك؟" } },
    { english: "Good morning", arabic: "صباح الخير", transliteration: "good mor-ning" },
    { english: "Good afternoon", arabic: "مساء الخير", transliteration: "good af-ter-noon" },
    { english: "Good evening", arabic: "مساء الخير", transliteration: "good eev-ning" },
    { english: "Good night", arabic: "تصبح على خير", transliteration: "good nyt" },
    { english: "Goodbye", arabic: "وداعا", transliteration: "good-by" },
    { english: "See you later", arabic: "أراك لاحقا", transliteration: "see yoo lay-ter" },
    { english: "How are you?", arabic: "كيف حالك؟", transliteration: "how ar yoo" },
    { english: "I'm fine", arabic: "أنا بخير", transliteration: "aym fayn" },
    { english: "Thank you", arabic: "شكرا لك", transliteration: "thank yoo" },
    { english: "You're welcome", arabic: "على الرحب والسعة", transliteration: "yoor wel-kum" },
    { english: "Please", arabic: "من فضلك", transliteration: "pleez" },
    { english: "Excuse me", arabic: "عفوا", transliteration: "eks-kyooz mee" },
    { english: "I'm sorry", arabic: "أنا آسف", transliteration: "aym sor-ee" },
  ],
  quizzes: [
    { id: "q1", questionAr: "كيف تقول 'مرحبا' بالإنجليزية؟", options: ["Hello", "Goodbye", "Thank you", "Sorry"], correctAnswer: "Hello" },
    { id: "q2", questionAr: "ما معنى 'How are you?'؟", options: ["كيف حالك؟", "شكرا لك", "وداعا", "مرحبا"], correctAnswer: "كيف حالك؟" },
    { id: "q3", questionAr: "كيف تقول 'شكرا لك' بالإنجليزية؟", options: ["Thank you", "Please", "Sorry", "Hello"], correctAnswer: "Thank you" },
  ],
};
