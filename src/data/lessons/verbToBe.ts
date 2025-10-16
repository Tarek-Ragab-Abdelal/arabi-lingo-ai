import { Lesson } from "@/types/lesson";

export const verbToBeLesson: Lesson = {
  id: "verb-to-be",
  titleAr: "فعل يكون",
  titleEn: "Verb To Be",
  category: "قواعد",
  descriptionAr: "تعلم تصريف فعل 'يكون' في الحاضر والماضي مع الأمثلة",
  icon: "Check",
  color: "accent",
  items: [
    {
      english: "I am",
      arabic: "أنا أكون",
      transliteration: "ay am",
      exampleSentence: {
        en: "I am happy",
        ar: "أنا سعيد",
      },
    },
    {
      english: "You are",
      arabic: "أنت تكون",
      transliteration: "yoo ar",
      exampleSentence: {
        en: "You are kind",
        ar: "أنت لطيف",
      },
    },
    {
      english: "He is",
      arabic: "هو يكون",
      transliteration: "hee iz",
      exampleSentence: {
        en: "He is tall",
        ar: "هو طويل",
      },
    },
    {
      english: "She is",
      arabic: "هي تكون",
      transliteration: "shee iz",
      exampleSentence: {
        en: "She is beautiful",
        ar: "هي جميلة",
      },
    },
    {
      english: "It is",
      arabic: "إنه/إنها",
      transliteration: "it iz",
      exampleSentence: {
        en: "It is sunny",
        ar: "الجو مشمس",
      },
    },
    {
      english: "We are",
      arabic: "نحن نكون",
      transliteration: "wee ar",
      exampleSentence: {
        en: "We are ready",
        ar: "نحن جاهزون",
      },
    },
    {
      english: "They are",
      arabic: "هم يكونون",
      transliteration: "thay ar",
      exampleSentence: {
        en: "They are friends",
        ar: "هم أصدقاء",
      },
    },
    {
      english: "I was",
      arabic: "أنا كنت",
      transliteration: "ay waz",
      exampleSentence: {
        en: "I was tired",
        ar: "كنت متعباً",
      },
    },
    {
      english: "You were",
      arabic: "أنت كنت",
      transliteration: "yoo wer",
      exampleSentence: {
        en: "You were right",
        ar: "كنت على حق",
      },
    },
    {
      english: "He was",
      arabic: "هو كان",
      transliteration: "hee waz",
      exampleSentence: {
        en: "He was here",
        ar: "كان هنا",
      },
    },
    {
      english: "She was",
      arabic: "هي كانت",
      transliteration: "shee waz",
      exampleSentence: {
        en: "She was happy",
        ar: "كانت سعيدة",
      },
    },
    {
      english: "We were",
      arabic: "نحن كنا",
      transliteration: "wee wer",
      exampleSentence: {
        en: "We were late",
        ar: "كنا متأخرين",
      },
    },
    {
      english: "They were",
      arabic: "هم كانوا",
      transliteration: "thay wer",
      exampleSentence: {
        en: "They were students",
        ar: "كانوا طلاباً",
      },
    },
  ],
  quizzes: [
    {
      id: "q1",
      questionAr: "ما هو الفعل الصحيح: 'I ___ happy'؟",
      options: ["am", "is", "are", "was"],
      correctAnswer: "am",
    },
    {
      id: "q2",
      questionAr: "ما هو الفعل الصحيح: 'She ___ a teacher'؟",
      options: ["is", "am", "are", "were"],
      correctAnswer: "is",
    },
    {
      id: "q3",
      questionAr: "ما هو الفعل الصحيح: 'They ___ students'؟",
      options: ["are", "is", "am", "was"],
      correctAnswer: "are",
    },
    {
      id: "q4",
      questionAr: "ما هو الفعل الصحيح بالماضي: 'I ___ tired yesterday'؟",
      options: ["was", "am", "is", "are"],
      correctAnswer: "was",
    },
  ],
};
