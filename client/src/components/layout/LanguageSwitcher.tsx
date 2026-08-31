import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon, CheckIcon } from "../ui/icons";
import { useLanguage } from "../../hooks/useLanguage";
import { languages } from "../../i18n/translations";

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = languages.find((l) => l.code === language) ?? languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl border border-sand-200 bg-white px-3.5 py-2.5 text-sm font-medium text-sand-700 transition hover:bg-sand-50 dark:border-sand-700 dark:bg-sand-800 dark:text-sand-100 dark:hover:bg-sand-700"
        aria-label="Change language"
      >
        <span>{selected.flag}</span>
        <span className="hidden sm:inline">{selected.code.toUpperCase()}</span>
        <ChevronDownIcon className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-48 rounded-2xl border border-sand-200 bg-white p-2 shadow-xl dark:border-sand-700 dark:bg-sand-800">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                // This is the actual fix - previously this only updated
                // local component state (cosmetic). Now it updates the
                // shared LanguageContext, which every component reading
                // t() re-renders in response to.
                setLanguage(lang.code);
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition hover:bg-sand-100 dark:hover:bg-sand-700"
            >
              <span>{lang.flag}</span>
              <span className="flex-1 text-sand-700 dark:text-sand-100">{lang.name}</span>
              {language === lang.code && <CheckIcon className="h-4 w-4 text-coral-500" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
