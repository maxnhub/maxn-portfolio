<template lang="pug">
div
    .feedback
        .change-block-title Добавить отзыв 
        .feedback__field
            .feedback__visual
                .feedback__avatar
                    .feedback__avatar-icon
                        svg-icon(:className="'admin__icon'" :iconName="'user'")
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
                        button.cancel(type="button") Отмена
                        button.load Загрузить
    .new-feedback
        button.load-big
            .load-big__icon-box
                svg-icon(:className="'load__icon'" :iconName="'remove'")
            .load__text Добавить работу
        .change-block.change-block--feedback
            .change-block-title.change-block-title--new-feedback
                .new-feedback__visual
                .new-feedback__desc
                    .new-feedback__author Имя Фамилия
                    .new-feedback__author-position Программист
            .new-feedback-text Данный план является примерным ориентиром. Вы всегда можете работать в удобном для себя темпе. Оптимальное время, которое мы рекомендуем выделять на обучение: 32-34 часа в неделю.
            .fix-del__buttons.fix-del__buttons--feedback
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

export default {
    components: {
        svgIcon: () => import("../elements/svg-icon")
    }
}
</script>

<style>

</style>