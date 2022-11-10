import i18n, { Resource } from 'i18next';
import detector from 'i18next-browser-languagedetector';
import en from 'locales/lang/en.json';
import vi from 'locales/lang/vi.json';
import { initReactI18next } from 'react-i18next';

// the translations
const resources: Resource = {
  vi: {
    translation: vi,
  },
  en: {
    translation: en,
  },
};
export enum Language {
  VIE = 'vi-VN',
  ENG = 'en-US',
}
i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: Language.VIE,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export const t = (name: Array<keyof typeof vi>[0]): string => i18n.t(name);

export default i18n;
