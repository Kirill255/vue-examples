<template>
  <div>
    <h1>Users page</h1>
  </div>
</template>

<script>
export default {
  name: "Users",
  // https://router.vuejs.org/ru/guide/advanced/navigation-guards.html#%D1%85%D1%83%D0%BA%D0%B8-%D0%B4n%D1%8F-%D0%BA%D0%BE%D0%BD%D0%BA%D1%80%D0%B5%D1%82%D0%BD%D1%8B%D1%85-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      "Вы хотите уйти? У вас есть несохранённые изменения!"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  }
};
</script>

<style scoped>
</style>
