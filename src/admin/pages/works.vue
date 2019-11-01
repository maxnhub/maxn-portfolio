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
              span.error(v-if="isError") {{ this.validation.firstError('formData.title') }}
            input.input__form(v-model="formData.title" id="works-name-id" type="text" name="name")
            label.input__subtext(for="works-link-id") Ссылка
              span.error(v-if="isError") {{ this.validation.firstError('formData.link') }}
            input.input__form(v-model="formData.link" id="works-link-id" type="text" name="link")
            label.input__subtext(for="works-textarea-id") Описание
              span.error(v-if="isError") {{ this.validation.firstError('formData.description') }}
            textarea.input__textarea(v-model="formData.description" class="works-textarea" id="textarea-connect-id" name="textarea")
            label.input__subtext(for="works-tag-id") Добавление тэга
              span.error(v-if="isError") {{ this.validation.firstError('formData.techs') }}
            input.input__form(v-model="formData.techs" id="works-tag-id" type="text" name="tag")
            .block__buttons
              button.cancel(type="button" v-on:click="cancelCreateWorkBlock") Отмена
              button.load Загрузить
  .new-works       
    ul.works-list
      button.load-big(v-on:click="addNewWorkBlock")
        .load-big__icon-box
          svg-icon(:className="'load__icon'" :iconName="'remove'")
        .load__text Добавить работу  
      li.change-block.change-block--work(v-for="work in works" :key="work.id")
        work-edit(:workItem="formData")
  
</template>

<script>
import svgIcon from "../elements/svg-icon.vue";
import { Validator } from "simple-vue-validator";
import $axios from "@/requests.js";

export default {
  data() {
    return {
      formData: {
        title: "",
        link: "",
        description: "",
        techs: [],
        photo: ""
      },
      isError: false,
      filePreview: "",
      works: []
    };
  },
  components: {
    svgIcon: () => import("../elements/svg-icon"),
    workEdit: () => import("../elements/work-edit.vue")
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
      const formData = new FormData();
      Object.keys(this.formData).forEach(key => {
          formData.append(key, this.formData[key]);
      }),
      $axios.post('/works', formData).then(response => {
        console.log(response.data);
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
      });
    },
    fetchWorks() {
      $axios.get('/works/182').then(response => {
        this.works = response.data
      })
    },
    addNewWorkBlock(formData) {
      this.works.push(formData)
    },
    createWorkBlock() {
      $axios.post('/works', {
        title: this.formData.title,
        techs: this.formData.techs,
        photo: this.formData.photo,
        link: this.formData.link,
        description: this.formData.description
      }).then(response => {
        this.works.unshift(response.data)
      });
    },
    cancelCreateWorkBlock() {
      $axios.post('/works', {
        title: "",
        techs: "",
        photo: "",
        link: "",
        description: ""
      })
    }  
  },
  validators: {
    "formData.title": function(value) {
      return Validator.value(value).required("Введите имя");
    },
    "formData.link": function(value) {
      return Validator.value(value).required("Введите ссылку");
    },
    "formData.description": function(value) {
      return Validator.value(value).required("Введите описание");
    },
    "formData.techs": function(value) {
      return Validator.value(value).required("Введите тэги");
    }
    ,
    "formData.photo": function(value) {
      return Validator.value(value).required("Загрузите изображение");
    }
  },
  created() {
    this.fetchWorks()
  }
};
</script>

<style src="../styles/works.pcss">

</style>
