<template>
    <div class="flex items-center">
        <van-icon name="arrow-left" size="22" :color="iconColor ? iconColor : '#131313'" @click="router.back()" />
        <span class="text-[20px] font-black ml-[6px]">{{ title }}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    iconColor: {
        type: String,
        required: false,
    },
});
const router = useRouter();
</script>

<style lang="scss" scoped></style>
