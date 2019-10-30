<template lang="pug">
.navigation
    .container
      ul.navigation__list
        li.navigation__item 
          a.navigation__link(href="#skills") Обо мне
        li.navigation__item 
          a.navigation__link(href="#works") Работы
        li.navigation__item 
          a.navigation__link(href="#feedback") Отзывы   
</template>

<script>
export default {
    
}
</script>

<style>
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
</style>