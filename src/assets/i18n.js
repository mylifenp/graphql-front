import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import Eng from "./locales/en/translation.json";
import Deu from "./locales/de/translation.json";

const resources = {
  en: {
    translations: Eng,
  },
  de: {
    translations: Deu,
  },
};

var options = {
  // order and from where user language should be detected
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain",
  ],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: `${process.env.MAIN_URL}`,

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true,

  // fallback to a similar whitelist language
  // Example 1: Browser language is 'es'
  // if 'es' is not found in whitelist, first fallback to any whitelist language that starts with 'es-', then fallback to fallbackLng ('es' -> 'es-*' -> fallbackLng)
  // Example 2: Browser language is 'es-MX'
  // if 'es-MX' is not found in whitelist, first fallback to 'es', then fallback to 'es-*', then fallback to fallbackLng ('es-MX' -> 'es' -> 'es-*' -> fallbackLng)
  checkForSimilarInWhitelist: false,

  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: "/" },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "de",
    fallbackLng: "de",
    debug: false,
    detection: options,

    saveMissing: true, // send not translated keys to endpoint

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      useSuspense: false,
    },
    addPath: "locales/add/{{lng}}/{{ns}}.json",
  });
