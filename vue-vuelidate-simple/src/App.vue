<template>
  <div class="container">
    <div class="columns">
      <div class="column myImg">
        <img width="15%"
             src="./assets/logo.png">
      </div>
    </div>
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <MyForm :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import MyForm from "./components/MyForm";

export default {
  name: "App",
  components: {
    MyForm
  },
  data() {
    return {
      user: {
        name: "",
        age: 0
      }
    };
  }
};
</script>

<style>
.myImg {
  text-align: center;
}
</style>
