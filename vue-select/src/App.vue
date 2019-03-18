<template>
  <div id="app">

    <div class="wrapper">
      <select name=""
              id="mySelect"
              :value="selected">
        <option v-for="level in accessLevel"
                :value="level.value"
                :disabled="!level.value">
          <i :class="[level.value === 'guest' ? 'far fa-user' : level.value === 'user' ? 'fas fa-user' : level.value === 'admin' ? 'fas fa-user-tie' : '']"></i> {{level.text}}
        </option>
      </select>
      <span>Выбрано: {{ selected }}</span>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "selectric";

// выбрать один понравившийся стиль (p.s.: в themes есть ещё!)
// import "selectric/public/selectric.css";
import "selectric/public/themes/modern/selectric.css";
// import "selectric/public/themes/modern-v2/selectric.css";

export default {
  name: "app",
  data() {
    return {
      selected: "",
      // accessLevel: ["guest", "user", "admin"],
      accessLevel: [
        { value: "", text: "Выберите один из вариантов" },
        { value: "guest", text: "Guest" },
        { value: "user", text: "User" },
        { value: "admin", text: "Admin" }
      ]
    };
  },
  methods: {},
  mounted() {
    console.log("1 :", 1);
    // $(function() {
    $("#mySelect").selectric({
      onChange: element => {
        $(element).change();
        this.selected = element.value;
      }
    });
    // });
  },
  beforeDestroy() {
    $("#mySelect").selectric("destroy");
  }
};
</script>

<style>
.wrapper {
  max-width: 200px;
  margin: 0 auto;
}

</style>


/*
<i class="far fa-user"></i> // Guest
<i class="fas fa-user"></i> // User
<i class="fab fa-mandalorian"></i> // Admin

<i class="fas fa-user-slash"></i> // Guest
<i class="fas fa-user-check"></i> // User
<i class="fas fa-user-tie"></i> // Admin


<i :class="[level.value === 'guest' ? 'far fa-user' : level.value === 'user' ? 'fas fa-user' : level.value === 'admin' ? 'fas fa-user-tie' : '']"></i>

если level.value === 'guest' то класс 'far fa-user'
если level.value === 'user' то класс 'fas fa-user'
если level.value === 'admin' то класс 'fas fa-user-tie'
инчае ''
*/
