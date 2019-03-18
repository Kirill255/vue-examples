<template>
  <ul>
    <li v-for="message in messages">
      {{ message }}
    </li>
    <button class="button"
            @click="handleClick">Кнопка</button>
  </ul>
</template>

<script>
export default {
  name: "messageList",
  props: ["messages"],
  methods: {
    handleClick() {
      this.$emit("clickOnButton");
    }
  }
};
</script>
