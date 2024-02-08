import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import ua from './ua';

export const LANGUAGE_KEY = 'WeatherAppLanguage';

export const resources = { en, ua } as const;

export const defaultNS = 'common';
// noinspection TypeScriptValidateTypes
i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem(LANGUAGE_KEY) ?? 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    defaultNS,
});

export default i18n;