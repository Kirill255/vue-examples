<template>
  <div class="results">
    <div class="item"
         v-for="item in results"
         :key="item.id">
      <a :href="item.url"
         class="item__title">{{ item.title }}</a>
      <div class="item__url">{{ item.url }}</div>
      <div class="item__snippet"
           v-html="item.snippet"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    results() {
      return this.$store.getters.results;
    }
  }
};
</script>

<style scoped>
</style>
