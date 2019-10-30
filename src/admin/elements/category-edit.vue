<template lang="pug">

form.skills__add-name(@submit.prevent)
    input.input__form(:disabled="isDisabled" v-model="category.title" id="skills-group-name" type="text" name="group-name" placeholder="Название новой группы")
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
import axios from 'axios';

const baseUrl = "https://webdev-api.loftschool.com/";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE4MiwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1NzIzMzkxNjYsImV4cCI6MTU3MjM1NzE2NiwibmJmIjoxNTcyMzM5MTY2LCJqdGkiOiJETWtFSGdoTHJRckhOSFN5In0.hO1JaKOowpplLaqgB1V8WJE7I2d2yFTG1qo_ywWFLUg";

export default {
    data() {
        return {
            isReady: true,
            isGo: false,
            isDisabled: true,
            category: {
                title: ""
            },
            categories: []
        }
    },
    props: {
        category: {
            title: ""
        },
        categories: []
    },
    created() {
    this.fetchCategories();
    this.fetchSkills()
  },
  methods: {
    createCategory() {
      axios.post('/categories', {
        title: this.category.title
      }).then(response => {
        this.categories.unshift(response.data)
      })
    },
    fetchCategories() {
      axios.get('/categories/182').then(response => {
        this.categories = response.data
      })
    },
    cancelCreateCategory() {
      this.isGo = true;
      this.isReady = false;
      this.isDisabled = true
    },
    deleteCategory() {
      axios.delete('/categories/182')
      this.isReady = true;
      this.isGo = false
    },
    renameCategory() {
      axios.post('/categories/182', {
        title: this.category.title
      });
      this.isReady = true;
      this.isGo = false;
      this.isDisabled = false
    }
  }   
}
</script>