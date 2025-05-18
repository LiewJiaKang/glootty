import "server-only"
import { supportedLocales, defaultLocale } from "@/middleware"
import type { Dictionary } from './dictionaries/dictionary';

const dictionaries = {
  en: () => import("@/lib/dictionaries/en.json").then((module) => module.default),
  es: () => import("@/lib/dictionaries/es.json").then((module) => module.default),
  fr: () => import("@/lib/dictionaries/fr.json").then((module) => module.default),
  de: () => import("@/lib/dictionaries/de.json").then((module) => module.default),
  zh: () => import("@/lib/dictionaries/zh.json").then((module) => module.default),
  ms: () => import("@/lib/dictionaries/ms.json").then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // Validate that the locale is supported
  if (!supportedLocales.includes(locale)) {
    locale = defaultLocale
  }

  return dictionaries[locale as keyof typeof dictionaries]?.() ?? dictionaries.en();
} 