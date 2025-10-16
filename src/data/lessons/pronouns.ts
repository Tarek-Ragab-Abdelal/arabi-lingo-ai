import { Lesson } from "@/types/lesson";

export const pronounsLesson: Lesson = {
  id: "pronouns",
  titleAr: "الضمائر",
  titleEn: "Pronouns",
  category: "قواعد",
  descriptionAr: "تعلم الضمائر الشخصية في اللغة الإنجليزية واستخداماتها",
  icon: "Users",
  color: "secondary",
  level: 1,
  items: [
    {
      english: "I",
      arabic: "أنا",
      transliteration: "ay",
      exampleSentence: {
        en: "I am a student",
        ar: "أنا طالب",
      },
    },
    {
      english: "You",
      arabic: "أنت / أنتِ / أنتم",
      transliteration: "yoo",
      exampleSentence: {
        en: "You are my friend",
        ar: "أنت صديقي",
      },
    },
    {
      english: "He",
      arabic: "هو",
      transliteration: "hee",
      exampleSentence: {
        en: "He is a teacher",
        ar: "هو معلم",
      },
    },
    {
      english: "She",
      arabic: "هي",
      transliteration: "shee",
      exampleSentence: {
        en: "She is a doctor",
        ar: "هي طبيبة",
      },
    },
    {
      english: "It",
      arabic: "هو / هي (لغير العاقل)",
      transliteration: "it",
      exampleSentence: {
        en: "It is a book",
        ar: "إنه كتاب",
      },
    },
    {
      english: "We",
      arabic: "نحن",
      transliteration: "wee",
      exampleSentence: {
        en: "We are students",
        ar: "نحن طلاب",
      },
    },
    {
      english: "They",
      arabic: "هم / هن",
      transliteration: "thay",
      exampleSentence: {
        en: "They are friends",
        ar: "هم أصدقاء",
      },
    },
  ],
  quizzes: [
    {
      id: "q1",
      questionAr: "ما هو الضمير المناسب لكلمة 'طالب' في الجملة: '__ am a student'؟",
      options: ["I", "You", "He", "We"],
      correctAnswer: "I",
    },
    {
      id: "q2",
      questionAr: "ما هو الضمير المناسب للإشارة إلى مجموعة من الأشخاص؟",
      options: ["They", "He", "She", "It"],
      correctAnswer: "They",
    },
    {
      id: "q3",
      questionAr: "ما هو الضمير المستخدم لغير العاقل في الإنجليزية؟",
      options: ["It", "He", "She", "They"],
      correctAnswer: "It",
    },
    {
      id: "q4",
      questionAr: "ما هو الضمير 'نحن' بالإنجليزية؟",
      options: ["We", "They", "You", "I"],
      correctAnswer: "We",
    },
  ],
};
