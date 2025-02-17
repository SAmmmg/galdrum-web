<template>
    <AppHeader></AppHeader>
    <div class="app-main" style="">
        <NuxtPage />
    </div>
    <AppFooter></AppFooter>
</template>

<script lang="ts" setup>
// console.log(window);
onBeforeMount(() => {
    console.log(isMobile() ? "移动端" : "PC端");
});
onMounted(() => {
    let fonts = [
        { name: "AlexBrush-Regular", url: "/font/AlexBrush-Regular.ttf" },
        { name: "Ballpark Weiner", url: "/font/Ballpark Weiner.otf" },
        { name: "Cooper Regular", url: "/font/Cooper Regular.ttf" },
        { name: "HarringtON", url: "/font/HarringtON.TTF" },
        { name: "Old English", url: "/font/Old English.ttf" },
        { name: "Sofia-Regular", url: "/font/Sofia-Regular.otf" },
        { name: "Stencil", url: "/font/Stencil.ttf" },
        { name: "engravers_t", url: "/font/engravers_t.ttf" },
        { name: "gabriola", url: "/font/gabriola.ttf" },
        { name: "honey_script_semibold", url: "/font/honey_script_semibold.ttf" },
    ];

    fonts.forEach(e => {
        let font = new FontFace(e.name, `url('${e.url}')`);
        font.load()
            .then(loadedFont => {
                document.fonts.add(loadedFont);
            })
            .catch(err => {
                console.log(e);
                console.log(err);
            });
    });
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
@import url(../app.scss);

.app-main {
    // margin-top: 60px;
    padding-top: 60px;
    // padding-bottom: 350px;
    // min-height: calc(100vh - 350px);
    // box-sizing: content-box;
}
</style>
<style lang="scss">
@media screen and (max-width: 960px) {
    .app-main {
        padding-top: 40px;
    }
}
</style>
