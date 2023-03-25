import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import XHR from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'
import translationEn from './locales/en/translation.json'
import translationJa from './locales/ja/translation.json'
i18n
	.use(XHR)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		react: {
			useSuspense:false
		},
		debug: true,
		// lng: 'en',
		fallbackLng: 'en',
		keySeparator: '.',
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: [ 'cookie', 'path', 'querystring'],
			caches: ['cookie']
		},
		ns: ['translations'],
		defaultNS: 'translations',
		resources: {
			en: { translations: translationEn },
			ja: { translations: translationJa },
		},
	})
	
export default i18n