<template lang="pug">
form.new-skill(@submit.prevent)  
    input.input__form(:disabled="isDisabled" id="skill-added-name" type="text" name="name" placeholder="Новый навык")
    input.input__form(:disabled="isDisabled" id="skill-added-percents" type="text" name="percents" placeholder="0")  
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
</template>

<script>
import svgIcon from "./svg-icon.vue";
import $axios from "@/requests.js";


export default {
    data() {
        return {
            isReadySkill: true,
            isGoSkill: false,
            isDisabled: true,
            skill: {...this.skillItem}
        }
    },
    props: ['skillItem']
    ,
    components: {
      svgIcon: () => import("../elements/svg-icon.vue")
    },
    methods: {
        createSkill() {
            $axios.post('/skills', {
                title: this.formSkills.skill,
                percent: this.formSkills.percents
            }).then(response => {
                this.skills.push(response.data)
            })
        },
        createNewSkill() {
            $axios.post('/skills', {
                title: this.formSkills.skill,
                percents: this.formSkills.percents
            })
        },
        cancelCreateSkill() {
            this.isGoSkill = true;
            this.isReadySkill = false
        },
        deleteSkill() {
            $axios.delete('/skills/' + SkillItem.id);
                this.isReadySkill = true;
                this.isGoSkill = false
        },
        renameSkill() {
            $axios.post('/skills/182', {
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