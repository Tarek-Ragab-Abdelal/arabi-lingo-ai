import { TrainingParagraph } from "@/types/lesson";

export const beginnerParagraphs: TrainingParagraph[] = [
  {
    id: "friend-intro",
    titleAr: "تعريف بصديق",
    titleEn: "Introducing a Friend",
    level: 1,
    englishText: "This is my friend. His name is Ahmed. He is from Egypt. He likes football. He is a good student. Ahmed speaks Arabic and English.",
    arabicTranslation: "هذا صديقي. اسمه أحمد. هو من مصر. يحب كرة القدم. هو طالب جيد. أحمد يتحدث العربية والإنجليزية.",
    transliteration: "This iz may frend. Hiz naym iz Ahmed. Hee iz from Egypt. Hee layks football. Hee iz a good student. Ahmed speaks Arabic and English.",
    category: 'daily',
    quizzes: [
      {
        id: "q1",
        questionAr: "ما اسم الصديق المذكور في النص؟",
        questionEn: "What is the friend's name mentioned in the text?",
        options: ["Mohammed", "Ahmed", "Ali", "Omar"],
        correctAnswer: "Ahmed",
        explanation: "النص يذكر بوضوح أن اسم الصديق هو أحمد"
      },
      {
        id: "q2",
        questionAr: "من أين أحمد؟",
        questionEn: "Where is Ahmed from?",
        options: ["Saudi Arabia", "Jordan", "Egypt", "Lebanon"],
        correctAnswer: "Egypt",
        explanation: "النص يقول 'He is from Egypt' أي أنه من مصر"
      },
      {
        id: "q3",
        questionAr: "ماذا يحب أحمد؟",
        questionEn: "What does Ahmed like?",
        options: ["Basketball", "Football", "Tennis", "Swimming"],
        correctAnswer: "Football",
        explanation: "النص يذكر 'He likes football' أي أنه يحب كرة القدم"
      },
      {
        id: "q4",
        questionAr: "كم لغة يتحدث أحمد؟",
        questionEn: "How many languages does Ahmed speak?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: "Two",
        explanation: "أحمد يتحدث العربية والإنجليزية، أي لغتين"
      }
    ]
  },
  {
    id: "my-family",
    titleAr: "عائلتي",
    titleEn: "My Family",
    level: 1,
    englishText: "I have a small family. My father is a doctor. My mother is a teacher. I have one sister. Her name is Fatima. She is very kind. We live in a big house.",
    arabicTranslation: "لدي عائلة صغيرة. والدي طبيب. والدتي معلمة. لدي أخت واحدة. اسمها فاطمة. هي لطيفة جداً. نحن نعيش في بيت كبير.",
    transliteration: "Ay hayv a smal family. May father iz a doctor. May mother iz a teacher. Ay hayv wan sister. Her naym iz Fatima. Shee iz very kaynd. Wee liv in a big hows.",
    category: 'daily',
    quizzes: [
      {
        id: "q1",
        questionAr: "ما هي مهنة الوالد؟",
        questionEn: "What is the father's profession?",
        options: ["Teacher", "Doctor", "Engineer", "Lawyer"],
        correctAnswer: "Doctor",
        explanation: "النص يذكر 'My father is a doctor' أي أن والده طبيب"
      },
      {
        id: "q2",
        questionAr: "ما اسم الأخت؟",
        questionEn: "What is the sister's name?",
        options: ["Aisha", "Fatima", "Maryam", "Zeinab"],
        correctAnswer: "Fatima",
        explanation: "النص يذكر 'Her name is Fatima' أي أن اسم الأخت فاطمة"
      },
      {
        id: "q3",
        questionAr: "كيف وُصفت الأخت؟",
        questionEn: "How is the sister described?",
        options: ["Smart", "Tall", "Kind", "Funny"],
        correctAnswer: "Kind",
        explanation: "النص يقول 'She is very kind' أي أنها لطيفة جداً"
      }
    ]
  },
  {
    id: "daily-routine",
    titleAr: "روتيني اليومي",
    titleEn: "My Daily Routine",
    level: 1,
    englishText: "I wake up at seven o'clock. I brush my teeth and wash my face. I eat breakfast with my family. Then I go to school. After school, I do my homework. In the evening, I watch TV.",
    arabicTranslation: "أستيقظ في السابعة صباحاً. أنظف أسناني وأغسل وجهي. آكل الإفطار مع عائلتي. ثم أذهب إلى المدرسة. بعد المدرسة، أقوم بواجبي المنزلي. في المساء، أشاهد التلفزيون.",
    transliteration: "Ay wayk ap at seven o'klok. Ay brush may teeth and wash may fays. Ay eet breakfast with may family. Then ay go to skool. After skool, ay do may homework. In thee evening, ay watch TV.",
    category: 'daily',
    quizzes: [
      {
        id: "q1",
        questionAr: "في أي وقت يستيقظ الشخص؟",
        questionEn: "What time does the person wake up?",
        options: ["Six o'clock", "Seven o'clock", "Eight o'clock", "Nine o'clock"],
        correctAnswer: "Seven o'clock",
        explanation: "النص يذكر 'I wake up at seven o'clock'"
      },
      {
        id: "q2",
        questionAr: "ماذا يفعل بعد المدرسة؟",
        questionEn: "What does he do after school?",
        options: ["Play games", "Watch TV", "Do homework", "Sleep"],
        correctAnswer: "Do homework",
        explanation: "النص يقول 'After school, I do my homework'"
      },
      {
        id: "q3",
        questionAr: "مع من يتناول الإفطار؟",
        questionEn: "Who does he eat breakfast with?",
        options: ["Friends", "Family", "Alone", "Teachers"],
        correctAnswer: "Family",
        explanation: "النص يذكر 'I eat breakfast with my family'"
      }
    ]
  }
];