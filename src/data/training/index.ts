import { TrainingParagraph } from "@/types/lesson";
import { beginnerParagraphs } from "./beginner";
import { intermediateParagraphs } from "./intermediate";
import { advancedParagraphs } from "./advanced";

// All training paragraphs organized by level
export const allTrainingParagraphs: TrainingParagraph[] = [
  ...beginnerParagraphs,
  ...intermediateParagraphs,
  ...advancedParagraphs,
];

// Organize by level for easy access
export const trainingByLevel = {
  1: beginnerParagraphs.filter(p => p.level === 1),
  2: intermediateParagraphs.filter(p => p.level === 2),
  3: advancedParagraphs.filter(p => p.level === 3),
  4: advancedParagraphs.filter(p => p.level === 4),
  5: advancedParagraphs.filter(p => p.level === 5),
};

// Organize by category
export const trainingByCategory = {
  daily: allTrainingParagraphs.filter(p => p.category === 'daily'),
  descriptive: allTrainingParagraphs.filter(p => p.category === 'descriptive'),
  dialogue: allTrainingParagraphs.filter(p => p.category === 'dialogue'),
  workplace: allTrainingParagraphs.filter(p => p.category === 'workplace'),
  travel: allTrainingParagraphs.filter(p => p.category === 'travel'),
};

export { beginnerParagraphs } from "./beginner";
export { intermediateParagraphs } from "./intermediate";
export { advancedParagraphs } from "./advanced";