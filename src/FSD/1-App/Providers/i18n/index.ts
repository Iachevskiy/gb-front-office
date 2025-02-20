import { createI18n } from "vue-i18n";

import en from "FSD/Shared/Constants/Translations/en";
import ru from "FSD/Shared/Constants/Translations/ru";

import { ELocale } from "FSD/Shared/TypeScript/common.ts";

export default createI18n({
  locale        : localStorage.getItem("locale") || import.meta.env.VUE_APP_I18N_LOCALE || "ru",
  fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || "ru",
  legacy        : false,
  messages      : {
    [ELocale.en]: en,
    [ELocale.ru]: ru
  }
});
