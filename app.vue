<template>
    <AppHeader></AppHeader>
    <div class="app-main" style="">
        <NuxtPage />
    </div>
    <AppFooter></AppFooter>
</template>

<script lang="ts" setup>
onBeforeMount(() => {
    console.log(isMobile() ? "移动端" : "PC端");
});
function isMobile() {
    const userAgentInfo = navigator.userAgent;
    const mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    const mobileFlag = mobileAgents.some(mobileAgent => {
        return userAgentInfo.indexOf(mobileAgent) > 0;
    });

    return mobileFlag;
}
</script>

<style lang="scss">
@import url(./app.scss);

.app-main {
    padding-top: 60px;
    padding-bottom: 20vh;
    min-height: 100vh;
}
</style>
