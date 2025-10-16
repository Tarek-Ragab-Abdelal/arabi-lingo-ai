import { Lesson } from "@/types/lesson";

export const numbersLesson: Lesson = {
  id: "numbers",
  titleAr: "الأرقام",
  titleEn: "Numbers",
  category: "مفردات",
  descriptionAr: "تعلم الأرقام من 1 إلى 100 والأعداد الكبيرة",
  icon: "Hash",
  color: "secondary",
  level: 1,
  items: [
    { english: "Zero", arabic: "صفر", transliteration: "zee-roh" },
    { english: "One", arabic: "واحد", transliteration: "wun" },
    { english: "Two", arabic: "اثنان", transliteration: "too" },
    { english: "Three", arabic: "ثلاثة", transliteration: "three" },
    { english: "Four", arabic: "أربعة", transliteration: "for" },
    { english: "Five", arabic: "خمسة", transliteration: "fyv" },
    { english: "Six", arabic: "ستة", transliteration: "siks" },
    { english: "Seven", arabic: "سبعة", transliteration: "sev-en" },
    { english: "Eight", arabic: "ثمانية", transliteration: "ayt" },
    { english: "Nine", arabic: "تسعة", transliteration: "nayn" },
    { english: "Ten", arabic: "عشرة", transliteration: "ten" },
    { english: "Twenty", arabic: "عشرون", transliteration: "twen-tee" },
    { english: "Fifty", arabic: "خمسون", transliteration: "fif-tee" },
    { english: "One hundred", arabic: "مائة", transliteration: "wun hun-dred" },
    { english: "One thousand", arabic: "ألف", transliteration: "wun thow-zand" },
  ],
  quizzes: [
    { id: "q1", questionAr: "كيف تقول 'خمسة' بالإنجليزية؟", options: ["Five", "Four", "Six", "Seven"], correctAnswer: "Five" },
    { id: "q2", questionAr: "ما معنى 'Ten'؟", options: ["عشرة", "عشرون", "مائة", "ألف"], correctAnswer: "عشرة" },
  ],
};
