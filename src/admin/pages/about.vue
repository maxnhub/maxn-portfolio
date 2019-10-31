<template lang="pug">
  .block.block--skills
    .section-top
      .section-title Блок "Обо мне"
      button.add-group(v-on:click="addNewGroup")
        .add-icon
          svg-icon(:className="'admin__icon'" :iconName="'remove'")
        .add-group-text Добавить группу
    ul.skills
      li.change-block.change-block--skills(v-for="cat in categories" :key="cat.id")
        category-edit(:category="cat")
          
      
</template>

<script>
import $axios from "@/requests.js";

export default {
  data() {
    return {    
      isReadySkill: true,
      isGoSkill: false,
      categories: [],
      cat: ""
    }
  },
  components: {
    svgIcon: () => import("../elements/svg-icon.vue"),
    categoryEdit: () => import("../elements/category-edit.vue")
    
  },
  methods: {
    fetchCategories() {
      $axios.get('/categories/182').then(response => {
        this.categories = response.data
      })
    },
    addNewGroup(cat) {
      this.categories.push(cat)
    }  
  },
  created() {
    this.fetchCategories()
  }
}
</script>

<style src="../styles/about.pcss">

</style>