import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { LANG_TRANSLATION } from '../../lang';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: LANG_TRANSLATION,
    fallbackLng: 'EN',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      lookupCookie: 'COOKIE_LANG',
      order: ['cookie'],
      caches: ['cookie'],
    },
  });

export { i18n };
