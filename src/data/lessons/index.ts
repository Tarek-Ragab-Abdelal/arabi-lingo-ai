import { Lesson } from "@/types/lesson";
import { alphabetLesson } from "./alphabet";
import { pronounsLesson } from "./pronouns";
import { possessiveAdjectivesLesson } from "./possessiveAdjectives";
import { verbToBeLesson } from "./verbToBe";
import { colorsLesson } from "./colors";
import { greetingsLesson } from "./greetings";
import { numbersLesson } from "./numbers";
import { daysOfWeekLesson } from "./daysOfWeek";
import { months } from "./months";
import { commonVerbsLesson } from "./commonVerbs";
import { questionWordsLesson } from "./questionWords";
import { travelLesson } from "./travel";
import { askingDirectionsLesson } from "./askingDirections";
import { givingDirectionsLesson } from "./givingDirections";
import { meetingsLesson } from "./meetings";
import { militaryRanksLesson } from "./militaryRanks";

// Lessons ordered by natural learning progression (Level 1-5)
export const allLessons: Lesson[] = [
  // Level 1 - Basics (Step 1: Foundation)
  alphabetLesson,           // الحروف
  numbersLesson,            // الأرقام
  greetingsLesson,          // التحيات
  colorsLesson,             // الألوان
  daysOfWeekLesson,         // أيام الأسبوع
  months,                   // الشهور
  
  // Level 2 - Grammar Basics (Step 2: Grammar Foundation)
  pronounsLesson,           // الضمائر
  possessiveAdjectivesLesson, // صفات الملكية
  verbToBeLesson,           // فعل "يكون"
  questionWordsLesson,      // أدوات الاستفهام
  
  // Level 3 - Vocabulary & Verbs (Step 3: Vocabulary Building)
  commonVerbsLesson,        // الأفعال الشائعة
  
  // Level 4 - Conversation (Step 4: Conversation Skills)
  askingDirectionsLesson,   // السؤال عن الاتجاهات
  givingDirectionsLesson,   // إعطاء الاتجاهات
  travelLesson,             // السفر
  
  // Level 5 - Real-life Interaction (Step 5: Advanced Interaction)
  meetingsLesson,           // الاجتماعات
  militaryRanksLesson,      // الرتب العسكرية
];

export { alphabetLesson } from "./alphabet";
export { pronounsLesson } from "./pronouns";
export { possessiveAdjectivesLesson } from "./possessiveAdjectives";
export { verbToBeLesson } from "./verbToBe";
export { colorsLesson } from "./colors";
export { greetingsLesson } from "./greetings";
export { numbersLesson } from "./numbers";
export { daysOfWeekLesson } from "./daysOfWeek";
export { commonVerbsLesson } from "./commonVerbs";
export { questionWordsLesson } from "./questionWords";
export { travelLesson } from "./travel";
export { askingDirectionsLesson } from "./askingDirections";
export { givingDirectionsLesson } from "./givingDirections";
export { meetingsLesson } from "./meetings";
export { militaryRanksLesson } from "./militaryRanks";
