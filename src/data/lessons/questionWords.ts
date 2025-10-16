import { Lesson } from "@/types/lesson";

export const questionWordsLesson: Lesson = {
  id: "question-words",
  titleAr: "أدوات الاستفهام",
  titleEn: "Question Words",
  category: "قواعد",
  descriptionAr: "تعلم أدوات الاستفهام وكيفية طرح الأسئلة",
  icon: "HelpCircle",
  color: "primary",
  level: 2,
  items: [
    { english: "What", arabic: "ماذا / ما", transliteration: "wut", exampleSentence: { en: "What is your name?", ar: "ما اسمك؟" } },
    { english: "When", arabic: "متى", transliteration: "wen", exampleSentence: { en: "When do you wake up?", ar: "متى تستيقظ؟" } },
    { english: "Where", arabic: "أين", transliteration: "wer", exampleSentence: { en: "Where is the hospital?", ar: "أين المستشفى؟" } },
    { english: "Who", arabic: "من", transliteration: "hoo", exampleSentence: { en: "Who are you?", ar: "من أنت؟" } },
    { english: "Why", arabic: "لماذا", transliteration: "wy", exampleSentence: { en: "Why are you late?", ar: "لماذا أنت متأخر؟" } },
    { english: "How", arabic: "كيف", transliteration: "how", exampleSentence: { en: "How are you?", ar: "كيف حالك؟" } },
    { english: "Which", arabic: "أي", transliteration: "wich", exampleSentence: { en: "Which book do you want?", ar: "أي كتاب تريد؟" } },
    { english: "Whose", arabic: "لمن", transliteration: "hooz", exampleSentence: { en: "Whose car is this?", ar: "لمن هذه السيارة؟" } },
  ],
  quizzes: [
    { id: "q1", questionAr: "كيف تسأل عن المكان بالإنجليزية؟", options: ["Where", "When", "What", "Who"], correctAnswer: "Where" },
    { id: "q2", questionAr: "ما معنى 'Why are you late?'؟", options: ["لماذا أنت متأخر؟", "أين أنت؟", "من أنت؟", "متى تأتي؟"], correctAnswer: "لماذا أنت متأخر؟" },
  ],
};
