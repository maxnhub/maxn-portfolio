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

        button.header__button Выйти
  .navigation
    .container
      ul.navigation__list
        li.navigation__item 
          a.navigation__link(href="#skills") Обо мне
        li.navigation__item 
          a.navigation__link(href="#works") Работы
        li.navigation__item 
          a.navigation__link(href="#feedback") Отзывы
  .main
    .container
      .block.block--skills
        .section-top
          .section-title Блок "Обо мне"
          button.add-group
            .add-icon 
              svg-icon(:className="admin__icon" :iconName="'remove'")
            .add-group-text Добавить группу
        .skills
          .change-block.change-block--skills
            .skills__add-name
              input.input__form(id="skills-group-name" type="text" name="group-name" placeholder="Название новой группы")
              .skills__buttons
                button.skills__button.skills__button--tick
                  svg-icon(:className="admin__icon" :iconName="'tick'") 
                button.skills__button.skills__button--remove
                  svg-icon(:className="admin__icon" :iconName="'remove'") 
            .skills__add-content
              .new-skill
                input.input__form(id="skill-name" type="text" name="name" placeholder="Новый навык")
                input.input__form(id="skill-percents" type="text" name="percents" placeholder="0")  
                .new-skill-buttons
                  button.skills__button.skills__button--pencil
                    svg-icon(:className="admin__icon" :iconName="'pencil'") 
                  button.skills__button.skills__button--trash
                    svg-icon(:className="admin__icon" :iconName="'trash'")

            .skills__add-row
              input.input__form(id="skill-name" type="text" name="name" placeholder="Новый навык")
              input.input__form(id="skill-percents" type="text" name="percents" placeholder="0")  
              button.add-icon 
                svg-icon(:className="admin__icon" :iconName="'remove'")
          .change-block.change-block--skills
        
        .works
          .change-block.change-block--works
            .change-block-title Добавление работы
            .works__field
              .works__drag
                .works__drag-desc Перетащите либо загрузите изображения
                button.load Загрузить
              .works__add
                form.works__form
                  label.input__subtext(for="works-name-id") Название
                  input.input__form(id="works-name-id" type="text" name="name")
                  label.input__subtext(for="works-link-id") Ссылка
                  input.input__form(id="works-link-id" type="text" name="link")
                  label.input__subtext(for="works-textarea-id") Описание
                  textarea.input__textarea(class="works-textarea" id="textarea-connect-id" name="textarea")
                  label.input__subtext(for="works-tag-id") Добавление тэга
                  input.input__form(id="works-tag-id" type="text" name="tag")
                  .block__buttons
                    button.cancel Отмена
                    button.load Загрузить

        .new-works
          button.load-big
            .load-big__icon-box
              svg-icon(:className="load__icon" :iconName="'remove'")
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
                button.fix-del__button.fix-del__button--fix 
                  .fix-del__button-text Править
                  .fix-del__icon.fix-del__icon--fix
                    svg-icon(:className="admin__icon" :iconName="'pencil'")
                button.fix-del__button.fix-del__button--delete 
                  .fix-del__button-text Удалить
                  .fix-del__icon.fix-del__icon--delete
                    svg-icon(:className="admin__icon" :iconName="'remove'")

        .feedback
          .change-block.change-block--feedback
            .change-block-title Добавить отзыв 
            .feedback__field
              .feedback__visual
                .feedback__avatar
                  .feedback__avatar-icon
                    svg-icon(:className="admin__icon" :iconName="'user'")
                button.add-avatar Добавить фото
              .feedback__desc
                form.feedback__forms
                  .feedback__desc-row
                    .feedback__desc-item
                      label.input__subtext(for="feedback-name-id") Имя автора
                      input.input__form(id="feedback-name-id" type="text" name="author-name")
                    .feedback__desc-item
                      label.input__subtext(for="feedback-position-id") Титул автора
                      input.input__form(id="feedback-position-id" type="text" name="author-position")
                  .feedback__desc-item.feedback__desc-item--textarea
                    label.input__subtext(for="feedback-textarea-id") Отзыв
                    textarea.input__textarea(class="feedback-textarea" id="textarea-feedback-id" name="feedback-textarea")
                  .block__buttons
                    button.cancel Отмена
                    button.load Загрузить
        .new-feedback
          button.load-big
            .load-big__icon-box
              svg-icon(:className="load__icon" :iconName="'remove'")
            .load__text Добавить работу
          .change-block.change-block--feedback
            .change-block-title.change-block-title--new-feedback
              .new-feedback__visual
              .new-feedback__desc
                .new-feedback__author Имя Фамилия
                .new-feedback__author-position Программист
            .new-feedback-text Данный план является примерным ориентиром. Вы всегда можете работать в удобном для себя темпе. Оптимальное время, которое мы рекомендуем выделять на обучение: 32-34 часа в неделю.
            .fix-del__buttons.fix-del__buttons--feedback
              button.fix-del__button.fix-del__button--fix 
                .fix-del__button-text Править
                .fix-del__icon.fix-del__icon--fix
                  svg-icon(:className="admin__icon" :iconName="'pencil'")
              button.fix-del__button.fix-del__button--delete 
                .fix-del__button-text Удалить
                .fix-del__icon.fix-del__icon--delete
                  svg-icon(:className="admin__icon" :iconName="'remove'")







