<template lang="pug">
div
  header.header
    .container
      .header__content
        .header__person
          .header__visual
            img.header__avatar(src="../images/content/user.jpg")
          .header__name Максим Никульников
          .header__goal Панель администрирования
          button(type="button" @click="isPopup=true").header__button Авторизоваться

        button.header__button(type="button") Выйти
  navigation
  .main
    .container
      about
    .container  
      works
    .container
      feedback
  popup(v-if="isPopup" @close-popup="isPopup=false")

include ../views/common/mixins.pug
</template>

<script>
import svgIcon from "./elements/svg-icon.vue";


export default {
  data() {
    return {
      isPopup: false
    }
  },
  components: {
    svgIcon: () => import("./elements/svg-icon"),
    works: () => import("./pages/works"),
    feedback: () => import("./pages/feedback"),
    about: () => import("./pages/about"),
    navigation: () => import("./elements/navigation"),
    popup: () => import("./pages/popup")
  }

};
</script>


<style lang="postcss">
html {
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
}
body,
html {
  height: 100%;
}
body {
  margin: 0;
  font-size: 16px;
}
button {
  border: 0;
  cursor: pointer;
}
* {
  box-sizing: border-box;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
p {
  margin: 0;
  padding: 0;
}
button {
  cursor: pointer;
  background: transparent;
  outline: 0;
}
a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}
img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
.wrapper {
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #a7aaaf;
}
.container {
  margin: 0 auto;
  max-width: 1500px;
  width: 95%;
}
.header {
  display: flex;
  align-items: center;
  background: #424268;
  height: 70px;
  position: absolute;
  top: 0;
  width: 100%;
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__person {
    display: flex;
    align-items: center;
  }
  &__visual {
    margin-right: 50px;
  }
  &__avatar {
    max-height: 50px;
    max-width: 50px;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50% 50%;
    background-position: 85% 50%;
  }
  &__name {
    font-family: OpenSans, Helvetica, sans-serif;
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    margin-right: 30px;
  }
  &__button {
    border: 0;
    cursor: pointer;
    background-color: transparent;
    text-decoration: underline;
    color: white;
    &:hover {
      color: #457df5;
    }
  }
  &__goal {
    margin-right: 30px;
  }
}

.main {
  background: #f8f9fd;
  padding: 65px 0;
}
.block {
  margin-bottom: 80px;
}
.section-top {
  display: flex;
  margin-bottom: 60px;
}
.section-title {
  font-family: "OpenSans", Helvetica, sans-serif;
  font-size: 37px;
  color: #333c49;
  font-weight: bold;
  margin-right: 50px;
}




.admin__icon {
  width: 15px;
  height: 15px;
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
}

