import { useEffect, useState, type ReactNode } from "react";
import { LanguageContext } from "./language-context";
import { translations, languages, type LanguageCode } from "../i18n/translations";

const STORAGE_KEY = "campus-bridge-language";

function getInitialLanguage(): LanguageCode {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "tr" || saved === "ar" || saved === "ru") {
    return saved;
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(getInitialLanguage);

  // Arabic needs right-to-left layout. Setting dir on <html> flips text
  // direction and layout mirroring (via CSS logical properties/browser
  // defaults) for the whole app, not just the text content itself.
  useEffect(() => {
    const config = languages.find((l) => l.code === language);
    document.documentElement.dir = config?.dir ?? "ltr";
    document.documentElement.lang = language;
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  function setLanguage(next: LanguageCode) {
    setLanguageState(next);
  }

  function t(key: Parameters<typeof translate>[1]) {
    return translate(language, key);
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

function translate(language: LanguageCode, key: keyof (typeof translations)["en"]) {
  return translations[language][key] ?? translations.en[key];
}
