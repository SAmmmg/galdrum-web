<template>
    <div class="blank pt-[40px] bg-[#fefcf8]">
        <iframe v-if="show" id="iframe" :src="src" @load="load" frameborder="0" class="box" />
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
    src.value = `https://wp.cymmc.top/product/drumstick/?attribute_style=two&yith_wapo_value=${route.query.uuid}`;
    show.value = true;
});
function load() {
    let iframe = document.getElementById("#iframe");
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
}
</script>
<style scoped lang="scss">
.box {
    height: 100vh;
    width: 100%;
}
</style>
