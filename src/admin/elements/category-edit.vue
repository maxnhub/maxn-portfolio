<template lang="pug">
div
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
  .skills__desc
    ul.skills__add-content
      li.skills__add-content-item(v-if="cat.id==skill.category" v-for="skill in skills" :key="skill.id")
        skill-edit(:skillItem="skill")
    form.skills__add-row(@submit.prevent="createNewSkill") 
      input.input__form(v-model="formSkills.title" id="skill-name" type="text" name="name" placeholder="Новый навык")
      input.input__form(v-model="formSkills.percents" id="skill-percents" type="text" name="percents" placeholder="%")  
      button.add-icon 
        svg-icon(:className="'admin__icon'" :iconName="'remove'")
</template>

<script>
import svgIcon from "./svg-icon.vue";
import $axios from "@/requests.js";

export default {
    data() {
        return {
          formSkills: {
            title: "",
            percents: ""
          },
          isReady: true,
          isGo: false,
          isDisabled: true,
          skills: [],
          cat: {...this.category}
        }
    },
    props:  ['category']
    ,
    components: {
      svgIcon: () => import("../elements/svg-icon.vue"),
      skillEdit: () => import("../elements/skill-edit.vue")
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
    },
    createNewSkill() {
      $axios.post('/skills', {
        title: this.formSkills.title,
        percent: this.formSkills.percents,
        category: this.category.id
      }).then(response => {
        this.skills.push(response.data)
      })
    },
    fetchSkills() {
      $axios.get('/skills/182').then(response => {
        this.skills = response.data
      })
    }
  },
  created() {
    this.fetchSkills()
  } 
}
</script>

<style src="../styles/category-edit.pcss">

</style>