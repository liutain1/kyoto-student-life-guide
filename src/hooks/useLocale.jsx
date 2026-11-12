import { createContext, useContext, useEffect } from "react";
import { locales } from "../locales";
import { usePersistentState } from "./usePersistentState";
const LocaleContext = createContext(null);
export function LocaleProvider({ children }) {
  const [lang, setLang, storageError] = usePersistentState(
    "kyoto-guide-language",
    "ja",
    (value) => Object.hasOwn(locales, value),
  );
  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  }, [lang]);
  return (
    <LocaleContext.Provider
      value={{
        lang,
        setLang,
        content: locales[lang],
        t: locales[lang].ui,
        storageError,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}
export const useLocale = () => useContext(LocaleContext);
