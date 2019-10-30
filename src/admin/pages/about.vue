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
import axios from 'axios';

const baseUrl = "https://webdev-api.loftschool.com/";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE4MiwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1NzIzMzkxNjYsImV4cCI6MTU3MjM1NzE2NiwibmJmIjoxNTcyMzM5MTY2LCJqdGkiOiJETWtFSGdoTHJRckhOSFN5In0.hO1JaKOowpplLaqgB1V8WJE7I2d2yFTG1qo_ywWFLUg";

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
      skills: [] 
    }
  },
  components: {
    svgIcon: () => import("../elements/svg-icon.vue"),
    categoryEdit: () => import("../elements/category-edit.vue")
  },
  methods: {
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