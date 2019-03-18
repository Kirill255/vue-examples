<template>
  <div id="app">
    <header>
      <div class="logo">
        <img src="./assets/logo.png"
             alt="">
      </div>
      <search></search>
    </header>
    <main>
      <results></results>
    </main>
  </div>
</template>

<script>
// https://www.youtube.com/watch?v=uiavUaBXxXw&list=PL5r0NkdgM0UOxb4Hl81FV5UIgexwTf8h7&index=15

import Search from "./components/Search";
import Results from "./components/Results";

export default {
  name: "app",
  components: { Search, Results },
  data() {
    return {};
  }
};
</script>

<style src="./assets/style.css">
</style>
