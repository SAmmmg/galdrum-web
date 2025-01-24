<template>
    <button class="custom-btn" :class="props.active ? 'active' : ''" @click="emits('click')">{{ props.txt || "文字" }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{
    active?: Boolean;
    txt?: String;
}>();
const emits = defineEmits(["click"]);
// const txt = defineModel({
//     type: String,
//     default: "文字",
// });
</script>

<style lang="scss" scoped>
.custom-btn {
    border: 1px solid var(--main-color-1);
    border-radius: 6px;
    background-color: #fff;
    height: 34px;
    line-height: 34px;
    text-align: center;
    cursor: pointer;
    width: 100%;
}
.active {
    color: #fff;
    background-color: var(--main-color-1) !important;
}
</style>
