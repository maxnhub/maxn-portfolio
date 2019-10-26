<template lang="pug">
div 
  .works
    .change-block.change-block--works
      .change-block-title Добавление работы
      .works__field
        .works__drag
          input(style="display:none" type="file")
          .works__drag-desc Перетащите либо загрузите изображения
          button.load Загрузить
        .works__add
          form.works__form(@submit.prevent="submitForm")
            label.input__subtext(for="works-name-id") Название
              span.error {{ this.validation.firstError('dataForm.name') }}
            input.input__form(v-model="formData.name" id="works-name-id" type="text" name="name")
            label.input__subtext(for="works-link-id") Ссылка
              span.error {{ this.validation.firstError('dataForm.link') }}
            input.input__form(v-model="formData.link" id="works-link-id" type="text" name="link")
            label.input__subtext(for="works-textarea-id") Описание
              span.error {{ this.validation.firstError('dataForm.description') }}
            textarea.input__textarea(v-model="formData.description" class="works-textarea" id="textarea-connect-id" name="textarea")
            label.input__subtext(for="works-tag-id") Добавление тэга
              span.error {{ this.validation.firstError('dataForm.tags') }}
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

export default {
  data() {
    return {
      formData: {
        name: "",
        link: "",
        description: "",
        tags: "",
        photo: ""
      }
    };
  },
  components: {
    svgIcon: () => import("../elements/svg-icon")
  },
  methods: {
    submitForm() {
      const success = this.$validate();
      console.log("success", success);
    }
  },
  validators: {
    "dataForm.name": function(value) {
      return Validator.value(value).required("Введите имя");
    },
    "dataForm.link": function(value) {
      return Validator.value(value).required("Введите ссылку");
    },
    "dataForm.description": function(value) {
      return Validator.value(value).required("Введите описание");
    },
    "dataForm.tags": function(value) {
      return Validator.value(value).required("Введите тэги");
    },
    "dataForm.photo": function(value) {
      return Validator.value(value).required("Загрузите изображение");
    }
  }
};
</script>

<style>

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
