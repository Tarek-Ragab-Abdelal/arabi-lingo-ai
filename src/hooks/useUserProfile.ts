import { useState, useEffect } from "react";

export interface UserProfile {
  name: string;
  age: number;
}

const STORAGE_KEY = "user-profile";

// Simple event bus for cross-component profile updates
const profileListeners: Array<(p: UserProfile | null) => void> = [];

function notifyListeners(profile: UserProfile | null) {
  profileListeners.forEach((l) => l(profile));
}

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProfile(JSON.parse(stored));
      } catch {
        setProfile(null);
      }
    }
    setIsLoaded(true);

    // Subscribe to updates from other hook instances
    const listener = (p: UserProfile | null) => setProfile(p);
    profileListeners.push(listener);
    return () => {
      const idx = profileListeners.indexOf(listener);
      if (idx !== -1) profileListeners.splice(idx, 1);
    };
  }, []);

  const saveProfile = (data: UserProfile) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setProfile(data);
    notifyListeners(data);
  };

  return { profile, isLoaded, saveProfile };
}
