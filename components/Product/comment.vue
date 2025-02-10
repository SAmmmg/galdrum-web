<template>
    <div class="product-comment flex">
        <div class="mr-[15px]">
            <img class="w-[60px]" src="/public/image/avatar.png" />
            <p class="text-center">j****7</p>
        </div>
        <div>
            <p class="mb-[15px] text-[#666]">规格：印花紫</p>
            <p class="mb-[15px] text-[18px]">颜值好高，非常耐用，喜欢~</p>
            <div class="flex mb-[15px] gap-[15px]">
                <img class="h-100px" v-for="el in 4" src="/public/image/Group 622.png" />
            </div>
            <p class="text-[#666]">2024-09-09 23:20</p>
        </div>
        <div class="ml-auto flex gap-[4px]">
            <img class="h-[15px]" src="/public/image/Star1.png" alt="" />
            <img class="h-[15px]" src="/public/image/Star1.png" alt="" />
            <img class="h-[15px]" src="/public/image/Star1.png" alt="" />
            <img class="h-[15px]" src="/public/image/Star2.png" alt="" />
            <img class="h-[15px]" src="/public/image/Star3.png" alt="" />
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
