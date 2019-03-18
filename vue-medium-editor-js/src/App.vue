<template>
  <div id="app">
    <div class="container">
      <!--  -->
      <div class="form-group">
        <label for="about">Биография</label>
        <textarea class="form-control"
                  id="about"
                  rows="3"
                  placeholder="Напишите о себе"
                  v-model.trim="userInfo.aboutUser">
        </textarea>
      </div>
      <!--  -->

      <area-editor v-model="userInfo.aboutUser"></area-editor>

    </div>
  </div>
</template>

<script>
import AreaEditor from "./components/AreaEditor";

export default {
  name: "app",
  components: { AreaEditor },
  data() {
    return {
      userInfo: {
        aboutUser:
          "Lorem est. Enim deserunt estw consectetur officia anim dolor dolor eiusmod commodo quis sit elit eu. Lorem sit do eu voluptate esse sint. Incididunt commodo laboris!"
      }
    };
  }
};
</script>

<style>
</style>
