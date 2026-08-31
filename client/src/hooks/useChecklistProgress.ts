import { useState } from "react";

// Persists which checklist items a student has checked off, per journey
// stage, in localStorage. There's no backend yet, so this is the simplest
// way to make "progress saved" actually true today - if/when a real
// account system exists later, this hook is the one place to swap
// localStorage for an API call.
const STORAGE_KEY = "campus-bridge-checklist-progress";

type ProgressMap = Record<string, string[]>; // journeyId -> array of checked item titles

function loadProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function useChecklistProgress(journeyId: string) {
  // Tracks which journeyId the current `checkedItems` state belongs to.
  // If the caller passes a different journeyId than last render (e.g. the
  // student switches from "Accepted" to "Preparing"), we detect that
  // *during render* and reset state immediately - this is React's
  // recommended pattern for "resetting state when a prop changes",
  // and avoids the extra render + lint warning that calling setState
  // inside a useEffect for the same purpose would cause.
  const [trackedJourneyId, setTrackedJourneyId] = useState(journeyId);
  const [checkedItems, setCheckedItems] = useState<string[]>(() => loadProgress()[journeyId] ?? []);

  if (journeyId !== trackedJourneyId) {
    setTrackedJourneyId(journeyId);
    setCheckedItems(loadProgress()[journeyId] ?? []);
  }

  function toggleItem(title: string) {
    setCheckedItems((prev) => {
      const isChecked = prev.includes(title);
      const updated = isChecked ? prev.filter((t) => t !== title) : [...prev, title];

      const allProgress = loadProgress();
      allProgress[journeyId] = updated;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));

      return updated;
    });
  }

  return { checkedItems, toggleItem };
}
