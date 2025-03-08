<template>
    <div class="blank">
        <iframe src="https://wp.cymmc.top/product/drumstick/" frameborder="0" class="box" </iframe>
    </div>
</template>
<script setup>
const props = defineProps({
    url: {
        type: String,
        default: ''
    }
})
// const url = ref('https://wp.cymmc.top/product/drumstick/')

</script>
<style scoped lang="scss">
// .blank {
// padding: 0px 150px
//}
.box {
    height: 100vh;
    width: 100%;
}

@media screen and (max-width: 768px) {
    // .blank {
    //     padding: 0px;
    // }
}
</style>