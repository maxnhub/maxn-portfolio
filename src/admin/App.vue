<template lang="pug">

header.header
  .container
    .header__content
      .header__person
        .header__visual
          img.header__avatar(src="../images/content/user.jpg")
        .header__name Максим Никульников
        .header__goal Панель администрирования

      button.header__button Выйти

    .main-content
</template>

<style>
body {
  margin: 0;
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

</style>