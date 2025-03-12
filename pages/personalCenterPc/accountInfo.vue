<template>
    <div class="flex-[1] bg-[#fcfbf9] rounded-[10px] p-[40px]">
        <div class="flex items-center mb-[30px]">
            <span class="block w-[80px]">头像</span>
            <img class="w-[80px] aspect-1/1" src="/image/avatar.png" />
        </div>

        <div class="flex items-center mb-[30px]">
            <span class="block w-[80px]">用户ID</span>
            <span>{{ userInfo.id }}</span>
        </div>

        <div class="flex items-center">
            <span class="block w-[80px]">昵称</span>
            <span>{{ userInfo.name }}</span>
            <!-- <el-input class="custom-ipt w-[200px]" v-model="userInfo.name" /> -->
        </div>
    </div>
</template>

<script setup lang="ts">
// const name = "小溪小溪";
const userInfo = ref({
    id: "666",
    name: "小溪小溪",
});
onMounted(async () => {});
</script>

<style scoped></style>
