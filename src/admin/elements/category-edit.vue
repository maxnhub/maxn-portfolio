<template lang="pug">

form.skills__add-name(@submit.prevent)
  input.input__form(:disabled="isDisabled" v-model="cat.category" type="text" name="group-name" placeholder="Название новой группы")
  .skills__buttons
    .skills__buttons-ready(v-if="isReady")
      button.skills__button.skills__button--tick(v-on:click="createCategory")
          svg-icon(:className="'admin__icon'" :iconName="'tick'") 
      button.skills__button.skills__button--remove(type="button" v-on:click="cancelCreateCategory")
          svg-icon(:className="'admin__icon'" :iconName="'remove'")
    .skills__buttons-go(v-if="isGo")
      button.skills__button.skills__button--pencil(type="button" v-on:click="renameCategory")
          svg-icon(:className="'admin__icon'" :iconName="'pencil'") 
      button.skills__button.skills__button--trash(type="button" v-on:click="deleteCategory")
          svg-icon(:className="'admin__icon'" :iconName="'trash'")
</template>

<script>
import svgIcon from "./svg-icon.vue";
import $axios from "@/requests.js";

export default {
    data() {
        return {
          isReady: true,
          isGo: false,
          isDisabled: true,
          cat: {...this.category}
        }
    },
    props:  ['category']
    ,
    components: {
      svgIcon: () => import("../elements/svg-icon.vue")
    },
    methods: {
      createCategory() {
      $axios.post('/categories', {
        title: this.cat.category
      }).then(response => {
        this.categories.unshift(response.data)
      });
      this.isDisabled = true
    },
    cancelCreateCategory() {
      this.isGo = true;
      this.isReady = false;
      this.isDisabled = true
    },
    deleteCategory() {
      $axios.delete('/categories/' + this.category.id),
      this.isGo = false
    },
    renameCategory() {
      $axios.post('/categories/182', {
        title: this.cat.category
      });
      this.isReady = true;
      this.isGo = false;
      this.isDisabled = false
    }
  } 
}
</script>

<style src="../styles/category-edit.pcss">

</style>