<template>
  <div id="app">
    <div>
      <button
        v-for="item in languages"
        :key="item.title"
        @click="changeLocale(item.language)"
      >
        <flag
          :iso="item.flag"
          v-bind:squared=false
        /> {{item.title}}
      </button>
    </div>

    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import i18n from "@/plugins/i18n";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "ru", language: "ru", title: "Russia" }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  padding: 15px;
  border: 1px solid green;
  font-size: 18px;
  margin: 15px;
}
</style>
