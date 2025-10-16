import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Index from "./pages/Index";
import LessonsPage from "./pages/LessonsPage";
import TrainingPage from "./pages/TrainingPage";
import TrainingExercisePage from "./pages/TrainingExercisePage";
import LessonPage from "./pages/LessonPage";
import QuizPage from "./pages/QuizPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<Index />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/training/:paragraphId" element={<TrainingExercisePage />} />
          <Route path="/lesson/:lessonId" element={<LessonPage />} />
          <Route path="/quiz/:lessonId" element={<QuizPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