</template>


<style>
body {
  margin: 0;
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
  }
}

.navigation {
  display: flex;
  align-items: center;
  margin-top: 70px;

  &__list {
    display: flex;
    height: 70px;
    margin: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 30px;
    padding: 0 20px;
    border-bottom: 3px solid transparent;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: #383ace;
      border-bottom: 3px solid #383ace;
    }
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

.add-group {
  display: flex;
  align-items: center;
  color: #383ace;
  font-size: 24px;
  font-weight: 700;
  background: transparent;
  outline: none;

  & .add-icon {
    width: 20px;
    height: 20px;

    & .admin__icon {
      width: 8px;
      height: 8px;
      transform: rotate(45deg) translate(-65%, -65%);
    }
  }

  & .add-group-text {
    padding-left: 20px;
  }
}

.skills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  margin-bottom: 85px;

  &__add-name {
    grid-area: name;
    padding: 0 10px 30px;
    display: flex;
    border-bottom: 1px solid #a7aaaf;
    justify-content: space-between;
  }
}

#skills-group-name {
  width: 70%;
}

.skills__add-name-icons {
  display: flex;
  align-items: center;
}

.skills__add-content {
  grid-area: content;
}

.skills__add-row {
  grid-area: row;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  & .input__form {
    margin-right: 30px;
  }
}

.new-skill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;

  & .input__form {
    border-bottom: 1px solid transparent;

    &:focus {
      border-bottom: 1px solid black;
    }

  }

  & #skill-name {
    margin-right: 30px;
    width: 60%;
  }

  & .skills__button {
    fill: #a0a5b1;
  }
}

.skills__button {
  width: 30px;
  height: 30px;

  &--tick {
    fill: green;
  }

  &--remove {
    fill: #c73034;
  }
}

.admin__icon {
  width: 15px;
  height: 15px;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
}

#skill-percents {
  width: 10%;
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
}

.change-block {
  box-shadow: 0 0 15px 2px rgba(122, 122, 122, 0.3);
  padding: 30px;

  &--skills {
    flex: 1;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    grid-gap: 20px;
    grid-template-areas: 
    "name"
    "content"
    "row";
  }

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
  padding: 80px 0;
  grid-area: drag;

  &-desc {
    color: #424d63;
    font-size: 18px;
    font-family: "OpenSans", Helvetica, sans-serif;
    font-weight: 700;
    width: 50%;
    text-align: center;
    margin-bottom: 35px;
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

}

.input__textarea {
  border: 1px solid#a7aaaf;
  height: 140px;
  resize: none;
  margin-bottom: 35px;
}

.input__subtext {
  padding-bottom: 10px;
}

.works__add {
  grid-area: add;
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
  padding: 20px 10px;
  text-transform: uppercase;
  width: 35%;
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
}

.load-big__icon-box {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  fill: white;
  border: 2px solid white;

  & .admin__icon {
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
  background: url(../images/content/2.jpg) center center / cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 45px;
  padding-bottom: 10px;
  padding-right: 10px;
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
}

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
}

.feedback__avatar-icon {
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

  &__visual {
    background: url(../images/content/feed3.png) center center / cover no-repeat;
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



</style>

<script>
import svgIcon from "./elements/svg-icon.vue";

export default {
  components: {
    svgIcon: () => import("./elements/svg-icon")
  }
};
</script>