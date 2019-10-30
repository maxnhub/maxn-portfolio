<template lang="pug">
.popup__field
    .popup
        button.popup__exit(href="#" v-on:click="hidePopup" type="button")
            .popup__exit-stick
        .popup__title Авторизация
        form.popup__desc(@submit.prevent="submitFormLogin")
            .popup__desc-item
                .popup__icon
                    svg-icon(:className="'admin__icon'" :iconName="'user'")
                label.input__subtext(for="login-id") Логин
                    span.error.error--login(v-if="isError") {{ this.validation.firstError('formLogin.user') }}
                input.input__form(v-model="formLogin.user" id="login-id" type="text" name="login")
            .popup__desc-item
                .popup__icon
                    svg-icon(:className="'admin__icon'" :iconName="'key'")
                label.input__subtext(for="password-id") Пароль
                    span.error.error--login(v-if="isError") {{ this.validation.firstError('formLogin.password') }}
                input.input__form(v-model="formLogin.password" id="password-id" type="password" name="password")
            .popup__button
                button.load Отправить
</template>

<script>
import { Validator } from "simple-vue-validator";
import svgIcon from "../elements/svg-icon.vue";
import axios from 'axios';

const baseUrl = "https://webdev-api.loftschool.com/";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE4M…5TIn0.kwXiPQ6d3Dc-4YaQhxxMOvQXoslDiw83g5G7DembkFQ";

export default {
    data() {
        return {
            formLogin: {
                user: "",
                password: ""
            },
            isError: false
        }
    },
    components: {
        svgIcon: () => import("../elements/svg-icon")
    },
    methods: {
        hidePopup() {
            this.$emit('close-popup')
        },
        submitFormLogin() {
            axios.post(baseUrl + '/login', {
                name: this.formLogin.user,
                password: this.formLogin.password
            }).then(response => {
                console.log(response.data),
                this.$emit('close-popup')
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
        "formLogin.user": function(value) {
            return Validator.value(value).required("Введите имя");
        },
        "formLogin.password": function(value) {
            return Validator.value(value).required("Введите пароль");
        }
    }
}
</script>

<style>
.error--login {
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