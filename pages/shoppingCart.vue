<!-- <template>
    <div class="min-h-[calc(100vh-40px)] bg-[var(--main-color-3)] flex flex-col">
        <h5-Back class="bg-white p-[16px]" title="购物车" />

        <ul>
            <li v-for="el in 3" class="flex items-center relative bg-white mb-[4px] p-[16px]">
                <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
                <img
                    class="w-[120px] aspect-[1/1] object-cover rounded-[10px] mx-[10px]"
                    style="border: 1px solid #999"
                    src="/public/image/Group 622.png"
                />
                <div>
                    <p class="font-bold text-[20px] mb-[4px]">玫红色鼓棒</p>
                    <p>材质:山胡桃木；尺寸:5B；</p>
                    <p class="mb-[4px]">左棒:蓝色/B区定制；右棒:蓝色/B区定制</p>
                    <p class="mb-[4px] mj">
                        <span>满￥200-￥20</span>
                    </p>
                    <p class="font-bold text-[20px]">
                        <span>HK$150</span>
                    </p>
                </div>
                <div class="absolute top-[16px] right-[16px] bg-[#f5f5f5] px-[4px] py-[2px] text-[#666]">×1</div>
                <van-button class="absolute bottom-[26px] right-[16px]" type="default" size="small" round>修改规格</van-button>
            </li>
        </ul>

        <div class="fixed-bottom">
            <van-checkbox v-model="checked" icon-size="16px">全选</van-checkbox>
            <span class="ml-auto text-[#666]">已选两件</span>
            <span>总计：<span class="text-[16px] font-bold">HK$150</span></span>
            <button class="h-full text-white bg-[var(--main-color-1)] leading-[60px] px-[40px] mt-[-1px]">结算</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const checked = ref();

// const
</script>

<style lang="scss" scoped>
.fixed-bottom {
    display: flex;
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    align-items: center;
    background-color: white;
    border-top: 1px solid var(--main-color-3);
    padding-left: 20px;
    gap: 10px;
    z-index: 1010;
}
.mj {
    span {
        background-color: rgba($color: #ff0000, $alpha: 0.05);
        border: 1px solid #ff0000;
        border-radius: 4px;
        padding: 2px 6px;
        color: #ff0000;
    }
}
</style> -->

<template>
    <div class="blank">
        <iframe src="https://wp.cymmc.top/product/drumstick/" frameborder="0" class="box" </iframe>
    </div>
</template>
<style scoped lang="scss">
// .blank {
    // padding: 0px 150px
//}
.box{
    height: 100vh;
    width: 100%;
}
@media screen and (max-width: 768px) {
    // .blank {
    //     padding: 0px;
    // }
}
</style>