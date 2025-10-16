import { Lesson } from "@/types/lesson";

export const colorsLesson: Lesson = {
  id: "colors",
  titleAr: "الألوان",
  titleEn: "Colors",
  category: "مفردات",
  descriptionAr: "تعلم أسماء الألوان باللغة الإنجليزية",
  icon: "Palette",
  color: "warning",
  level: 1,
  items: [
    { english: "Red", arabic: "أحمر", transliteration: "red" },
    { english: "Blue", arabic: "أزرق", transliteration: "bloo" },
    { english: "Green", arabic: "أخضر", transliteration: "green" },
    { english: "Yellow", arabic: "أصفر", transliteration: "yel-oh" },
    { english: "Orange", arabic: "برتقالي", transliteration: "or-inj" },
    { english: "Purple", arabic: "بنفسجي", transliteration: "pur-pl" },
    { english: "Pink", arabic: "وردي", transliteration: "pink" },
    { english: "Brown", arabic: "بني", transliteration: "brown" },
    { english: "Black", arabic: "أسود", transliteration: "blak" },
    { english: "White", arabic: "أبيض", transliteration: "wyt" },
    { english: "Gray", arabic: "رمادي", transliteration: "gray" },
    { english: "Gold", arabic: "ذهبي", transliteration: "gold" },
    { english: "Silver", arabic: "فضي", transliteration: "sil-ver" },
    { english: "Light blue", arabic: "أزرق فاتح", transliteration: "layt bloo", exampleSentence: { en: "The sky is light blue", ar: "السماء زرقاء فاتحة" } },
    { english: "Dark green", arabic: "أخضر غامق", transliteration: "dark green", exampleSentence: { en: "The tree is dark green", ar: "الشجرة خضراء غامقة" } },
  ],
  quizzes: [
    {
      id: "q1",
      questionAr: "ما هو اللون 'أحمر' بالإنجليزية؟",
      options: ["Red", "Blue", "Green", "Yellow"],
      correctAnswer: "Red",
    },
    {
      id: "q2",
      questionAr: "ما هو اللون 'أخضر' بالإنجليزية؟",
      options: ["Green", "Blue", "Purple", "Brown"],
      correctAnswer: "Green",
    },
    {
      id: "q3",
      questionAr: "ما هو اللون 'أسود' بالإنجليزية؟",
      options: ["Black", "White", "Gray", "Brown"],
      correctAnswer: "Black",
    },
    {
      id: "q4",
      questionAr: "ما هو اللون 'بنفسجي' بالإنجليزية؟",
      options: ["Purple", "Pink", "Orange", "Yellow"],
      correctAnswer: "Purple",
    },
    {
      id: "q5",
      questionAr: "كيف تقول 'أزرق فاتح' بالإنجليزية؟",
      options: ["Light blue", "Dark blue", "Blue light", "Sky blue"],
      correctAnswer: "Light blue",
      explanation: "نستخدم 'Light' للألوان الفاتحة و 'Dark' للألوان الغامقة"
    },
  ],
};
