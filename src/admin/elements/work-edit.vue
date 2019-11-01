<template lang="pug">
.work__visual
    ul.work__tags
        li.work__tag(v-for="tag in tags" :key="tag.id")
    .work__desc
        input__form.work__name(:disabled="isDisabled" v-model="formData.title" id="work-name" type="text" name="name" placeholder="Новая работа")
        input__form.work__name-desc(:disabled="isDisabled" v-model="formData.description" id="work-desc" type="text" name="name" placeholder="Описание этой работы")
        input__form.work__link(:disabled="isDisabled" v-model="formData.link" id="work-link" type="text" name="name" placeholder="Ссылка")
        .fix-del__buttons
            button.fix-del__button.fix-del__button--fix(type="button") 
                .fix-del__button-text Править
                .fix-del__icon.fix-del__icon--fix
                    svg-icon(:className="'admin__icon'" :iconName="'pencil'")
            button.fix-del__button.fix-del__button--delete(type="button")
                .fix-del__button-text Удалить
                .fix-del__icon.fix-del__icon--delete
                    svg-icon(:className="'admin__icon'" :iconName="'remove'")
</template>

<script>
import svgIcon from "./svg-icon.vue";
import $axios from "@/requests.js";

export default {
    data() {
        return {
           formData: {...this.workItem},
           isDisabled: true 
        }
    },
    props: ['workItem'],
    methods: {
        deleteWorkBlock() {
            $axios.delete('/works/' + this.formData.id)
        },
        rewriteWorkBlock() {
            $axios.post('/works/', {
                title: this.formData.title,
                techs: this.formData.tags,
                description: this.formData.description,
                link: this.formData.link,
                photo: this.formData.photo
            });
            this.isDisabled = false
        }
    }
}
</script>