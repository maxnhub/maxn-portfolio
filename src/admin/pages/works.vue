<template lang="pug">
div 
  .works
    .change-block.change-block--works
      .change-block-title Добавление работы
      form.works__field
        .works__drag
            img(v-if="filePreview" :src="filePreview")
            input(style="display:none" type="file" @change="handleFile" ref="fileUpload")
            .works__drag-desc Загрузите изображение
            button.load(type="button" @click="$refs.fileUpload.click()") Загрузить
        .works__add
          form.works__form(@submit.prevent="submitForm")
            label.input__subtext(for="works-name-id") Название
              span.error(v-if="isError") {{ this.validation.firstError('formData.name') }}
            input.input__form(v-model="formData.name" id="works-name-id" type="text" name="name")
            label.input__subtext(for="works-link-id") Ссылка
              span.error(v-if="isError") {{ this.validation.firstError('formData.link') }}
            input.input__form(v-model="formData.link" id="works-link-id" type="text" name="link")
            label.input__subtext(for="works-textarea-id") Описание
              span.error(v-if="isError") {{ this.validation.firstError('formData.description') }}
            textarea.input__textarea(v-model="formData.description" class="works-textarea" id="textarea-connect-id" name="textarea")
            label.input__subtext(for="works-tag-id") Добавление тэга
              span.error(v-if="isError") {{ this.validation.firstError('formData.tags') }}
            input.input__form(v-model="formData.tags" id="works-tag-id" type="text" name="tag")
            .block__buttons
              button.cancel(type="button") Отмена
              button.load Загрузить
  .new-works
          button.load-big
            .load-big__icon-box
              svg-icon(:className="'load__icon'" :iconName="'remove'")
            .load__text Добавить работу
          .change-block.change-block--work
            .work__visual
              .work__tags
                .work__tag html
                .work__tag css
                .work__tag javascript
            .work__desc
              .work__name Новая работа
              .work__name-desc Описание этой работы
              .work__link http://google.com
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
import svgIcon from "../elements/svg-icon.vue";
import { Validator } from "simple-vue-validator";
import axios from 'axios';

const baseUrl = "https://webdev-api.loftschool.com/";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE4MiwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1NzIzMzkxNjYsImV4cCI6MTU3MjM1NzE2NiwibmJmIjoxNTcyMzM5MTY2LCJqdGkiOiJETWtFSGdoTHJRckhOSFN5In0.hO1JaKOowpplLaqgB1V8WJE7I2d2yFTG1qo_ywWFLUg";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

export default {
  data() {
    return {
      formData: {
        name: "",
        link: "",
        description: "",
        tags: "",
        photo: ""
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
        // Вставить файл в объект formData
        this.formData.photo = photoFile
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
    submitForm() {
      axios.post(baseUrl + '/works', {
        title: this.formData.name,
        techs: this.formData.tags,
        photo: this.formData.photo,
        link: this.formData.link,
        description: this.formData.description
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
    }
  },
  validators: {
    "formData.name": function(value) {
      return Validator.value(value).required("Введите имя");
    },
    "formData.link": function(value) {
      return Validator.value(value).required("Введите ссылку");
    },
    "formData.description": function(value) {
      return Validator.value(value).required("Введите описание");
    },
    "formData.tags": function(value) {
      return Validator.value(value).required("Введите тэги");
    }
    ,
    "formData.photo": function(value) {
      return Validator.value(value).required("Загрузите изображение");
    }
  }
};
</script>

<style>

.works {
  margin-bottom: 30px;
}
.works__field {
  padding: 0 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3.125rem;
  grid-template-areas:
    "drag add"
    ". add";
    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
      grid-template-areas:
      "drag"
      "add";
    }
}
.works__drag {
  text-align: center;
  vertical-align: center;
  background: #dee4ec;
  border: 2px dashed #a1a1a1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  grid-area: drag;
  
  &-desc {
    color: #424d63;
    font-size: 18px;
    font-family: "OpenSans", Helvetica, sans-serif;
    font-weight: 700;
    width: 50%;
    text-align: center;
    margin-bottom: 35px;
    padding-top: 80px;
  }

  & img {
    width: 100%;
    height: 100%;
    z-index: 5;
  }

  & .load {
    margin-bottom: 80px;
  }
}

.works__form {
  display: flex;
  flex-direction: column;
  & .input__form {
    margin-bottom: 35px;
  }
}

.new-works {
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
}
.change-block--work {
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-bottom: 30px;
}

.work__visual {
  width: 100%;
  height: 100%;
  background: url(../../images/content/2.jpg) center center / cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 45px;
  padding-bottom: 10px;
  padding-right: 10px;
  @media screen and (max-width: 480px) {
    min-height: 275px;
  }
}
.work__tags {
  display: flex;
  justify-content: flex-end;
}

.work__tag {
  color: #a7aaaf;
  font-size: 14px;
  font-family: "OpenSans", Helvetica, sans-serif;
  border-radius: 30px;
  background: #ffffff;
  padding: 10px 15px;
  margin-left: 15px;
}
.work__desc {
  padding-left: 25px;
  padding-right: 25px;
}
.work__name {
  color: #424d63;
  font-size: 18px;
  font-family: "OpenSans", Helvetica, sans-serif;
  font-weight: 700;
}
.work__name-desc {
  padding-top: 25px;
  color: #a7aaaf;
  font-size: 18px;
  font-family: "OpenSans", Helvetica, sans-serif;
}
.work__link {
  padding-top: 25px;
  color: #383ace;
  text-decoration: underline;
  font-size: 18px;
  font-family: "OpenSans", Helvetica, sans-serif;
}

.error {
  background: crimson;
  padding: 10px 15px;
  color: white;
  position: absolute;
  top: 100%;
  left: 5%;
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
