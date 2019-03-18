<template>
  <div>
    <iframe :src="source.trailer"
            allowFullScreen
            frameborder="0"
            style="width: 100%; height: 376px; min-width: 750px" />
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
