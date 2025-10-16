import { Lesson } from "@/types/lesson";
import { alphabetLesson } from "./alphabet";
import { pronounsLesson } from "./pronouns";
import { verbToBeLesson } from "./verbToBe";
import { colorsLesson } from "./colors";
import { greetingsLesson } from "./greetings";
import { numbersLesson } from "./numbers";
import { daysOfWeekLesson } from "./daysOfWeek";
import { commonVerbsLesson } from "./commonVerbs";
import { questionWordsLesson } from "./questionWords";
import { travelLesson } from "./travel";
import { askingDirectionsLesson } from "./askingDirections";
import { givingDirectionsLesson } from "./givingDirections";
import { meetingsLesson } from "./meetings";
import { militaryRanksLesson } from "./militaryRanks";

// Lessons ordered by level (1-5)
export const allLessons: Lesson[] = [
  // Level 1 - Beginner
  alphabetLesson,
  greetingsLesson,
  pronounsLesson,
  colorsLesson,
  numbersLesson,
  daysOfWeekLesson,
  
  // Level 2 - Elementary
  verbToBeLesson,
  commonVerbsLesson,
  questionWordsLesson,
  
  // Level 3 - Intermediate
  travelLesson,
  askingDirectionsLesson,
  givingDirectionsLesson,
  
  // Level 4 - Advanced
  meetingsLesson,
  militaryRanksLesson,
];

export {
  alphabetLesson,
  pronounsLesson,
  verbToBeLesson,
  colorsLesson,
  greetingsLesson,
  numbersLesson,
  daysOfWeekLesson,
  commonVerbsLesson,
  questionWordsLesson,
  travelLesson,
  askingDirectionsLesson,
  givingDirectionsLesson,
  meetingsLesson,
  militaryRanksLesson,
};
