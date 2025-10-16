import { Lesson } from "@/types/lesson";

export const militaryRanksLesson: Lesson = {
  id: "military-ranks",
  titleAr: "الرتب العسكرية المصرية",
  titleEn: "Egyptian Military Ranks",
  category: "مفردات متخصصة",
  descriptionAr: "تعلم الرتب العسكرية المصرية باللغة الإنجليزية",
  icon: "Shield",
  color: "secondary",
  level: 4,
  items: [
    { english: "Field Marshal", arabic: "مشير", transliteration: "feeld mar-shal" },
    { english: "Lieutenant General", arabic: "فريق", transliteration: "loo-ten-ant jen-er-al" },
    { english: "Major General", arabic: "لواء", transliteration: "may-jer jen-er-al" },
    { english: "Brigadier General", arabic: "عميد", transliteration: "brig-a-deer jen-er-al" },
    { english: "Colonel", arabic: "عقيد", transliteration: "ker-nel" },
    { english: "Lieutenant Colonel", arabic: "مقدم", transliteration: "loo-ten-ant ker-nel" },
    { english: "Major", arabic: "رائد", transliteration: "may-jer" },
    { english: "Captain", arabic: "نقيب", transliteration: "kap-tin" },
    { english: "First Lieutenant", arabic: "ملازم أول", transliteration: "ferst loo-ten-ant" },
    { english: "Second Lieutenant", arabic: "ملازم ثاني", transliteration: "sek-und loo-ten-ant" },
    { english: "Warrant Officer", arabic: "ضابط صف", transliteration: "wor-ant of-ih-ser" },
    { english: "Sergeant Major", arabic: "رقيب أول", transliteration: "sar-jent may-jer" },
    { english: "Sergeant", arabic: "رقيب", transliteration: "sar-jent" },
    { english: "Corporal", arabic: "عريف", transliteration: "kor-poh-ral" },
    { english: "Private", arabic: "جندي", transliteration: "pry-vit" },
  ],
  quizzes: [
    { id: "q1", questionAr: "ما هي رتبة 'عميد' بالإنجليزية؟", options: ["Brigadier General", "Major General", "Colonel", "Captain"], correctAnswer: "Brigadier General" },
    { id: "q2", questionAr: "ما معنى 'Lieutenant Colonel'؟", options: ["مقدم", "عقيد", "رائد", "نقيب"], correctAnswer: "مقدم" },
    { id: "q3", questionAr: "كيف تقول 'جندي' بالإنجليزية؟", options: ["Private", "Sergeant", "Corporal", "Officer"], correctAnswer: "Private" },
  ],
};
