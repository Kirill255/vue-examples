<template>
  <div>
    <message-list :messages="messages"
                  @clickOnButton.once="addNewName"></message-list>
  </div>
</template>

<script>
import MessageList from "./components/MessageList";

export default {
  name: "app",
  data: () => ({
    messages: ["Hey John", "Howdy Paco", "Jack Low"]
  }),
  components: {
    MessageList
  },
  methods: {
    addNewName() {
      this.messages.push("Sarah Dresner");
    }
  }
};
</script>

<style>
</style>
