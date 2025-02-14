<template>
    <div class="bg-[var(--main-color-3)]">
        <div class="bg-[var(--main-color-1)] text-white">
            <h5-Back class="p-[16px]" icon-color="white" title="提交订单" />
            <p class="pl-[30px] text-[20px] mb-[16px]">登待付款</p>
            <p class="pl-[30px] text-[#ccc]">请在15分钟内完成支付，超时预约单将自动取消</p>
        </div>

        <div class="flex items-center p-[16px] mb-[4px] bg-white">
            <van-icon name="location" size="22" color="#131313" />
            <div class="flex-[1] ml-[12px] mr-[18px]">
                <p>
                    <span class="text-[20px] font-black mr-[6px]">王小姐</span>
                    <span class="">18888888888</span>
                </p>
                <p class="text-[#666]">广东省 深圳市 南山区 桃源街道新视艺 创客公园B座602</p>
            </div>
            <van-icon name="arrow" size="22" color="#131313" @click="navigateTo('/myAddress')" />
        </div>

        <div class="flex items-center relative bg-white mb-[4px] p-[16px]">
            <img
                class="w-[120px] aspect-[1/1] object-cover rounded-[10px] mr-[10px]"
                style="border: 1px solid #999"
                src="/public/image/Group 622.png"
            />
            <div>
                <p class="font-bold text-[20px] mb-[4px]">玫红色鼓棒</p>
                <p>材质:山胡桃木；尺寸:5B；</p>
                <p class="mb-[4px]">左棒:蓝色/B区定制；右棒:蓝色/B区定制</p>
                <p class="flex items-center mj">
                    <span class="font-bold text-[20px] mr-[10px]">HK$150</span>
                    <span>满￥200-￥20</span>
                </p>
            </div>
        </div>

        <div class="p-[16px] mb-[4px] bg-white">
            <p>账单明细</p>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.mj {
    span:nth-of-type(2) {
        background-color: rgba($color: #ff0000, $alpha: 0.05);
        border: 1px solid #ff0000;
        border-radius: 4px;
        padding: 2px 6px;
        color: #ff0000;
    }
}
</style>
