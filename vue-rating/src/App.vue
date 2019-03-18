<!-- Шаблон -->
<template>
  <div class="main">
    <div class="rating">
      <rating :has-counter="hasСounter"
              :grade="grade"></rating>
    </div>
  </div>
</template>

<!-- Скрипты - логика -->
<script>
// импортируем файл Rating.vue
import Rating from "./components/Rating.vue";

// экспортируем наш код js
export default {
  name: "app",
  data() {
    // переменные
    return {
      hasСounter: true, // показывать ли счётчик кол-ва выбранных звёзд
      grade: 3 // начальный рейтинг
    };
  },
  components: {
    // компоненты
    Rating
  }
};
</script>

<!-- Стили на языке scss -->
<style lang="scss">
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.main {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
