<!-- Главный компонент -->

<template>
  <div id="app">
    <app-pagination :total="totalPhotos"
                    :perPage="perPage"
                    :current="currentPage"
                    @page-changed="fetchPhotos">
    </app-pagination>

    <section class="grid">
      <app-card :photo.sync="photo"
                v-for="photo in photos"
                :key="photo.id">
      </app-card>
    </section>

  </div>
</template>

<script>
// https://www.youtube.com/watch?v=Hx1jdZz7vlg

var appId = "b41c7381e483857da652f07f00645fb2568d03cef2a5c8a3d57e967f2cd1dbf3";
import AppCard from "./components/Card.vue";

export default {
  name: "app",
  data() {
    return {
      photos: [],
      totalPhotos: 0,
      perPage: 9,
      currentPage: 1
    };
  },
  components: {
    AppCard
  },
  methods: {
    fetchPhotos: function(page) {
      var options = {
        params: {
          client_id: appId,
          page: page,
          per_page: this.perPage
        }
      };

      this.$http
        .get("https://api.unsplash.com/photos", options)
        .then(function(response) {
          this.photos = response.data;
          // parseInt - привести строку к числу
          this.totalPhotos = parseInt(response.headers.get("x-total"));

          this.currentPage = page;
        }, console.log);
    }
  },
  created: function() {
    this.fetchPhotos(this.currentPage);
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #f5f6f7;
  display: flex;
  justify-content: center;
  padding: 120px 0 80px;
}

#app {
  width: 100%;
}

/* Галерея */
.grid {
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
}

.grid__item {
  width: 30%;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 20px 40px;
}

/* Фотокарточки */
.card {
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  line-height: 0;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.card__body {
  width: 100%;
  height: 215px;
  overflow: hidden;
  background-color: #eee;
}

.card__body img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__footer {
  width: 100%;
  padding: 10px 15px;
}

.media__obj {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #d8d8d8;
  margin-right: 15px;
  float: left;
}

.media__body {
  width: 100%;
  height: 32px;
  line-height: 32px;
}

.media__body a {
  font-family: Courier, serif;
  font-size: 15px;
  color: #999;
}

.media__body a:hover {
  text-decoration: none;
}
</style>
