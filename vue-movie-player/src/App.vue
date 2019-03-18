<template>
  <div id="app"
       class="videos-container">
    <div class="video-player">
      <VideoFrame :source="current" />
    </div>
    <div class="video-choices">
      <VideoThumbails :movies="movies"
                      @choose-movie="handleChangeCurrent" />
    </div>
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>
// https://scotch.io/tutorials/build-a-movie-player-with-vuejs-solution-to-code-challenge-5#toc-the-technique

import VideoFrame from "./components/VideoFrame";
import VideoThumbails from "./components/VideoThumbails";

const api = "https://scotch-mvplayer-api.herokuapp.com/api/v1";
export default {
  name: "App",
  components: {
    // HelloWorld,
    VideoFrame,
    VideoThumbails
  },
  data() {
    return {
      api: api,
      movies: [],
      current: null
    };
  },
  created() {
    fetch(this.api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("res", data);
        this.movies = data;
        this.current = this.movies[0];
      })
      .catch((ex) => {
        console.log("failed", ex);
      });
  },
  methods: {
    handleChangeCurrent(movie) {
      this.current = movie;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.video-container {
  background-color: #333;
  padding: 10px;
  box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.25);
  color: #fff;
}

.video-player {
  min-height: 300px;
  width: 100%;
  background-color: #000;
  margin-bottom: 10px;
}

.video-choices {
  display: flex;
}

.video-choices :not(:last-child) {
  margin-right: 10px;
}
</style>
