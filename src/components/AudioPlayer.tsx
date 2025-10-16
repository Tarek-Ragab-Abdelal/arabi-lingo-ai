import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface AudioPlayerProps {
  text: string;
  lang?: string;
  gender?: "male" | "female";
}

export const AudioPlayer = ({ text, lang = "en-US", gender = "male" }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    if (!window.speechSynthesis) {
      toast.error("المتصفح لا يدعم النطق الصوتي");
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    
    // Try to get voices
    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = voices.find(voice => 
      voice.lang.startsWith(lang) && 
      (gender === "female" ? voice.name.toLowerCase().includes("female") : true)
    );

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.rate = 0.9; // Slightly slower for learning
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => {
      setIsPlaying(false);
      toast.error("حدث خطأ أثناء النطق");
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={playAudio}
      disabled={isPlaying}
      className="transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
    >
      {isPlaying ? (
        <VolumeX className="w-4 h-4 ml-2" />
      ) : (
        <Volume2 className="w-4 h-4 ml-2" />
      )}
      {isPlaying ? "يتم النطق..." : "استمع"}
    </Button>
  );
};
