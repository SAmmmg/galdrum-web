<template>
    <div class="min-h-[calc(100vh-40px)] h5:p-[16px] pc:px-[15vw] pc:py-[40px] flex-col pc:bg-[#f5f1ec]">
        <h5-Back class="bg-white pc:hidden" title="" />
        <p class="text-center text-[20px] pc:text-[36px] pc:font-bold my-[20px]">我要留言</p>

        <div
            class="rounded-[10px] overflow-hidden mb-[20px]"
            style="border: 2px solid var(--main-color-3); --van-field-text-area-min-height: 160px"
        >
            <van-field class="rounded-[10px] bg-[#fffcf8]" type="textarea" placeholder="请填写您的留言内容" />
        </div>

        <div class="rounded-[10px] overflow-hidden mb-[20px]" style="border: 2px solid var(--main-color-3)">
            <van-field class="rounded-[10px] bg-[#fffcf8]" placeholder="请填写您联系电话/邮箱地址" />
        </div>
        <CustomBtn class="w-full pc:h-[44px] pc:leading-[42px]" txt="确认留言" :active="true" />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
