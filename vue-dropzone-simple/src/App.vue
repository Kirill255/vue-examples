<template>
  <div class="container">
    <p>Drop files here or click to upload.</p>

    <div ref="imagezone">
      <p>
        <img class="img-thumbnail"
             :src="picture"
             style="height: 128px; width: 128px;" />
      </p>
      <div class="row">
        <div class="col-md-2">
          <input type="file"
                 ref="image"
                 class="d-none"
                 @change="upload" />
          <button class="btn btn-default btn-block"
                  @click="selectNewImage">Выбрать новую</button>
        </div>
        <div class="col-md-10">
          <input type="text"
                 class="form-control"
                 v-model="picture"
                 readonly />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// Используемые плагины
import axios from "axios";
import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";

export default {
  name: "AvatarUploader",
  data() {
    return {
      picture: "http://via.placeholder.com/128x128"
    };
  },
  methods: {
    // Показать окно выбора файла
    selectNewImage() {
      this.$refs.image.click();
    },

    // Upload новой аватарки пользователя
    upload() {
      const url = "https://api.imgur.com/3/image";

      const data = new FormData();
      data.append("image", this.$refs.image.files[0]);

      // Добавляем ключ от IMGUR
      // https://api.imgur.com/oauth2/addclient
      const config = {
        headers: {
          Authorization: "Client-ID 703424f37a8e1a8"
        }
      };

      axios
        .post(url, data, config)
        .then(response => response.data)
        .then(response => {
          this.picture = response.data.link;
          this.$refs.image.value = "";
        });
    },

    initDropzone() {
      /* eslint-disable no-new */
      new Dropzone(this.$refs.imagezone, {
        url: "https://api.imgur.com/3/image",
        paramName: "image",
        acceptedFiles: "image/*",
        method: "post",
        headers: {
          "Cache-Control": null,
          "X-Requested-With": null,
          Authorization: "Client-ID 703424f37a8e1a8"
        },
        createImageThumbnails: false,
        previewTemplate: '<div style="display:none"></div>',
        success: (file, response) => {
          this.picture = response.data.link;
          this.$refs.image.value = "";
        }
      });
    }
  },
  mounted() {
    this.initDropzone();
  }
};
</script>

<style scoped>
.container {
  padding-top: 20px;
}
</style>

