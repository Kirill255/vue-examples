<template>
  <div class="search">
    <input type="text"
           class="search__input"
           v-model="query"
           @keyup.13="search">
    <button class="search__button"
            @click="search">Найти</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("search", this.query);
    }
  }
};
</script>

<style scoped>
</style>
