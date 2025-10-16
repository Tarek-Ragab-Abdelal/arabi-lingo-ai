import { Lesson } from "@/types/lesson";

export const askingDirectionsLesson: Lesson = {
  id: "asking-directions",
  titleAr: "السؤال عن الاتجاهات",
  titleEn: "Asking for Directions",
  category: "محادثة",
  descriptionAr: "تعلم كيفية السؤال عن الطريق والاتجاهات",
  icon: "MapPin",
  color: "accent",
  level: 3,
  items: [
    { english: "Excuse me, where is the nearest hospital?", arabic: "عفوا، أين أقرب مستشفى؟", transliteration: "eks-kyooz mee, wer iz thee neer-est hos-pi-tal" },
    { english: "How can I get to the city center?", arabic: "كيف يمكنني الوصول إلى وسط المدينة؟", transliteration: "how kan ay get too thee sit-ee sen-ter" },
    { english: "Is it far from here?", arabic: "هل هو بعيد من هنا؟", transliteration: "iz it far from heer" },
    { english: "Can you show me on the map?", arabic: "هل يمكنك أن تريني على الخريطة؟", transliteration: "kan yoo shoh mee on thee map" },
    { english: "How long does it take to walk there?", arabic: "كم من الوقت يستغرق المشي إلى هناك؟", transliteration: "how long duz it tayk too wok ther" },
    { english: "Should I take the bus or the metro?", arabic: "هل يجب أن آخذ الحافلة أم المترو؟", transliteration: "shood ay tayk thee bus or thee met-roh" },
    { english: "Where is the nearest bus stop?", arabic: "أين أقرب موقف للحافلات؟", transliteration: "wer iz thee neer-est bus stop" },
    { english: "I'm looking for the Egyptian Museum", arabic: "أبحث عن المتحف المصري", transliteration: "aym look-ing for thee ee-jip-shun myoo-zee-um" },
  ],
  quizzes: [
    { id: "q1", questionAr: "كيف تسأل 'أين أقرب مستشفى؟' بالإنجليزية؟", options: ["Where is the nearest hospital?", "What is hospital?", "How is hospital?", "Who is hospital?"], correctAnswer: "Where is the nearest hospital?" },
    { id: "q2", questionAr: "ما معنى 'Is it far from here?'؟", options: ["هل هو بعيد من هنا؟", "كم يكلف؟", "أين هو؟", "متى نصل؟"], correctAnswer: "هل هو بعيد من هنا؟" },
  ],
};
