<template lang="pug">
.popup__field
    .popup
        button.popup__exit(href="#" v-on:click="hidePopup" type="button")
            .popup__exit-stick
        .popup__title Авторизация
        .popup__desc
            .popup__desc-item
                .popup__icon
                    svg-icon(:className="'admin__icon'" :iconName="'user'")
                label.input__subtext(for="login-id") Логин
                input.input__form(id="login-id" type="text" name="login")
            .popup__desc-item
                .popup__icon
                    svg-icon(:className="'admin__icon'" :iconName="'key'")
                label.input__subtext(for="password-id") Пароль
                input.input__form(id="password-id" type="password" name="password")
            .popup__button
                button.load Отправить
</template>

<script>
export default {
    methods: {
        hidePopup() {
            this.isPopup = false
        }   
    }
}
</script>