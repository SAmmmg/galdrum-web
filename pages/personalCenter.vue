<template>
    <div class="main">
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
if (!route.matched[1]) {
    navigateTo("/PersonalCenter/main");
}
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    background-color: #1d1c1b;
    // padding-top: 60px;
    // padding: 80px 20px 20px;
}
</style>
