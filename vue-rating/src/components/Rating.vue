<!-- Шаблон компонента -->
<template>
  <div class="rating">
    <ul class="list">
      <!-- v-for="star in maxStars" Перебрать массив maxStars, записав каждый элемент в star-->
      <!-- :class="{'active': star <= stars}" - добавить класс active если star меньше или равно stars -->
      <!-- - при клике вызвать метод rate(star) передав в него элемент star -->
      <li v-for="star in maxStars"
          :key="star"
          :class="{'active': star <= stars}"
          @click="rate(star)"
          class="star">
        <!-- компонент icon -->
        <!-- :name="star <= stars? 'star' : 'star-o'" - если star меньше stars то поставить name - star, иначе поставить name - star-o -->
        <icon :name="star <= stars? 'star' : 'star-o'" />
      </li>
    </ul>
    <!-- v-if="hasCounter" - если hasCounter == true, то показать -->
    <!-- {{ counter }} - подставить вычисляемое значение counter -->
    <span v-if="hasCounter"
          class="counter">{{ counter }}</span>
  </div>
</template>

<!-- Скрипты - логика -->
<script>
// импортировать компонент icon и отдельные иконки star и star-o
// https://github.com/Justineo/vue-awesome - документация
// сдесь в проекте используется более старая версия 2+, а сейчас доступна уже версия 3+ в которой библиотека FontAwesome update to 5.0 и произошли небольшие изменения, разделились иконки по разным папкам vue-awesome/icons и vue-awesome/icons/regular и поэтому имена у иконок будут из vue-awesome/icons как и раньше <icon name="star"></icon>, а из папки vue-awesome/icons/regular вместо 'star-o' будет <icon name="regular/star"></icon>
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/star";
import "vue-awesome/icons/star-o";

// экспортируем этот код
export default {
  components: { Icon }, // компонент - icon
  props: {
    // принимаемые значение
    grade: {
      // оценка
      type: Number, // тип - число
      required: true // обязательное
    },
    maxStars: {
      // макс звёзды
      type: Number,
      default: 5 // значение по умолчанию
    },
    hasCounter: {
      type: Boolean,
      default: true
    }
  },
  data() {
    // переменные
    return {
      stars: this.grade // переменная stars равна значению grade
    };
  },
  computed: {
    // вычисляемые свойства
    counter() {
      // вернуть строку переменная stars и переменная maxStars
      return `${this.stars} of ${this.maxStars}`;
    }
  },
  methods: {
    // методы ( функции ), используемые
    rate(star) {
      // если тип star - число
      // если star меньше или равно maxStars
      // если star больше или равно нулю
      if (typeof star === "number" && star <= this.maxStars && star >= 0) {
        // переменной stars присвоть значение
        // если переменная stars равно переданному star, то присовить star - 1, иначе присвоить просто star
        this.stars = this.stars === star ? star - 1 : star;
      }
    }
  }
};
</script>

<!-- Стили на языке scss, "закрытые", только для этого компонента -->
<style lang="scss" scoped>
.rating {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    font-size: 30px;

    color: #a7a8a8;
}

.list {
    margin: 0 0 5px 0;
    padding: 0;

    list-style-type: none;

    &:hover {
        .star {
            color: #f3d23e;
        }
    }
}

.star {
    display: inline-block;

    cursor: pointer;

    .fa-icon {
        width: 100px;
        height: 100px;
    }
}

.star:hover ~ .star:not(.active) {
    color: inherit;
}

.active {
    color: #f3d23e;
}

.counter {
    margin-top: 15px;

    display: block;

    text-align: center;
}
</style>
