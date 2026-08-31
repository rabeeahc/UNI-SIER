import { createContext } from "react";
import type { LanguageCode, TranslationKey } from "../i18n/translations";

export type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  // Looks up a string in the current language's dictionary - components
  // call t("hero.title") instead of hardcoding English text, so switching
  // languages just means this function starts returning different strings.
  t: (key: TranslationKey) => string;
};

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
