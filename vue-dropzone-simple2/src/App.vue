<template>
  <div>
    <h2>Vue2-dropzone</h2>
    <div class="imgUploadBox">

      <div class="imgBox">
        <img :src="picture"
             alt="">
      </div>

      <div class="ddBox">
        <vue-dropzone ref="myVueDropzone"
                      id="dropzone"
                      :options="dropzoneOptions"
                      @vdropzone-success="handleSuccess"></vue-dropzone>
      </div>

    </div>

  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  name: "app",
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      picture: "http://via.placeholder.com/130x130",
      dropzoneOptions: {
        url: "https://api.imgur.com/3/image",
        method: "post",
        paramName: "image",
        acceptedFiles: "image/*",
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> UPLOAD ME",
        maxFilesize: 0.5,
        headers: {
          "Cache-Control": null,
          "X-Requested-With": null,
          Authorization: "Client-ID 703424f37a8e1a8"
        },
        thumbnailHeight: 80
        // createImageThumbnails: false,
        // previewTemplate: '<div style="display:none"></div>' // скрыть превьюшку совсем
        // можно юзать стандартные настройки и хуки из нативного dropzone.js или можно подписываться на события компонента vue2Dropzone
        // success: (file, response) => {
        //   console.log("response :", response);
        //   this.picture = response.data.link;
        // },
      }
    };
  },
  methods: {
    // https://rowanwins.github.io/vue-dropzone/docs/dist/#/events
    handleSuccess(file, response) {
      console.log("response2 :", response);
      this.picture = response.data.link;
      // this.$refs.myVueDropzone.disable();
      this.$refs.myVueDropzone.removeAllFiles();
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* overflow: hidden; */
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

.imgUploadBox {
  display: grid;
  grid-template-columns: 130px auto;
  grid-template-rows: 130px;
  grid-column-gap: 10px;
}

.imgBox img {
  /* object-fit: cover; */
  width: 130px;
  height: 130px;
  border: 2px solid #e5e5e5;
}

.ddBox {
  overflow: hidden;
}

/* это переопределяю стили самого vue2Dropzone, классы посмотрел в отладчике,
  вроде как ещё есть проблема со scoped стилями, надо пробовать, по идее эти стили только для выравнивания по центру надписи dictDefaultMessage */
#dropzone {
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
