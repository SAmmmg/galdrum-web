<template>
    <div class="min-h-[calc(100vh-40px)] flex flex-col">
        <h5-Back class="p-[16px] bg-white" title="我的用户名" />
        <van-cell-group>
            <van-field v-model="name" placeholder="昵称">
                <template #extra>
                    <span class="ml-[10px]">AAD更好</span>
                </template>
            </van-field>
        </van-cell-group>
    </div>
</template>

<script setup lang="ts">
const name = ref();
</script>

<style lang="scss" scoped></style>
