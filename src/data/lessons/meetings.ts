import { Lesson } from "@/types/lesson";

export const meetingsLesson: Lesson = {
  id: "meetings",
  titleAr: "الاجتماعات والعمل",
  titleEn: "Business Meetings",
  category: "محادثة مهنية",
  descriptionAr: "تعلم العبارات المستخدمة في الاجتماعات والبيئة المهنية",
  icon: "Briefcase",
  color: "primary",
  level: 4,
  items: [
    { english: "Good morning everyone, let's begin the meeting", arabic: "صباح الخير للجميع، لنبدأ الاجتماع", transliteration: "good mor-ning ev-ree-wun, lets bee-gin thee meet-ing" },
    { english: "I would like to introduce our new manager", arabic: "أود أن أقدم مديرنا الجديد", transliteration: "ay wood lyk too in-troh-doos our new man-a-jer" },
    { english: "Can you please share your screen?", arabic: "هل يمكنك مشاركة شاشتك من فضلك؟", transliteration: "kan yoo pleez sher yor skreen" },
    { english: "We need to discuss the quarterly results", arabic: "نحتاج لمناقشة النتائج الربع سنوية", transliteration: "wee need too dis-kus thee kwor-ter-lee ree-zults" },
    { english: "What is your opinion on this matter?", arabic: "ما رأيك في هذا الأمر؟", transliteration: "wut iz yor oh-pin-yun on this mat-er" },
    { english: "I agree with your proposal", arabic: "أوافق على اقتراحك", transliteration: "ay a-gree with yor proh-poh-zal" },
    { english: "Could you please send me the report?", arabic: "هل يمكنك إرسال التقرير لي من فضلك؟", transliteration: "kood yoo pleez send mee thee ree-port" },
    { english: "The deadline is next Friday", arabic: "الموعد النهائي هو الجمعة القادمة", transliteration: "thee ded-lyn iz nekst fry-day" },
    { english: "We need to schedule a follow-up meeting", arabic: "نحتاج لجدولة اجتماع متابعة", transliteration: "wee need too sked-yool a fol-oh-up meet-ing" },
    { english: "Thank you all for your time and participation", arabic: "شكرا لكم جميعا على وقتكم ومشاركتكم", transliteration: "thank yoo ol for yor tym and par-tis-ih-pay-shun" },
  ],
  quizzes: [
    { id: "q1", questionAr: "كيف تقول 'لنبدأ الاجتماع' بالإنجليزية؟", options: ["Let's begin the meeting", "End the meeting", "Cancel meeting", "No meeting"], correctAnswer: "Let's begin the meeting" },
    { id: "q2", questionAr: "ما معنى 'deadline'؟", options: ["الموعد النهائي", "الاجتماع", "التقرير", "المدير"], correctAnswer: "الموعد النهائي" },
  ],
};
