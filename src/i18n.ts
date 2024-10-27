// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import sv from "../src/locales/sv.json";

i18n.use(initReactI18next).init({
  resources: {
    sv: { translation: sv },
  },
  lng: "sv", // default language set to Swedish
  fallbackLng: "sv", // fallback language set to Swedish as well
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
