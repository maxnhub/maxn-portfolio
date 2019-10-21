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
        .section-title Блок "Обо мне"
        .skills
          .change-block.change-block--skills
            .skills__add-name
              input.input__form(id="skills-group-name" type="text" name="name" placeholder="Название новой группы")
              .skills__add-name-icons
                .skills__add-name-icon
                  //- svg(id="add-name-tick" class="skills__icon" viewBox=tick.viewBox preserveAspectRatio="none")
                    //- use(xlink:href=tick.url)
                .skills__add-name-icon
                  //- svg(id="add-name-remove" class="skills__icon" viewBox=remove.viewBox preserveAspectRatio="none")
                    //- use(xlink:href=remove.url)

            .skills__add-content
            .skills__add-row
          .change-block.change-block--skills


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

button[type="button"] {
  cursor: pointer;
  background-color: transparent;
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
    font-family: OpenSans,Helvetica,sans-serif;
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
  align-items:center;
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

.section-title {
  font-family: 'OpenSans', Helvetica, sans-serif;
  font-size: 37px;
  color: #333c49;
  font-weight: bold;
  margin-bottom: 60px;
}

.skills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;

  &__add-name {
    padding: 0 10px 30px;
    display: flex;
    border-bottom: 1px solid #a7aaaf;
  }
}

.change-block {
  box-shadow: 0 0 15px 2px rgba(122,122,122,0.3);
  padding: 30px;

  &--skills {
    flex: 1;
  }
}

.input__form {
  border: 1px solid transparent;
  border-bottom: 1px solid black;
  outline: none;
  background: none;
  padding: 10px 0;
  width: 70%;

  &::placeholder {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px; 
    color: #a7aaaf;
  }
}

</style>