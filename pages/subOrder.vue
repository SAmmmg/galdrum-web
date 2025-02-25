<template>
    <div class="bg-[var(--main-color-3)]">
        <div class="bg-[var(--main-color-1)] text-white">
            <h5-Back class="p-[16px] header" icon-color="white" title="提交订单" />
            <p class="pl-[30px] text-[20px] mb-[16px]">登待付款</p>
            <p class="pl-[30px] text-[#ccc]">请在15分钟内完成支付，超时预约单将自动取消</p>
            <p class="h-[30px]"></p>
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
                <p class="text-[#666]">材质:山胡桃木；尺寸:5B；</p>
                <p class="mb-[4px] text-[#666]">左棒:蓝色/B区定制；右棒:蓝色/B区定制</p>
                <p class="flex items-center mj">
                    <span class="font-bold text-[20px] mr-[10px]">HK$150</span>
                    <span>满￥200-￥20</span>
                </p>
            </div>
        </div>

        <div class="p-[16px] mb-[4px] bg-white">
            <p class="text-[18px]">账单明细</p>
            <p class="flex justify-between text-[14px] h-[28px] items-center">
                <span class="text-[#13131380]">商品总价</span>
                <span>HK$150</span>
            </p>
            <p class="flex justify-between text-[14px] h-[28px] items-center">
                <span class="text-[#13131380]">商品总价</span>
                <span>HK$150</span>
            </p>
            <p class="flex justify-between text-[14px] h-[28px] items-center">
                <span class="text-[#13131380]">商品总价</span>
                <span>HK$150</span>
            </p>
            <div class="flex justify-between text-[14px] h-[28px] items-center">
                <span class="text-[#13131380]">支付方式</span>
                <ul class="flex items-center">
                    <template v-for="el in ['微信支付', '储值卡支付', '信用卡']">
                        <li class="ml-[5px] w-[20px] h-[20px] rounded-[50%] relative">
                            <div class="w-full h-full rounded-[50%] border-[1px] border-solid border-[#505764] absolute top-0 left-0 z-1"></div>
                            <div
                                class="w-[14px] h-[14px] rounded-[50%] bg-[#505764] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-2"
                            ></div>
                        </li>
                        <li class="ml-[5px]">{{ el }}</li>
                    </template>
                </ul>
            </div>
            <p class="flex justify-between text-[16px] h-[28px] items-center">
                <span class="">应付金额</span>
                <span class="font-bold">HK$150</span>
            </p>
        </div>

        <div class="p-[16px] mb-[4px] bg-white">
            <p class="text-[18px]">账单明细</p>
            <p class="flex justify-between text-[14px] h-[28px] items-center">
                <span class="text-[#13131380]">商品总价</span>
                <span>HK$150</span>
            </p>
        </div>
    </div>

    <div class="fixed-bottom">
        <el-badge :value="1">
            <el-icon :size="28" @click="drawerShow = true">
                <ShoppingCart />
            </el-icon>
        </el-badge>
        <span>合计：￥80</span>

        <div class="btns">
            <button>加入购物车</button>
            <button>立即购买</button>
        </div>

        <!--  -->
        <van-popup v-model:show="drawerShow" position="bottom" :z-index="1000" teleport="body" :style="{ paddingBottom: '60px' }">
            <div class="right global-custom-right">
                <div class="title">定制金额</div>
                <form action="#">
                    <p>
                        <label for="">山桃胡木</label>
                        <label for="">￥80</label>
                    </p>
                    <p>
                        <label for="">山桃胡木</label>
                        <label for="">￥80</label>
                    </p>
                    <p>
                        <label for="">数量</label>
                        <label for="">
                            <CustomNumberIpt />
                        </label>
                    </p>
                </form>
            </div>
        </van-popup>
    </div>
</template>

<script setup lang="ts">
import { ShoppingCart } from "@element-plus/icons-vue";

const drawerShow = ref(false);
</script>

<style lang="scss" scoped>
.header {
    :deep(span) {
        display: block;
        flex: 1;
        text-align: center;
    }
}
.mj {
    span:nth-of-type(2) {
        background-color: rgba($color: #ff0000, $alpha: 0.05);
        border: 1px solid #ff0000;
        border-radius: 4px;
        padding: 2px 6px;
        color: #ff0000;
    }
}
.fixed-bottom {
    display: flex;
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 60px;
    align-items: center;
    background-color: white;
    border-top: 1px solid #fffcf8;
    padding-left: 20px;
    gap: 10px;
    z-index: 1010;
    .btns {
        margin-left: auto;
        border: 1px solid var(--main-color-1);
        height: calc(100% + 1px);
        margin-top: -1px;
        button {
            font-size: 16px;
            border: none;
            height: 100%;
            padding: 0 20px;
        }
        & > button:nth-of-type(1) {
        }
        & > button:nth-of-type(2) {
            background-color: var(--main-color-1);
            color: white;
        }
    }
}
</style>
