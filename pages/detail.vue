<template>
    <div class="blank">
        <iframe v-if="show" :src="src" frameborder="0" class="box" />
    </div>
</template>
<script setup>
const props = defineProps({
    url: {
        type: String,
        default: "",
    },
});
const route = useRoute();
const src = ref("");
const show = ref(false);
onMounted(() => {
    src.value = `https://wp.cymmc.top/product/drumstick/?attribute_pa_style=two&yith_wapo_value=${route.query.uuid}`;
    show.value = true;
});
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
