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
        form.skills__add-name(@submit.prevent)
          input.input__form(v-model="formSkills.title" id="skills-group-name" type="text" name="group-name" placeholder="Название новой группы")
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
            li.sk(v-for="skill in skills" :key="skill.id")
              form.new-skill(@submit.prevent)  
                input.input__form(id="skill-added-name" type="text" name="name" placeholder="Новый навык")
                input.input__form(id="skill-added-percents" type="text" name="percents" placeholder="0")  
                .new-skill-buttons
                  .skills-buttons-ready(v-if="isReadySkill")
                    button.skills__button.skills__button--tick(v-on:click="createSkill")
                      svg-icon(:className="'admin__icon'" :iconName="'tick'") 
                    button.skills__button.skills__button--remove(type="button" v-on:click="cancelCreateSkill")
                      svg-icon(:className="'admin__icon'" :iconName="'remove'")
                  .skills-buttons-go(v-if="isGoSkill")
                    button.skills__button.skills__button--pencil(type="button" v-on:click="renameSkill")
                      svg-icon(:className="'admin__icon'" :iconName="'pencil'") 
                    button.skills__button.skills__button--trash(type="button" v-on:click="deleteSkill")
                      svg-icon(:className="'admin__icon'" :iconName="'trash'")
          form.skills__add-row(@submit.prevent="createNewSkill") 
            input.input__form(v-model="formSkills.skill" id="skill-name" type="text" name="name" placeholder="Новый навык")
            input.input__form(v-model="formSkills.percents" id="skill-percents" type="text" name="percents" placeholder="0")  
            button.add-icon 
              svg-icon(:className="'admin__icon'" :iconName="'remove'")
      
</template>

<script>
import svgIcon from "../elements/svg-icon.vue";
import axios from 'axios';

const baseUrl = "https://webdev-api.loftschool.com/";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE4MiwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1NzIyNjI2NTYsImV4cCI6MTU3MjI4MDY1NiwibmJmIjoxNTcyMjYyNjU2LCJqdGkiOiJMa1FBNWVyTW9mdVFTT2I3In0.102dADWsH-fF4MXLFsZ6ufomwkyKgTxBUrsTBXrz8ys";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

export default {
  data() {
    return {
      formSkills: {
        title: "",
        skill: "",
        percents: ""
      },
      isReady: true,
      isGo: false,
      isReadySkill: true,
      isGoSkill: false,
      categories: [],
      skills: [] 
    }
  },
  components: {
      svgIcon: () => import("../elements/svg-icon")
  },
  created() {
    this.fetchCategories();
    this.fetchSkills()
  },
  methods: {
    createCategory() {
      axios.post('/categories', {
        title: this.formSkills.title
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
      this.isReady = false
    },
    deleteCategory() {
      axios.delete('/categories/182').then(response => {
        this.isReady = true;
        this.isGo = false
      })
      
    },
    renameCategory() {
      axios.post('/categories/182', {
        title: this.formSkills.title
      });
      this.isReady = true;
      this.isGo = false
    },
    createSkill() {
      axios.post('/skills', {
        title: this.formSkills.skill,
        percent: this.formSkills.percents
      }).then(response => {
        this.skills.unshift(response.data)
      })
    },
    fetchSkills() {
      axios.get('/skills/182').then(response => {
        this.skills = response.data
      })
    },
    createNewSkill() {
      axios.post('/skills', {
        title: this.formSkills.skill,
        percents: this.formSkills.percents
      })
    },
    cancelCreateSkill() {
      this.isGoSkill = true;
      this.isReadySkill = false
    },
    deleteSkill() {
      axios.delete('/skills/182');
      this.isReadySkill = true;
      this.isGoSkill = false

    },
    renameSkill() {
      axios.post('/skills/182', {
        title: this.formSkills.skill
      });
      this.isReadySkill = true;
      this.isGoSkill = false
    },
    hideButtonsReadySkill() {
      this.isGoSkill = true;
      this.isReadySkill = false
    },
    hideButtonsGoSkill() {
      this.isReadySkill = true;
      this.isGoSkill = false
    }
  }
}
</script>

<style>
.change-block {
  box-shadow: 0 0 15px 2px rgba(122, 122, 122, 0.3);
  padding: 30px;
  &--skills {
    flex: 1;
    display: flex;
    flex-direction: column;
    /* display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    grid-gap: 20px;
    grid-template-areas: 
    "name"
    "content"
    "row"; */
  }
}

.skills__desc {
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-gap: 20px;
  grid-template-areas: 
  "content"
  "row";
}

.add-group {
  display: flex;
  align-items: center;
  color: #383ace;
  font-size: 24px;
  font-weight: 700;
  background: transparent;
  outline: none;
  & .add-icon {
    width: 20px;
    height: 20px;
    & .admin__icon {
      width: 8px;
      height: 8px;
      transform: rotate(45deg) translate(-65%, -65%);
    }
  }
  &:hover {
    color: #cb89f7;
    & .add-icon {
      background: linear-gradient(to right, #cb89f7 25%, #b70efa 50%);
    }
  }
  & .add-group-text {
    padding-left: 20px;
  }
}

.skills__add-content {
  grid-area: content;
}
.skills__add-row {
  grid-area: row;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  & .input__form {
    margin-right: 30px;
    width: 70%;
    @media screen and (max-width: 768px) {
      
      margin-right: 10px;
    }
    &::placeholder {
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
}
.new-skill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  & .input__form {
    border-bottom: 1px solid transparent;
    width: 70%;
    &:focus {
      border-bottom: 1px solid black;
    }
    &::placeholder {
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
  & #skill-name {
    margin-right: 30px;
    width: 60%;
  }
  &-buttons {
      display: flex;
  }
  
}
.skills__button {
  width: 30px;
  height: 30px;
  &--tick {
    fill: #1bd802;
    &:hover {
      fill: #1ff503;
    }
  }
  &--remove {
    fill: #c73034;
    &:hover {
      fill: #ec3a40;
    }
  }
  &--pencil, &--trash {
    fill: #a0a5b1;
    &:hover {
      fill: #c9cbce;
    }
  }
}



#skill-percents, #skill-added-percents {
  width: 10%;
}

#skills-group-name {
  width: 70%;
}


.skills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  margin-bottom: 85px;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  &__add-name {
    grid-area: name;
    padding: 0 10px 30px;
    display: flex;
    border-bottom: 1px solid #a7aaaf;
    justify-content: space-between;
    & .input__form {
      &::placeholder {
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
  }
}
.skills__add-name-icons {
  display: flex;
  align-items: center;
}
.skills-buttons {
    display: flex;

    &-ready, &-go {
      display: flex;
    }
}
</style>