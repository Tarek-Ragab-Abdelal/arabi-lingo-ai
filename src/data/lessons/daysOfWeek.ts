import { Lesson } from "@/types/lesson";

export const daysOfWeekLesson: Lesson = {
  id: "days-of-week",
  titleAr: "أيام الأسبوع",
  titleEn: "Days of the Week",
  category: "مفردات",
  descriptionAr: "تعلم أسماء أيام الأسبوع باللغة الإنجليزية",
  icon: "Calendar",
  color: "accent",
  level: 1,
  items: [
    { english: "Monday", arabic: "الاثنين", transliteration: "mun-day", exampleSentence: { en: "I work on Monday", ar: "أعمل يوم الاثنين" } },
    { english: "Tuesday", arabic: "الثلاثاء", transliteration: "tooz-day" },
    { english: "Wednesday", arabic: "الأربعاء", transliteration: "wenz-day" },
    { english: "Thursday", arabic: "الخميس", transliteration: "therz-day" },
    { english: "Friday", arabic: "الجمعة", transliteration: "fry-day" },
    { english: "Saturday", arabic: "السبت", transliteration: "sat-er-day" },
    { english: "Sunday", arabic: "الأحد", transliteration: "sun-day" },
    { english: "Today", arabic: "اليوم", transliteration: "too-day" },
    { english: "Tomorrow", arabic: "غدا", transliteration: "too-mor-oh" },
    { english: "Yesterday", arabic: "أمس", transliteration: "yes-ter-day" },
  ],
  quizzes: [
    { id: "q1", questionAr: "كيف تقول 'الجمعة' بالإنجليزية؟", options: ["Friday", "Sunday", "Saturday", "Thursday"], correctAnswer: "Friday" },
    { id: "q2", questionAr: "ما معنى 'Tomorrow'؟", options: ["غدا", "أمس", "اليوم", "الأسبوع"], correctAnswer: "غدا" },
  ],
};
