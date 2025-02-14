<template>
    <div class="p-[16px] min-h-[calc(100vh-40px)] flex flex-col">
        <h5-Back class="mb-[20px]" title="我的地址" />
        <ul>
            <li v-for="el in 2" class="flex items-center bg-[#f5f5f5] rounded-[10px] p-[16px] mb-[16px]">
                <van-icon name="location" size="22" color="#131313" />
                <div class="flex-[1] ml-[12px] mr-[18px]">
                    <p>
                        <span class="text-[22px] font-black mr-[6px]">王小姐</span>
                        <span class="">18888888888</span>
                    </p>
                    <p>广东省 深圳市 南山区 桃源街道新视艺 创客公园B座602</p>
                </div>
                <van-icon name="edit" size="22" color="#131313" />
            </li>
        </ul>

        <div class="text-center">
            <img class="w-[60%] mx-[auto] mb-[20px]" src="/public/image/Group 1000007177@3x.png" />
            <span class="text-[18px]">暂无地址</span>
        </div>

        <CustomBtn class="mt-auto" txt="新增地址" :active="true" />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
