<template>
  <div>
    <form>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input"
                 :class="{ 'is-danger': $v.user.name.$error }"
                 v-model.trim="$v.user.name.$model" />

          <div v-if="$v.user.name.$error">
            <div class="has-text-danger is-size-7"
                 v-if="!$v.user.name.required">Field is required</div>
            <div class="has-text-danger is-size-7"
                 v-if="!$v.user.name.minLength">Name must have at least {{$v.user.name.$params.minLength.min}} letters.</div>
          </div>
        </div>

      </div>

      <div class="field"
           :class="{ 'form-group--error': $v.user.age.$error }">
        <label class="label">Age</label>
        <div class="control">
          <input class="input"
                 :class="{ 'is-danger': $v.user.age.$error }"
                 v-model.trim="$v.user.age.$model" />

          <div v-if="$v.user.age.$error">
            <div class="has-text-danger is-size-7"
                 v-if="!$v.user.age.required">Field is required</div>
            <div class="has-text-danger is-size-7"
                 v-if="!$v.user.age.between">Must be between {{$v.user.age.$params.between.min}} and {{$v.user.age.$params.between.max}}</div>
          </div>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  name: "HelloWorld",
  mixins: [validationMixin],
  props: ["user"],
  data() {
    return {
      // name: '',
      // age: 0
    };
  },
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(4)
      },
      age: {
        required,
        between: between(20, 30)
      }
    }
  },
  watch: {
    name() {
      console.log(this.$v);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
