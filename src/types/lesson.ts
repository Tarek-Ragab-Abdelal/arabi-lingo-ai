export interface LessonItem {
  english: string;
  arabic: string;
  transliteration?: string;
  audioUrlMale?: string;
  audioUrlFemale?: string;
  exampleSentence?: {
    en: string;
    ar: string;
  };
}

export interface Quiz {
  id: string;
  questionAr: string;
  questionEn?: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface Lesson {
  id: string;
  titleAr: string;
  titleEn: string;
  category: string;
  descriptionAr: string;
  icon: string;
  color: string;
  level: number; // 1-5 (beginner to advanced)
  items: LessonItem[];
  quizzes?: Quiz[];
}

export interface UserProgress {
  lessonId: string;
  completed: boolean;
  quizScore?: number;
  lastAccessed: string;
}

// Training Section Types
export interface TrainingParagraph {
  id: string;
  titleAr: string;
  titleEn: string;
  level: number; // 1-5 (beginner to advanced)
  englishText: string;
  arabicTranslation: string;
  transliteration?: string;
  audioUrlMale?: string;
  audioUrlFemale?: string;
  category: 'daily' | 'descriptive' | 'dialogue' | 'workplace' | 'travel';
  quizzes: TrainingQuiz[];
}

export interface TrainingQuiz {
  id: string;
  questionAr: string;
  questionEn: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface TrainingProgress {
  paragraphId: string;
  completed: boolean;
  quizScore?: number;
  lastAccessed: string;
  timeSpent?: number; // in seconds
}
