<template lang="pug">
div
    form.new-skill(@submit.prevent)  
        input.input__form(:disabled="isDisabled" id="skill-added-name" type="text" name="name" placeholder="Новый навык" v-model="skill.title") 
        input.input__form(:disabled="isDisabled" id="skill-added-percents" type="text" name="percents" placeholder="%" v-model="skill.percent")  
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
    props: ['skillItem'],
    components: {
      svgIcon: () => import("../elements/svg-icon.vue")
    },
    methods: {
        createSkill() {
            $axios.post('/skills', {
                title: this.skill.title,
                percent: this.skill.percents,
                category: this.skillItem.category
            }).then(response => {
                this.skills.push(response.data)
            });
            this.isDisabled = true
        },
        cancelCreateSkill() {
            this.isGoSkill = true;
            this.isReadySkill = false;
            this.isDisabled = true
        },
        deleteSkill() {
            $axios.delete(`/skills/${this.skill.id}`);
                this.isReadySkill = true;
                this.isGoSkill = false
        },
        renameSkill() {
            $axios.post(`/skills/${this.skill.id}`, {
                title: this.skillItem.title,
                percent: this.skillItem.percents,
                category: this.skillItem.category
            });
                this.isReadySkill = true;
                this.isGoSkill = false;
                this.isDisabled = false
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