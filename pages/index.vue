<template>
    <div>
        Songti TC <br />
        HarmonyOS Sans SC
    </div>
    <div style="height: 200vh" @click="drawerShow = true"></div>
    <el-drawer v-model="drawerShow" direction="btt" :with-header="false" :z-index="1000" :append-to-body="false" :show-close="false">
        wcc
    </el-drawer>
</template>

<script lang="ts" setup>
let drawerShow = ref(false);
</script>

<style lang="scss" scoped></style>
