<template>
    <van-popup v-model:show="show" style="background: transparent; overflow-y: visible">
        <div class="bg-white rounded-[20px] wcnmd" :class="customClass ? customClass : 'w-[calc(100vw-40px)] max-w-[500px] '">
            <slot name="default"></slot>
        </div>
        <div v-if="showClose" class="mt-[20px] text-center">
            <van-icon class="cursor-pointer" name="close" size="30px" color="#fff" @click="onclose" />
        </div>
    </van-popup>
</template>

<script setup lang="ts">
const props = defineProps({
    closeBefore: {
        type: Function,
    },
    showClose: {
        type: Boolean,
        default: true,
    },
    customClass: {
        type: String,
    },
});
const show = defineModel({
    type: Boolean,
    default: false,
    required: true,
});

function onclose() {
    let needClose = true;
    if (props.closeBefore) {
        props.closeBefore(() => {
            needClose = false;
        });
    }

    if (needClose) show.value = false;
}
</script>

<style lang="scss" scoped></style>
