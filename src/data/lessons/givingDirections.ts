import { Lesson } from "@/types/lesson";

export const givingDirectionsLesson: Lesson = {
  id: "giving-directions",
  titleAr: "إعطاء الاتجاهات",
  titleEn: "Giving Directions",
  category: "محادثة",
  descriptionAr: "تعلم كيفية إعطاء التوجيهات والإرشادات",
  icon: "Navigation",
  color: "warning",
  level: 3,
  items: [
    { english: "Go straight ahead", arabic: "اذهب مباشرة للأمام", transliteration: "goh strayt a-hed" },
    { english: "Turn right at the traffic light", arabic: "انعطف يمينا عند إشارة المرور", transliteration: "tern ryt at thee traf-ik lyt" },
    { english: "Turn left after the mosque", arabic: "انعطف يسارا بعد المسجد", transliteration: "tern left af-ter thee mosk" },
    { english: "It's on your right side", arabic: "إنه على يمينك", transliteration: "its on yor ryt syd" },
    { english: "It's next to the bank", arabic: "إنه بجوار البنك", transliteration: "its nekst too thee bank" },
    { english: "It's across from the hospital", arabic: "إنه مقابل المستشفى", transliteration: "its a-kros from thee hos-pi-tal" },
    { english: "Walk for about five minutes", arabic: "امش لحوالي خمس دقائق", transliteration: "wok for a-bowt fyv min-its" },
    { english: "You will see it on your left", arabic: "سوف تراه على يسارك", transliteration: "yoo wil see it on yor left" },
    { english: "Take the second street on the right", arabic: "خذ الشارع الثاني على اليمين", transliteration: "tayk thee sek-und street on thee ryt" },
    { english: "Cross the bridge and keep walking", arabic: "اعبر الجسر واستمر في المشي", transliteration: "kros thee brij and keep wok-ing" },
  ],
  quizzes: [
    { id: "q1", questionAr: "كيف تقول 'اذهب مباشرة للأمام' بالإنجليزية؟", options: ["Go straight ahead", "Turn right", "Turn left", "Stop here"], correctAnswer: "Go straight ahead" },
    { id: "q2", questionAr: "ما معنى 'Turn left'؟", options: ["انعطف يسارا", "انعطف يمينا", "اذهب للأمام", "توقف"], correctAnswer: "انعطف يسارا" },
  ],
};
