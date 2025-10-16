import { Lesson } from "@/types/lesson";

export const possessiveAdjectivesLesson: Lesson = {
  id: "possessive-adjectives",
  titleAr: "صفات الملكية",
  titleEn: "Possessive Adjectives",
  category: "قواعد",
  descriptionAr: "تعلم صفات الملكية في اللغة الإنجليزية وكيفية استخدامها",
  icon: "Home",
  color: "accent",
  level: 2,
  items: [
    {
      english: "My",
      arabic: "لي / خاصتي",
      transliteration: "may",
      exampleSentence: {
        en: "My book is on the table",
        ar: "كتابي على الطاولة",
      },
    },
    {
      english: "Your",
      arabic: "لك / خاصتك",
      transliteration: "yor",
      exampleSentence: {
        en: "Your phone is ringing",
        ar: "هاتفك يرن",
      },
    },
    {
      english: "His",
      arabic: "له / خاصته",
      transliteration: "hiz",
      exampleSentence: {
        en: "His car is new",
        ar: "سيارته جديدة",
      },
    },
    {
      english: "Her",
      arabic: "لها / خاصتها",
      transliteration: "her",
      exampleSentence: {
        en: "Her book is on the table",
        ar: "كتابها على الطاولة",
      },
    },
    {
      english: "Its",
      arabic: "خاصته / خاصتها (لغير العاقل)",
      transliteration: "its",
      exampleSentence: {
        en: "The dog wagged its tail",
        ar: "هز الكلب ذيله",
      },
    },
    {
      english: "Our",
      arabic: "لنا / خاصتنا",
      transliteration: "owr",
      exampleSentence: {
        en: "Our teacher is kind",
        ar: "معلمنا لطيف",
      },
    },
    {
      english: "Their",
      arabic: "لهم / خاصتهم",
      transliteration: "thayr",
      exampleSentence: {
        en: "Their house is big",
        ar: "بيتهم كبير",
      },
    },
  ],
  quizzes: [
    {
      id: "q1",
      questionAr: "ما هي صفة الملكية المناسبة: '__ book is interesting'؟",
      options: ["My", "Me", "I", "Mine"],
      correctAnswer: "My",
      explanation: "'My' هي صفة الملكية المناسبة قبل الاسم"
    },
    {
      id: "q2",
      questionAr: "اختر الجملة الصحيحة:",
      options: ["Her book is on the table", "Hers book is on the table", "She book is on the table", "His book is on the table"],
      correctAnswer: "Her book is on the table",
      explanation: "'Her' هي صفة الملكية المناسبة للأنثى"
    },
    {
      id: "q3",
      questionAr: "ما معنى 'Our teacher is kind'؟",
      options: ["معلمنا لطيف", "معلمها لطيف", "معلمه لطيف", "معلمك لطيف"],
      correctAnswer: "معلمنا لطيف",
      explanation: "'Our' تعني 'لنا' أو 'خاصتنا'"
    },
    {
      id: "q4",
      questionAr: "لمن يعود الهاتف في 'Whose phone is this? It's __ phone'؟",
      options: ["his", "he", "him", "her's"],
      correctAnswer: "his",
      explanation: "نستخدم صفة الملكية 'his' للذكر"
    },
    {
      id: "q5",
      questionAr: "ما هي صفة الملكية للحيوانات؟",
      options: ["its", "his", "her", "their"],
      correctAnswer: "its",
      explanation: "'Its' تُستخدم للحيوانات والأشياء"
    },
  ],
};