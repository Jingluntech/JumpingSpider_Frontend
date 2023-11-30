import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enUS from '@/public/locales/en-US';
import zhTW from '@/public/locales/zh-TW';
import zhCN from '@/public/locales/zh-CN';

i18n.use(initReactI18next).init({
  resources: {
    'en-US': {
      translation: enUS,
    },
    'zh-TW': {
      translation: zhTW,
    },
    'zh-CN': {
      translation: zhCN,
    },
  },
  fallbackLng: 'zh-TW',
  debug: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
