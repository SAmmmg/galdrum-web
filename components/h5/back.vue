<template>
    <div class="flex items-center">
        <van-icon name="arrow-left" size="22" color="#131313" @click="router.back()" />
        <span class="text-[20px] font-black ml-[6px]">{{ title }}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
});
const router = useRouter();
</script>

<style lang="scss" scoped></style>
