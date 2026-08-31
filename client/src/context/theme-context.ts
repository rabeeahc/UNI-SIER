import { createContext } from "react";

export type Theme = "light" | "dark";

export type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

// The context object lives in its own plain (non-component) file so that
// ThemeContext.tsx can export only the ThemeProvider component, and
// hooks/useTheme.ts can export only the useTheme hook - each file exporting
// exactly one kind of thing is what keeps React Fast Refresh working.
export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