.add-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(to right, #1756e1 35%, #3f35cb 50%);
  fill: white;
  & .admin__icon {
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
  }
  &:hover {
    background: linear-gradient(to right, #af45f5 35%, #b70efa 50%);
  }
}
.change-block {
  box-shadow: 0 0 15px 2px rgba(122, 122, 122, 0.3);
  padding: 30px;
  &-title {
    padding: 30px 10px 30px;
    display: flex;
    border-bottom: 1px solid #a7aaaf;
    justify-content: space-between;
    color: #424d63;
    font-size: 18px;
    font-family: "OpenSans", Helvetica, sans-serif;
    font-weight: 700;
    margin-bottom: 30px;
    &--new-feedback {
      padding: 0 0 30px 0;
      justify-content: flex-start;
      grid-area: author;
    }
  }
  &--feedback {
    display: grid;
    grid-template-rows: 100px auto 70px;
    grid-gap: 20px;
    grid-template-areas: 
    "author"
    "text"
    "buttons";
  }
}

.input__form {
  font-size: 18px;
  font-weight: 600;
  border: 1px solid transparent;
  border-bottom: 1px solid black;
  outline: none;
  background: none;
  padding: 10px 0;
  color: #424d63;
  &::placeholder {
    position: relative;
    font-size: 18px;
    font-weight: 600;
    color: #a7aaaf;
  }

  &:focus {
    border-bottom: 1px solid #1756e1;
  }
}
.input__textarea {
  border: 1px solid#a7aaaf;
  height: 140px;
  resize: none;
  margin-bottom: 35px;
}
.input__subtext {
  padding-bottom: 10px;
  position: relative;
}
.works__add {
  grid-area: add;
}
.block__buttons {
  display: flex;
}
.works__buttons {
  display: flex;
  justify-content: flex-end;
}
.load {
  border-radius: 30px;
  background: linear-gradient(to right, #1756e1 35%, #3f35cb 50%);
  color: white;
  font-size: 18px;
  font-family: "OpenSans", Helvetica, sans-serif;
  font-weight: 700;
  padding: 20px 25px;
  text-transform: uppercase;
  &:hover {
    background: linear-gradient(to right, #cb89f7 25%, #b70efa 50%);
  }
}
.load-big {
  background: linear-gradient(to right, #1756e1 35%, #3f35cb 50%);
  color: white;
  font-size: 17px;
  font-family: "OpenSans", Helvetica, sans-serif;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  &:hover {
    background: linear-gradient(to right, #cb89f7 25%, #b70efa 50%);
  }
}
.load-big__icon-box {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  fill: white;
  border: 2px solid white;
  & .load__icon {
    width: 50px;
    height: 50px;
    transform: translate(0%, 90%) rotate(45deg);
  }
}
.load__text {
  padding-top: 35px;
}
.cancel {
  color: #383ace;
  font-size: 18px;
  font-family: "OpenSans", Helvetica, sans-serif;
  font-weight: 700;
  padding: 20px 40px;
  margin-right: 30px;
  &:hover {
    color: #cb89f7;
  }
}




.fix-del__buttons {
  display: flex;
  justify-content: flex-end;
  padding-top: 25px;
  align-items: center;
  &--feedback {
    grid-area: buttons;
  }
}
.fix-del__icon {
  width: 25px;
  height: 25px;
  &--fix {
    fill: #383ace;
  }
  &--delete {
    fill: #c73034;
  }
  & .admin__icon {
    width: 20px;
    height: 20px;
  }
}
.fix-del__button {
  display: flex;
  align-items: center;
  &-text {
    color: #a7aaaf;
    font-size: 18px;
    font-family: "OpenSans", Helvetica, sans-serif;
    margin-right: 20px;
  }
  &:hover {
    & .fix-del__button-text {
      color: #d4d6d8;
    }
    & .fix-del__icon--fix {
      fill: #af45f5;
    }
    & .fix-del__icon--delete {
      fill: #ec3a40;
    }
  }
}

.popup__field {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../images/content/trainfull-popup.png) center center / cover no-repeat; 
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacitu: 0.4;
}
.popup {
  background: #fff;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  z-index: 10;
  padding: 60px 75px;
  &__title {
    color: #424d63;
    font-size: 18px;
    font-family: "OpenSans", Helvetica, sans-serif;
    font-weight: 700;
    text-align: center;
  }
  &__desc-item {
    padding: 30px 0px;
    position: relative;
    display: flex;
    flex-direction: column;
    & .input__subtext {
      padding-left: 40px;
      padding-bottom: 0;
    }
    & .input__form {
      padding: 10px 0 10px 40px;
    }
  }
  &__icon {
    fill: #a7aaaf;
    width: 20px;
    height: 20px;
    & .admin__icon {
      width: 25px;
      height: 25px;
      position: absolute;
      left: 0;
      bottom: 35%;
    }
  }
  &__exit {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    &-stick {
      transform:rotate(50deg);
      &, &:after {
        background: #ec8468;
        width: 1.5rem;
        height: 0.3125rem;
        border-radius: 0.1875rem;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        transform:rotate(80deg);
        bottom: 0;
      }
    }
  }
  &__button {
    display: flex;
    justify-content: center;
  }
}
</style>