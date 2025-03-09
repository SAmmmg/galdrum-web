<template>
    <div class="flex-[1] overflow-hidden">
        <div class="relative mb-[20px]">
            <div class="order-nav text-[20px]">
                <template v-for="el in ['全部订单', '待付款', '待发货', '待收货', '已完成']">
                    <span class="mr-[20px] cursor-pointer" @click="type = el" :class="{ active: type == el }">{{ el }}</span>
                </template>
            </div>

            <div class="absolute right-0 bottom-0">
                <el-input class="search-ipt w-[240px]" placeholder="输入订单号搜索" :prefix-icon="Search" />
                <CustomBtn txt="搜索" class="h-[30px] leading-[28px] absolute right-[2px] bottom-[2px] w-[52px] rounded-[20px]" :active="true" />
            </div>
        </div>

        <div>
            <ul>
                <li v-for="el in 5" class="bg-[#fcfbf9] p-[2px] rounded-[10px] mb-[20px]">
                    <div class="bg-[#f5f1ec] rounded-[10px] flex items-center h-[40px] pl-[20px]">
                        <div class="w-1/3">下单时间：2022-12-21 19:30:02</div>
                        <div class="flex-[1]">订单号：3920392039</div>
                        <div class="w-1/5 text-red text-center">待付款</div>
                    </div>
                    <div class="flex items-center gap-[20px] pl-[20px] py-[20px]">
                        <img src="/image/qrcode.png" class="w-[140px]" />
                        <div class="w-[140px] flex flex-col justify-center">
                            <p class="text-[26px]">鼓棒定制</p>
                            <p>山胡桃木/5B</p>
                            <p>左棒：蓝色/B区定制</p>
                            <p>右棒：蓝色/B区定制</p>
                        </div>
                        <div class="flex-[1]">×1</div>
                        <div class="flex-[1] flex flex-col items-center justify-center">
                            <p class="text-[26px] font-bold">HK$150</p>
                            <p>免邮费</p>
                        </div>
                        <div class="w-1/5 flex flex-col items-center justify-center">
                            <CustomBtn class="mb-[20px] w-[80px]" txt="去付款" :active="true" />
                            <CustomBtn class="mb-[20px] w-[80px]" txt="查看详情" />
                            <p class="text-[#485FDE]">再次购买</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="flex items-center">
                <span>共 {{ 400 }} 条记录 第 {{ currentPage4 }} / {{ pageSize4 }} 页</span>
                <el-pagination
                    class="pagination"
                    v-model:current-page="currentPage4"
                    v-model:page-size="pageSize4"
                    :page-sizes="[10, 20, 30, 50]"
                    :disabled="disabled"
                    :background="background"
                    layout="prev,pager,next,sizes,jumper"
                    :total="400"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";

const type = ref<"全部订单" | "待付款" | "待发货" | "待收货" | "已完成" | string>("全部订单");

const currentPage4 = ref(4);
const pageSize4 = ref(10);
const background = ref(false);
const disabled = ref(false);

const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`);
};
</script>

<style lang="scss" scoped>
.order-nav {
    .active {
        font-size: 28px;
        font-weight: bold;
        position: relative;
        &::before {
            content: " ";
            width: 30px;
            height: 8px;
            border-radius: 20px;
            position: absolute;
            top: calc(100% + 2px);
            left: 50%;
            transform: translateX(-50%);
            background-color: black;
        }
    }
}
.search-ipt {
    height: 34px;
    :deep(.el-input__wrapper) {
        // background-color: #f5f1ec;
        border-radius: 20px;
        --el-input-border-color: white;
    }
}
.pagination {
    --el-pagination-button-height: 28px;
    --el-pagination-button-width: 28px;
    --el-pagination-border-radius: 4px;
    :deep(.el-select) {
        width: 100px;
    }
    :deep(.el-input__wrapper) {
        --el-input-height: 30px;
    }
    :deep(.el-select__wrapper) {
        min-height: 30px;
    }
    :deep(.el-pager) {
        gap: 5px;
        margin: 0 5px;
        .is-active {
            background-color: var(--main-color-1);
            color: white;
        }
    }
}
</style>
