<template lang="pug">
    svg(:class="className" viewBox="0 0 100 100" preserveAspectRatio="none")
        use(:xlink:href="'sprite.svg#'+iconName")
</template>

<script>
export default {
    props: {
        className: {
            type: String,
            default: "admin__icon"
        },
        iconName: String,
    },
}
</script>