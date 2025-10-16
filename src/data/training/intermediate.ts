import { TrainingParagraph } from "@/types/lesson";

export const intermediateParagraphs: TrainingParagraph[] = [
  {
    id: "nurse-sara",
    titleAr: "سارة الممرضة",
    titleEn: "Sara the Nurse",
    level: 2,
    englishText: "Sara works in a hospital. She is a nurse. She helps many people every day. Sara starts work at eight in the morning. She takes care of patients and gives them medicine. Sara loves her job because she helps sick people get better.",
    arabicTranslation: "تعمل سارة في مستشفى. هي ممرضة. تساعد العديد من الناس كل يوم. تبدأ سارة العمل في الثامنة صباحاً. تعتني بالمرضى وتعطيهم الدواء. سارة تحب عملها لأنها تساعد المرضى على التحسن.",
    transliteration: "Sara works in a hospital. Shee iz a nors. Shee helps many peepl every day. Sara starts work at ayt in thee morning. Shee tayks kayr of payshents and givs them medisin. Sara lavs her job bekaws shee helps sik peepl get beter.",
    category: 'workplace',
    quizzes: [
      {
        id: "q1",
        questionAr: "أين تعمل سارة؟",
        questionEn: "Where does Sara work?",
        options: ["School", "Hospital", "Bank", "Restaurant"],
        correctAnswer: "Hospital",
        explanation: "النص يذكر بوضوح 'Sara works in a hospital'"
      },
      {
        id: "q2",
        questionAr: "ما هي مهنة سارة؟",
        questionEn: "What is Sara's profession?",
        options: ["Doctor", "Teacher", "Nurse", "Engineer"],
        correctAnswer: "Nurse",
        explanation: "النص يقول 'She is a nurse'"
      },
      {
        id: "q3",
        questionAr: "لماذا تحب سارة عملها؟",
        questionEn: "Why does Sara love her job?",
        options: ["Good salary", "Easy work", "Helps people", "Short hours"],
        correctAnswer: "Helps people",
        explanation: "النص يوضح أنها تحب عملها لأنها تساعد المرضى على التحسن"
      },
      {
        id: "q4",
        questionAr: "متى تبدأ سارة عملها؟",
        questionEn: "When does Sara start work?",
        options: ["Seven AM", "Eight AM", "Nine AM", "Ten AM"],
        correctAnswer: "Eight AM",
        explanation: "النص يذكر 'Sara starts work at eight in the morning'"
      }
    ]
  },
  {
    id: "restaurant-visit",
    titleAr: "زيارة مطعم",
    titleEn: "Restaurant Visit",
    level: 2,
    englishText: "Yesterday, I went to a new restaurant with my friends. The waiter was very friendly and helpful. We ordered different dishes. I had chicken with rice, and my friend ordered fish. The food was delicious and the service was excellent. We enjoyed our time together.",
    arabicTranslation: "أمس، ذهبت إلى مطعم جديد مع أصدقائي. كان النادل ودوداً ومفيداً جداً. طلبنا أطباق مختلفة. تناولت دجاج مع أرز، وصديقي طلب سمك. كان الطعام لذيذاً والخدمة ممتازة. استمتعنا بوقتنا معاً.",
    transliteration: "Yesterday, ay went to a nyoo restaurant with may frends. Thee waytr waz very frendly and helpfl. Wee ordrd diferent dishz. Ay had chikn with rays, and may frend ordrd fish. Thee food waz delishs and thee servis waz ekselnt. Wee enjoyd owr taym together.",
    category: 'daily',
    quizzes: [
      {
        id: "q1",
        questionAr: "متى ذهب إلى المطعم؟",
        questionEn: "When did he go to the restaurant?",
        options: ["Today", "Yesterday", "Tomorrow", "Last week"],
        correctAnswer: "Yesterday",
        explanation: "النص يبدأ بـ 'Yesterday, I went to a new restaurant'"
      },
      {
        id: "q2",
        questionAr: "مع من ذهب إلى المطعم؟",
        questionEn: "Who did he go to the restaurant with?",
        options: ["Family", "Friends", "Colleagues", "Alone"],
        correctAnswer: "Friends",
        explanation: "النص يذكر 'I went to a new restaurant with my friends'"
      },
      {
        id: "q3",
        questionAr: "ماذا تناول؟",
        questionEn: "What did he eat?",
        options: ["Fish with rice", "Chicken with rice", "Beef with rice", "Vegetables"],
        correctAnswer: "Chicken with rice",
        explanation: "النص يقول 'I had chicken with rice'"
      },
      {
        id: "q4",
        questionAr: "كيف كانت الخدمة؟",
        questionEn: "How was the service?",
        options: ["Poor", "Average", "Good", "Excellent"],
        correctAnswer: "Excellent",
        explanation: "النص يذكر 'the service was excellent'"
      }
    ]
  },
  {
    id: "shopping-mall",
    titleAr: "في المول التجاري",
    titleEn: "At the Shopping Mall",
    level: 2,
    englishText: "Last weekend, my family and I visited the shopping mall. It was very crowded because of the weekend. We bought clothes, shoes, and some gifts for my cousin's birthday. My mother found a beautiful dress, and my father bought a new watch. We also had lunch at the food court.",
    arabicTranslation: "في نهاية الأسبوع الماضي، زرت أنا وعائلتي المول التجاري. كان مزدحماً جداً بسبب نهاية الأسبوع. اشترينا ملابس وأحذية وبعض الهدايا لعيد ميلاد ابن عمي. وجدت والدتي فستاناً جميلاً، واشترى والدي ساعة جديدة. كما تناولنا الغداء في منطقة الطعام.",
    transliteration: "Last weeknd, may family and ay viztd thee shoping mal. It waz very krowdd bekaws of thee weeknd. Wee bot klothz, shooz, and sam gifts for may kozinz birthday. May mothr fownd a byootfl dres, and may fathr bot a nyoo wach. Wee also had lanch at thee food kort.",
    category: 'daily',
    quizzes: [
      {
        id: "q1",
        questionAr: "متى زاروا المول؟",
        questionEn: "When did they visit the mall?",
        options: ["Last weekend", "Yesterday", "This weekend", "Last month"],
        correctAnswer: "Last weekend",
        explanation: "النص يبدأ بـ 'Last weekend, my family and I visited the shopping mall'"
      },
      {
        id: "q2",
        questionAr: "لماذا كان المول مزدحماً؟",
        questionEn: "Why was the mall crowded?",
        options: ["Sale day", "Holiday", "Weekend", "New opening"],
        correctAnswer: "Weekend",
        explanation: "النص يذكر 'It was very crowded because of the weekend'"
      },
      {
        id: "q3",
        questionAr: "ماذا اشترت الأم؟",
        questionEn: "What did the mother buy?",
        options: ["Shoes", "Watch", "Dress", "Bag"],
        correctAnswer: "Dress",
        explanation: "النص يقول 'My mother found a beautiful dress'"
      }
    ]
  }
];