<template lang="pug">

    
            .block.block--skills
                .section-top
                    .section-title Блок "Обо мне"
                    button.add-group(v-on:click="showPopup")
                        .add-icon
                            svg-icon(:className="'admin__icon'" :iconName="'remove'")
                        .add-group-text Добавить группу
                .skills
                    .change-block.change-block--skills
                        .skills__add-name
                            input.input__form(id="skills-group-name" type="text" name="group-name" placeholder="Название новой группы")
                            .skills__buttons
                            button.skills__button.skills__button--tick
                                svg-icon(:className="'admin__icon'" :iconName="'tick'") 
                            button.skills__button.skills__button--remove
                                svg-icon(:className="'admin__icon'" :iconName="'remove'")
                        .skills__add-content
                            .new-skill
                                input.input__form(id="skill-added-name" type="text" name="name" placeholder="Новый навык")
                                input.input__form(id="skill-added-percents" type="text" name="percents" placeholder="0")  
                                .new-skill-buttons
                                    button.skills__button.skills__button--pencil
                                        svg-icon(:className="'admin__icon'" :iconName="'pencil'") 
                                    button.skills__button.skills__button--trash
                                        svg-icon(:className="'admin__icon'" :iconName="'trash'")
                        .skills__add-row
                            input.input__form(id="skill-name" type="text" name="name" placeholder="Новый навык")
                            input.input__form(id="skill-percents" type="text" name="percents" placeholder="0")  
                            button.add-icon 
                                svg-icon(:className="'admin__icon'" :iconName="'remove'")
                    .change-block.change-block--skills


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