import ja from "./ja.json" with { type: "json" };
import zh from "./zh.json" with { type: "json" };
import en from "./en.json" with { type: "json" };
export const locales = { ja, zh, en };
export const languages = [
  { id: "ja", label: "日本語" },
  { id: "zh", label: "简体中文" },
  { id: "en", label: "English" },
];
