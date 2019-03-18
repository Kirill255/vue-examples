<template>
  <div>
    <div class="thumbnails">
      <div v-for="(movie, index) in movies"
           :key="index">
        <div class="poster"
             @click="changeCurrent(movie)">
          <img :src="movie.poster"
               height="200"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    changeCurrent(movie) {
      this.$emit("choose-movie", movie);
    }
  }
};
</script>

<style scoped>
.thumbnails {
  display: flex;
  justify-content: left;
}

.poster {
  float: left;
}

.poster img {
  height: 100px;
}
</style>
