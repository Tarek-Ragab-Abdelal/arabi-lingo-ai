import { Lesson } from "@/types/lesson";

export const travelLesson: Lesson = {
  id: "travel",
  titleAr: "عبارات السفر",
  titleEn: "Travel Phrases",
  category: "محادثة",
  descriptionAr: "تعلم العبارات الأساسية للسفر والتنقل",
  icon: "Plane",
  color: "secondary",
  level: 3,
  items: [
    { english: "I need a ticket to Cairo", arabic: "أحتاج تذكرة إلى القاهرة", transliteration: "ay need a tik-et too ky-roh" },
    { english: "Where is the airport?", arabic: "أين المطار؟", transliteration: "wer iz thee er-port" },
    { english: "When does the flight depart?", arabic: "متى تغادر الطائرة؟", transliteration: "wen duz thee flyt dee-part" },
    { english: "I want to book a hotel room", arabic: "أريد حجز غرفة فندق", transliteration: "ay wont too book a hoh-tel room" },
    { english: "How much does it cost?", arabic: "كم يكلف هذا؟", transliteration: "how much duz it kost" },
    { english: "Can I see your passport?", arabic: "هل يمكنني رؤية جواز سفرك؟", transliteration: "kan ay see yor pas-port" },
    { english: "I have nothing to declare", arabic: "ليس لدي شيء للتصريح عنه", transliteration: "ay hav nuth-ing too dee-kler" },
    { english: "Where is the baggage claim?", arabic: "أين استلام الأمتعة؟", transliteration: "wer iz thee bag-ij klaym" },
    { english: "I lost my luggage", arabic: "لقد فقدت أمتعتي", transliteration: "ay lost my lug-ij" },
    { english: "Can you call a taxi for me?", arabic: "هل يمكنك الاتصال بسيارة أجرة لي؟", transliteration: "kan yoo kol a tak-see for mee" },
  ],
  quizzes: [
    { id: "q1", questionAr: "كيف تقول 'أحتاج تذكرة' بالإنجليزية؟", options: ["I need a ticket", "I want a ticket", "Give me ticket", "Where ticket"], correctAnswer: "I need a ticket" },
    { id: "q2", questionAr: "ما معنى 'baggage claim'؟", options: ["استلام الأمتعة", "المطار", "الطائرة", "الفندق"], correctAnswer: "استلام الأمتعة" },
  ],
};
