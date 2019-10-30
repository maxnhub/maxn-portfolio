<template lang="pug">
  .block.block--skills
    .section-top
      .section-title Блок "Обо мне"
      button.add-group
        .add-icon
          svg-icon(:className="'admin__icon'" :iconName="'remove'")
        .add-group-text Добавить группу
    ul.skills
      li.change-block.change-block--skills(v-for="cat in categories" :key="cat.id")
        category-edit(:category="cat")
          .skills__desc
            ul.skills__add-content
              li.skills__add-content-item(v-for="skill in skills" :key="skill.id")
                skill-edit(:skillItem="skill")
            form.skills__add-row(@submit.prevent="createNewSkill") 
              input.input__form(v-model="formSkills.skill" id="skill-name" type="text" name="name" placeholder="Новый навык")
              input.input__form(v-model="formSkills.percents" id="skill-percents" type="text" name="percents" placeholder="0")  
              button.add-icon 
                svg-icon(:className="'admin__icon'" :iconName="'remove'")
      
</template>

<script>
import axios from 'axios';

const baseUrl = "https://webdev-api.loftschool.com/";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE4M…5TIn0.kwXiPQ6d3Dc-4YaQhxxMOvQXoslDiw83g5G7DembkFQ";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

export default {
  data() {
    return {
      formSkills: {
        skill: "",
        percents: ""
      },   
      isReadySkill: true,
      isGoSkill: false,
      skills: [],
      categories: []
    }
  },
  components: {
    svgIcon: () => import("../elements/svg-icon.vue"),
    categoryEdit: () => import("../elements/category-edit.vue"),
    skillEdit: () => import("../elements/skill-edit.vue")
  },
  methods: {
    fetchCategories() {
      axios.get('/categories/182').then(response => {
        this.categories = response.data
      })
    },
    fetchSkills() {
      axios.get('/skills/182').then(response => {
        this.skills = response.data
      })
    }
  },
  created() {
    this.fetchCategories();
    this.fetchSkills()
  }
}
</script>

<style src="../styles/about.pcss">

</style>