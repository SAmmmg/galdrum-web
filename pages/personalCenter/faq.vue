<template>
    <div class="flex-[1] bg-[#fcfbf9] rounded-[10px] p-[20px]">
        <p class="font-bold text-[24px]">常见问题</p>

        <ul>
            <li v-for="(el, idx) in 3" class="border-[1px] border-solid border-[#D6D6D6] rounded-[10px] bg-[#f5f1ec] p-[20px] mt-[20px]">
                <div class="mb-[4px] text-[18px] relative">
                    <span>问：Gal drum的订单如何配送?</span>
                    <img
                        v-show="!list[idx]"
                        @click="list[idx] = !list[idx]"
                        class="absolute right-0 top-0 w-[20px] cursor-pointer"
                        src="/public/image/Group 1000007416@2x.png"
                    />
                    <img
                        v-show="list[idx]"
                        @click="list[idx] = !list[idx]"
                        class="absolute right-0 top-0 w-[20px] cursor-pointer"
                        src="/public/image/Group 1000007417@2x.png"
                    />
                </div>

                <el-collapse-transition>
                    <p class="text-[#999]" v-show="list[idx]">
                        答：Gal
                        drum会根据顾客所在地和商品的尺寸重量优选物流配送商，确保优质用户体验。目前暂不支持自选快递，具体物流信息可在下单成功后“我的订单”中查看。
                    </p>
                </el-collapse-transition>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const list = ref([false, false, false]);
</script>

<style scoped></style>
