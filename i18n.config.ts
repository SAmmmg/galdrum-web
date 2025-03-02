import en from "@/i18n/en";
import id from "@/i18n/id";
import de from "@/i18n/de";
import es from "@/i18n/es";
import fr from "@/i18n/fr";
import it from "@/i18n/it";
import ja from "@/i18n/ja";
import pt from "@/i18n/pt";
import ru from "@/i18n/ru";
import ar from "@/i18n/ar";
import hi from "@/i18n/hi";
import tr from "@/i18n/tr";
import vi from "@/i18n/vi";
import zh_HK from "@/i18n/zh_HK";
import zh_CN from "@/i18n/zh_CN";

export default defineI18nConfig(() => ({
  fallbackLocale: "en", //语言回调到英语
  legacy: false, //是否使用vue-i18n-legacy
  locale: "en", //默认语言
  messages: {
    zh_CN,
    en,
    id,
    de,
    es,
    fr,
    it,
    ja,
    pt,
    ru,
    ar,
    hi,
    tr,
    vi,
    zh_HK
  },
}));
