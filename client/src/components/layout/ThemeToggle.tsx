import { useTheme } from "../../hooks/useTheme";
import { SunIcon, MoonIcon } from "../ui/icons";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-sand-200 bg-white text-sand-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-sand-50 hover:shadow-md dark:border-sand-700 dark:bg-sand-800 dark:text-sand-200 dark:hover:bg-sand-700"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default ThemeToggle;
