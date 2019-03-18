<template>
  <div>
    <div class="form-group">
      <label for="">Биография</label>

      <!-- вместо .editable, можно сделать например ref="editor", и при инициализации передать this.$refs.editor -->
      <!-- :value как-то криво работает, из-за реализации плагина видимо -->

      <textarea class="form-control"
                ref="editor"
                :value="aboutText">
      </textarea>

      <!-- <textarea class="form-control editable"
                :value="aboutText">
      </textarea> -->

      <!-- <div class="form-control editable"></div> -->
    </div>

  </div>
</template>

<script>
import MediumEditor from "medium-editor";
import "medium-editor/dist/css/medium-editor.min.css";
// import "medium-editor/dist/css/themes/default.min.css";
import "medium-editor/dist/css/themes/roman.min.css";
// import "medium-editor/dist/css/themes/beagle.min.css";

export default {
  name: "AreaEditor",
  model: {
    prop: "aboutText"
  },
  props: {
    aboutText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      editor: null
    };
  },
  watch: {
    // есть проблемы с вотчем, если вотчу, то почему то при вводе курсор постоянно перекидывается в начало textarea
    // возможно это пока что неисправленный баг самого плагина
    // а может тут и не нужно вотчить, хотя вроде нужно, потому что инчае значение не всегда устанавливается
    aboutText: function(newVal, oldVal) {
      // console.log("AboutText newVal :", newVal);
      this.editor.setContent(newVal);
    }
  },
  mounted() {
    // инициализация с своими настройками, можно оставить и по-умолчнию new MediumEditor(".editable", {})
    this.editor = new MediumEditor(this.$refs.editor, {
      toolbar: {
        buttons: [
          "bold",
          "italic",
          "h1",
          "h2",
          "h3",
          "anchor",
          "quote",
          "pre",
          "orderedlist",
          "unorderedlist",
          "indent",
          "outdent",
          "justifyLeft",
          "justifyCenter",
          "justifyRight",
          "removeFormat"
        ],
        diffLeft: 80,
        diffTop: -20
      },
      buttonLabels: "fontawesome",
      disableDoubleReturn: true,
      disableExtraSpaces: true,
      targetBlank: true,
      placeholder: {
        text: "Напишите о себе",
        hideOnClick: false
      },
      paste: {
        forcePlainText: false,
        cleanPastedHTML: true
      }
    });

    // после инициализации устанавливаем значение
    // нужно только при использовании <div class="editable"></div>, т.к. мы не можем спустить туда значение через :value, как в инпут или текстареа
    // хотя наверно нетолько, потому что в input и textarea :value криво работает, устанавливается через раз
    // this.editor.setContent(this.aboutText);

    // подписываемся на спец. событие редактора "editableInput", почти тоже самое что обычное событие "input"
    this.editor.subscribe("editableInput", (event, editable) => {
      // получить контент можно несколькими способами

      // 1
      // console.log("event.target.textContent :", event.target.textContent);

      // 2
      // let allContent = this.editor.serialize();
      // console.log("text :", allContent["element-0"].value);

      // 3
      // console.log("this.editor.getContent() :", this.editor.getContent());

      // 4
      // console.log("editable :", editable.innerHTML);
      // console.log("editable :", editable.textContent);

      // this.$emit("input", event.target.textContent);
      // this.$emit("input", allContent["element-0"].value);
      // this.$emit("input", this.editor.getContent());
      // this.$emit("input", editable.innerHTML);

      // this.$emit("input", event.target.innerHTML); // вместе со всеми тегами форматирования, а не просто текст
      this.$emit("input", editable.innerHTML);
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>

<style scoped>
</style>
