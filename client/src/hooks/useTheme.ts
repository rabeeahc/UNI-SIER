import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

// Custom hook so components just call useTheme() instead of importing
// useContext + ThemeContext everywhere. Lives in its own file, separate
// from ThemeProvider, so that file only exports a component (see the
// comment in ThemeContext.tsx for why that matters).
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
