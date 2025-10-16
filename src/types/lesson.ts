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
  items: LessonItem[];
  quizzes?: Quiz[];
}

export interface UserProgress {
  lessonId: string;
  completed: boolean;
  quizScore?: number;
  lastAccessed: string;
}
