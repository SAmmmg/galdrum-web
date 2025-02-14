<template>
    <div class="min-h-[calc(100vh-40px)] p-[16px] flex flex-col">
        <h5-Back class="bg-white" title="" />
        <p class="text-center text-[20px] my-[20px]">我要留言</p>

        <div
            class="rounded-[10px] overflow-hidden mb-[20px]"
            style="border: 2px solid var(--main-color-3); --van-field-text-area-min-height: 160px"
        >
            <van-field class="rounded-[10px] bg-[#fffcf8]" type="textarea" placeholder="请填写您的留言内容" />
        </div>

        <div class="rounded-[10px] overflow-hidden mb-[20px]" style="border: 2px solid var(--main-color-3)">
            <van-field class="rounded-[10px] bg-[#fffcf8]" placeholder="请填写您联系电话/邮箱地址" />
        </div>
        <CustomBtn class="w-full" txt="确认留言" :active="true" />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
