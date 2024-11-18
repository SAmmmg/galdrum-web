<template>
    <div id="root-node" ref="rootNodeRef">
        <AppHeader></AppHeader>
        <div style="min-height: 50vh; background-color: white">
            <NuxtPage></NuxtPage>
        </div>
        <AppFooter></AppFooter>
    </div>
</template>

<script lang="ts" setup>
const rootNodeRef = ref<HTMLDivElement>();
// provide("lock", lock);
// function lock(bool: boolean) {
//     if (bool) {
//         rootNodeRef.value?.classList.add("lock");
//         // rootNodeRef.value?.style.width = "100vw";
//         // document.body.style.height = "100vh";
//         // document.body.style.overflow = "hidden";
//     } else {
//         rootNodeRef.value?.classList.remove("lock");
//         // document.body.style.width = "100vw";
//         // document.body.style.height = "100vh";
//         // document.body.style.overflow = "hidden";
//     }
// }
</script>

<style lang="scss">
@import url(./app.scss);

.lock {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
</style>
