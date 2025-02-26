<!-- 支付方式 -->
<template>
    <div class="bg-[#f5f1ec] px-[15vw] py-[40px] min-h-[80vh]">
        <div class="text-center font-bold text-[28px] mb-[40px]">选择支付方式</div>
        <ul class="flex gap-[20px] justify-center">
            <li
                @click="
                    show1 = true;
                    type = 'zfb';
                "
                class="bg-white rounded-[10px] p-[40px] w-[180px] flex flex-col items-center cursor-pointer"
            >
                <img src="/public/image/pay_zfb.png" class="w-[80px] mb-[20px]" />
                <span class="whitespace-nowrap">支付宝支付</span>
            </li>
            <li
                @click="
                    show1 = true;
                    type = 'wx';
                "
                class="bg-white rounded-[10px] p-[40px] w-[180px] flex flex-col items-center cursor-pointer"
            >
                <img src="/public/image/pay_wx.png" class="w-[80px] mb-[20px]" />
                <span class="whitespace-nowrap">微信支付</span>
            </li>
            <li @click="show = true" class="bg-white rounded-[10px] p-[40px] w-[180px] flex flex-col items-center cursor-pointer">
                <img src="/public/image/pay_xyk.png" class="w-[80px] mb-[20px]" />
                <span class="whitespace-nowrap">信用卡支付</span>
                <span class="whitespace-nowrap text-[12px] text-[#aaa]">Visa, Mastercard</span>
            </li>
        </ul>
    </div>

    <custom-popup v-model="show">
        <div class="p-[20px]">
            <div class="flex flex-col justify-start min-h-[50vh] relative pt-[20px] pb-[40px]">
                <!-- 密码登录 -->
                <p class="text-[28px] mb-[4px] font-bold">添加信用卡或借记卡</p>
                <p class="mb-[20px]">亚马逊支持主要信用卡和借记卡</p>
                <p class="mb-[8px]">卡号</p>
                <el-input class="custom-ipt mb-[20px]" placeholder="卡号" />
                <div class="flex items-center gap-[15px] mb-[20px]">
                    <div class="flex-[1]">
                        <p class="mb-[8px]">有效期</p>
                        <el-input class="custom-ipt" placeholder="月份/年份" />
                    </div>
                    <div class="flex-[1]">
                        <p class="mb-[8px]">安全码</p>
                        <el-input class="custom-ipt" placeholder="3或4位数字" />
                    </div>
                </div>
                <p class="mb-[8px]">卡上的姓名</p>
                <el-input class="custom-ipt mb-[20px]" placeholder="姓名" />
                <custom-btn class="mb-[10px] h-[40px] leading-[38px]" txt="继续" :active="true"></custom-btn>
                <p class="text-center">
                    <span class="text-[#485fde]">您的信息经过加密保护</span>
                </p>
            </div>
        </div>
    </custom-popup>

    <custom-popup v-model="show1" custom-class="w-[300px]">
        <div class="p-[20px] flex flex-col items-center">
            <img class="w-full mb-[20px] border-[1px] border-solid border-[#DDDDDD] rounded-[10px]" src="/image/qrcode.png" />
            <img v-if="type == 'zfb'" class="w-[100px]" src="/image/Group 1000007220@2x.png" />
            <img v-else class="w-[100px]" src="/public/image/Group 1000007221@2x.png" />
        </div>
    </custom-popup>
</template>

<script setup lang="ts">
const show = ref(false);
const show1 = ref(false);
const type = ref("zfb");
</script>

<style lang="scss" scoped></style>
