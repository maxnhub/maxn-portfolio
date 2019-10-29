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
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE4MiwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1NzIzMzkxNjYsImV4cCI6MTU3MjM1NzE2NiwibmJmIjoxNTcyMzM5MTY2LCJqdGkiOiJETWtFSGdoTHJRckhOSFN5In0.hO1JaKOowpplLaqgB1V8WJE7I2d2yFTG1qo_ywWFLUg";

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

<style>
.feedback {
  margin-bottom: 50px;
}
.feedback__field {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  grid-template-areas:
    "visual desc desc ."
    ". desc desc .";
  padding: 30px 15px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-areas:
      "visual desc desc"
      ". desc desc";
  }
}
.feedback__visual {
  grid-area: visual;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.feedback__avatar {
  background: #dee4ec;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;

  & img {
      width: 100%;
      height: 100%;
      z-index: 7;
  }
}
.feedback__avatar-icon {
    position: absolute;
    top: 30%;
    left: 30%;
    z-index: 2;
    fill: white;
    & .admin__icon {
        width: 75px;
        height: 75px;
    }
}
.add-avatar {
  color: #383ace;
  font-size: 18px;
  font-family: "OpenSans", Helvetica, sans-serif;
  font-weight: 700;
  padding: 20px 40px;
  &:hover {
    color: #af45f5;
  }
  & img {
      width: 100%;
      height: 100%;
      z-index: 5;
  }
}
.feedback__desc {
  grid-area: desc;
}
.feedback__desc-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  & .input__form {
  }
}
.feedback__desc-item {
  display: flex;
  flex-direction: column;
  width: 45%;
  &--textarea {
    width: 100%;
  }
}
.new-feedback {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  &__visual {
    background: url(../../images/content/feed3.png) center center / cover no-repeat;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
  &__desc {
    display: flex;
    flex-direction: column;
    color: #a7aaaf;
    font-size: 18px;
    font-family: "OpenSans", Helvetica, sans-serif;
  }
  &__author {
    color: #424d63;
    padding-bottom: 10px;
    font-weight: 700;
  }
  &-text {
    color: black;
    font-size: 16px;
    font-family: "OpenSans", Helvetica, sans-serif;
    font-weight: 500;
    grid-area: text;
  }
}
.error {
  background: crimson;
  padding: 10px 15px;
  color: white;
  position: absolute;
  top: 160%;
  left: 25%;
  border-radius: 5px;

  &:after {
    content: '';
    left: 5px;
    border: 10px solid transparent;
    width: 0px;
    height: 0px;
    border-bottom-color: crimson;
    border-top-width: 0px;
    position: absolute;
    bottom: 100%;
  }
}
</style>