import { Lesson } from "@/types/lesson";

export const commonVerbsLesson: Lesson = {
  id: "common-verbs",
  titleAr: "الأفعال الشائعة",
  titleEn: "Common Verbs",
  category: "مفردات",
  descriptionAr: "تعلم الأفعال الأكثر استخداما في الحياة اليومية",
  icon: "Zap",
  color: "warning",
  level: 2,
  items: [
    { english: "Go", arabic: "يذهب", transliteration: "goh", exampleSentence: { en: "I go to school every day", ar: "أذهب إلى المدرسة كل يوم" } },
    { english: "Come", arabic: "يأتي", transliteration: "kum", exampleSentence: { en: "Please come here", ar: "من فضلك تعال هنا" } },
    { english: "Eat", arabic: "يأكل", transliteration: "eet", exampleSentence: { en: "We eat breakfast at 8 AM", ar: "نتناول الإفطار في الساعة الثامنة صباحا" } },
    { english: "Drink", arabic: "يشرب", transliteration: "drink", exampleSentence: { en: "I drink water", ar: "أشرب الماء" } },
    { english: "Sleep", arabic: "ينام", transliteration: "sleep" },
    { english: "Wake up", arabic: "يستيقظ", transliteration: "wayk up" },
    { english: "Work", arabic: "يعمل", transliteration: "werk" },
    { english: "Study", arabic: "يدرس", transliteration: "stud-ee" },
    { english: "Read", arabic: "يقرأ", transliteration: "reed" },
    { english: "Write", arabic: "يكتب", transliteration: "ryt" },
    { english: "Speak", arabic: "يتكلم", transliteration: "speek" },
    { english: "Listen", arabic: "يستمع", transliteration: "lis-en" },
    { english: "Watch", arabic: "يشاهد", transliteration: "wotch" },
    { english: "Buy", arabic: "يشتري", transliteration: "by" },
    { english: "Sell", arabic: "يبيع", transliteration: "sel" },
  ],
  quizzes: [
    { id: "q1", questionAr: "ما معنى 'I go to school'؟", options: ["أذهب إلى المدرسة", "آكل في المدرسة", "أنام في المدرسة", "أعمل في المدرسة"], correctAnswer: "أذهب إلى المدرسة" },
    { id: "q2", questionAr: "كيف تقول 'يأكل' بالإنجليزية؟", options: ["Eat", "Drink", "Sleep", "Read"], correctAnswer: "Eat" },
  ],
};
