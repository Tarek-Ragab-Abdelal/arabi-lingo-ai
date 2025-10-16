import { Lesson } from "@/types/lesson";
import { alphabetLesson } from "./alphabet";
import { pronounsLesson } from "./pronouns";
import { verbToBeLesson } from "./verbToBe";
import { colorsLesson } from "./colors";

export const allLessons: Lesson[] = [
  alphabetLesson,
  pronounsLesson,
  verbToBeLesson,
  colorsLesson,
];

export { alphabetLesson, pronounsLesson, verbToBeLesson, colorsLesson };
