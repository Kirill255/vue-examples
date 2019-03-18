import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    welcomeMsg: "Welcome to Your Vue.js App",
    guide: "For a guide and recipes on how to configure / customize this project,",
    checkout: "check out the",
    plugins: "Installed CLI Plugins",
    links: "Essential Links",
    ecosystem: "Ecosystem"
  },
  ru: {
    welcomeMsg: "Добро пожаловать в приложение Vue.js",
    guide: "Для руководства и рецептов о том, как настроить / настроить этот проект,",
    checkout: "проверить",
    plugins: "Установленные плагины CLI",
    links: "Основные ссылки",
    ecosystem: "Экосистема"
  }
};

const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "ru", // set fallback locale
  messages // set locale messages
});

export default i18n;
