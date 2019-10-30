<template lang="pug">
div
    .feedback
        .change-block-title Добавить отзыв 
        form.feedback__field(@submit.prevent="submitFormFeedback")
            .feedback__visual
                .feedback__avatar
                    img(v-if="filePreview" :src="filePreview")
                    input(style="display:none" type="file" @change="handleFile" ref="fileUpload")
                    .feedback__avatar-icon
                        svg-icon(:className="'admin__icon'" :iconName="'user'")
                button.add-avatar(type="button" @click="$refs.fileUpload.click()") Добавить фото
            .feedback__desc
                .feedback__forms
                    .feedback__desc-row
                        .feedback__desc-item
                            label.input__subtext(for="feedback-name-id") Имя автора
                                span.error(v-if="isError") {{ this.validation.firstError('formFeedback.author') }}
                            input.input__form(v-model="formFeedback.author" id="feedback-name-id" type="text" name="author-name")
                        .feedback__desc-item
                            label.input__subtext(for="feedback-position-id") Титул автора
                                span.error(v-if="isError") {{ this.validation.firstError('formFeedback.position') }}
                            input.input__form(v-model="formFeedback.position" id="feedback-position-id" type="text" name="author-position")
                    .feedback__desc-item.feedback__desc-item--textarea
                        label.input__subtext(for="feedback-textarea-id") Отзыв
                            span.error(v-if="isError") {{ this.validation.firstError('formFeedback.description') }}
                        textarea.input__textarea(v-model="formFeedback.description" class="feedback-textarea" id="textarea-feedback-id" name="feedback-textarea")
                    .block__buttons
                        button.cancel(type="button") Отмена
                        button.load Загрузить
    .new-feedback
        button.load-big
            .load-big__icon-box
                svg-icon(:className="'load__icon'" :iconName="'remove'")
            .load__text Добавить работу
        .change-block.change-block--feedback
            .change-block-title.change-block-title--new-feedback
                .new-feedback__visual
                .new-feedback__desc
                    .new-feedback__author Имя Фамилия
                    .new-feedback__author-position Программист
            .new-feedback-text Данный план является примерным ориентиром. Вы всегда можете работать в удобном для себя темпе. Оптимальное время, которое мы рекомендуем выделять на обучение: 32-34 часа в неделю.
            .fix-del__buttons.fix-del__buttons--feedback
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
import svgIcon from "../elements/svg-icon.vue";
import axios from 'axios';

const baseUrl = "https://webdev-api.loftschool.com/";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE4M…5TIn0.kwXiPQ6d3Dc-4YaQhxxMOvQXoslDiw83g5G7DembkFQ";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

export default {
    data() {
        return {
            formFeedback: {
                photo: "",
                author: "",
                position: "",
                description: ""
            },
            isError: false,
            filePreview: ""
        }; 
    },
    components: {
        svgIcon: () => import("../elements/svg-icon")
    },
    methods: {
        handleFile(e) {
            // Взять файл из формы
            const photoFile = this.fileFromForm(e)
            // Вставить файл в объект formFeedback
            this.formFeedback.photo = photoFile
            // Сгенерировать превью для файла
            this.renderFile(photoFile).then((f) => {
            this.filePreview = f
            })
        },
        fileFromForm(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) throw new Error("Нет файла");

            return files[0]
        },
        renderFile(file) {
            const reader = new FileReader();

            return new Promise((resolve, reject) => {
                try {
                    reader.readAsDataURL(file);
                    reader.onloadend = () => {
                        resolve(reader.result);
                    };
                } catch (error) {
                    throw new Error("Ошибка при чтении файла");
                }
            });
        },
        submitFormFeedback() {
            axios.post('/reviews', {
                photo: this.formFeedback.photo,
                author: this.formFeedback.author,
                occ: this.formFeedback.position,
                text: this.formFeedback.description
            }).then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error.response.data)
            }),
            this.$validate().then((result) => {
                if (result) {
                console.log("Send form here", result)
                } else {
                console.log("Validation error", result),
                this.isError = true
                }
            })
        },
    },
    validators: {
        "formFeedback.photo": function(value) {
            return Validator.value(value).required("Имя Фамилия");
        },
        "formFeedback.author": function(value) {
            return Validator.value(value).required("Имя Фамилия");
        },
        "formFeedback.position": function(value) {
            return Validator.value(value).required("Введите должность");
        },
        "formFeedback.description": function(value) {
            return Validator.value(value).required("Заполните отзыв");
        }           
    }
}
</script>

<style src="../styles/feedback.pcss">

</style>