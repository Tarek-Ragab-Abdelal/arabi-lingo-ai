import { Lesson } from "@/types/lesson";

export const months: Lesson = {
  id: "months",
  titleAr: "أشهر السنة",
  titleEn: "Months of the Year",
  category: "مفردات",
  descriptionAr: "تعلم أسماء أشهر السنة باللغة الإنجليزية",
  icon: "Calendar",
  color: "accent",
  level: 1,
  items: [
    { english: "January", arabic: "يناير", transliteration: "jan-yoo-air", exampleSentence: { en: "The 25th of January is a public holiday in Egypt.", ar: "يوم 25 يناير هو عطلة رسمية في مصر." } },
    { english: "February", arabic: "فبراير", transliteration: "feb-roo-air", exampleSentence: { en: "Valentine's Day is celebrated on February 14th.", ar: "يتم الاحتفال بعيد الحب في 14 فبراير." } },
    { english: "March", arabic: "مارس", transliteration: "march", exampleSentence: { en: "Mother's Day in Egypt is on March 21st.", ar: "عيد الأم في مصر يكون في 21 مارس." } },
    { english: "April", arabic: "أبريل", transliteration: "ay-pril", exampleSentence: { en: "The 25th of April is Sinai Liberation Day.", ar: "يوم 25 أبريل هو عيد تحرير سيناء." } },
    { english: "May", arabic: "مايو", transliteration: "may", exampleSentence: { en: "Labor Day is celebrated on May 1st.", ar: "يتم الاحتفال بعيد العمال في 1 مايو." } },
    { english: "June", arabic: "يونيو", transliteration: "joon", exampleSentence: { en: "June 30th marks the June 30 Revolution in Egypt.", ar: "30 يونيو يوافق ثورة 30 يونيو في مصر." } },
    { english: "July", arabic: "يوليو", transliteration: "joo-ly", exampleSentence: { en: "The 23rd of July is Revolution Day in Egypt.", ar: "يوم 23 يوليو هو عيد الثورة في مصر." } },
    { english: "August", arabic: "أغسطس", transliteration: "aw-gus", exampleSentence: { en: "August is a hot month in Egypt.", ar: "أغسطس شهر حار في مصر." } },
    { english: "September", arabic: "سبتمبر", transliteration: "sep-tem-ber", exampleSentence: { en: "Schools usually start in September.", ar: "تبدأ المدارس عادة في سبتمبر." } },
    { english: "October", arabic: "أكتوبر", transliteration: "ok-toe-ber", exampleSentence: { en: "The 6th of October is Armed Forces Day in Egypt.", ar: "يوم 6 أكتوبر هو عيد القوات المسلحة في مصر." } },
    { english: "November", arabic: "نوفمبر", transliteration: "no-vem-ber", exampleSentence: { en: "November is known for its mild weather.", ar: "نوفمبر معروف بجوه المعتدل." } },
    { english: "December", arabic: "ديسمبر", transliteration: "dee-sem-ber", exampleSentence: { en: "Christmas is celebrated on December 25th.", ar: "يتم الاحتفال بعيد الميلاد في 25 ديسمبر." } },
  ],
  quizzes: [
    { id: "q1", questionAr: "كيف تقول 'مارس' بالإنجليزية؟", options: ["March", "May", "June", "April"], correctAnswer: "March" },
    { id: "q2", questionAr: "ما معنى 'December'؟", options: ["ديسمبر", "نوفمبر", "أكتوبر", "سبتمبر"], correctAnswer: "ديسمبر" },
  ],
};
