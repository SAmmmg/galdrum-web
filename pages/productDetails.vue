<template>
    <div class="product-details">
        <!-- pc -->
        <div class="product-box-pc">
            <div class="product-info">
                <img src="/image/Group 616.png" alt="" />
                <div class="flex flex-col">
                    <div class="title mb-[20px]">可水洗的收纳袋，加厚无异味防潮防尘</div>
                    <div class="mj mb-[20px]">
                        <span class="">满200-20</span>
                        <span>已售 242</span>
                    </div>

                    <div class="price p-[15px] rounded-[10px] mb-[20px]">
                        <p class="mb-[15px]">
                            <span class="mr-[10px]">价格</span>
                            <span class="mr-[10px] font-bold text-[18px]">HK$150</span>
                            <span class="line-through text-[#666]"> HK$160 </span>
                        </p>
                        <p>
                            <span class="mr-[10px]">邮费 </span>
                            <span>免邮费</span>
                        </p>
                    </div>

                    <div class="guige mb-[20px] flex">
                        <div class="label w-[80px]">产品规格</div>
                        <ul class="flex">
                            <li v-for="el in 3" class="mr-[10px]">
                                <img
                                    src="/public/image/Group 616.png"
                                    class="w-[80px] aspect-[1/1] border-[1px] border-solid border-[var(--main-color-1)] rounded-[8px]"
                                />
                                <p class="text-center mt-[5px]">印花紫</p>
                            </li>
                        </ul>
                    </div>

                    <div class="guige mb-[20px] flex">
                        <div class="label w-[80px]">数量</div>
                        <el-input-number v-model="num" :min="1" :max="10" />
                    </div>

                    <div class="flex mb-[20px]">
                        <div class="w-[120px] mr-[20px]">
                            <CustomBtn txt="立即购买" :active="true" />
                        </div>
                        <div class="w-[120px]">
                            <CustomBtn class="w-[60px]" txt="加入购物车" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-nav mt-[40px] mb-[30px] text-[20px]">
                <span class="mr-[20px] cursor-pointer" @click="type = '商品详情'" :class="{ active: type == '商品详情' }">商品详情</span>
                <span class="cursor-pointer" @click="type = '商品评价'" :class="{ active: type == '商品评价' }">商品评价</span>
            </div>

            <!-- 商品详情 -->
            <div v-show="type == '商品详情'">
                <img class="w-100%" src="/public/image/Rectangle 234.png" />
            </div>
            <!-- 商品评价 -->
            <div v-show="type == '商品评价'">
                <div v-for="el in 2" :key="el" class="mb-[30px]">
                    <Product-Comment />
                </div>
            </div>

            <div class="flex items-center mt-[40px] mb-[30px]">
                <span class="text-[28px]">你可能还喜欢</span>
                <img src="/public/image/Group 1000007036.png" class="h-[24px] ml-[10px] aspect-[1/1]" />
            </div>

            <div class="flex gap-[20px]">
                <Product-Item v-for="el in 4" :key="el" />
            </div>
        </div>

        <!-- h5 -->
        <div class="product-box-h5">
            <van-swipe :autoplay="6000" loop class="sw">
                <van-swipe-item><img src="/image/banner.png" alt="" /></van-swipe-item>
                <van-swipe-item><img src="/image/banner.png" alt="" /></van-swipe-item>
                <template #indicator="{ active, total }">
                    <div class="custom-indicator">
                        <span class="text-[14px]">{{ active + 1 }}</span>
                        <span>/{{ total }}</span>
                    </div>
                </template>
            </van-swipe>

            <div class="price px-[16px] py-[10px] mb-[4px]">
                <p class="mb-[8px]">
                    <span class="mr-[10px] font-bold text-[16px]">HK$150</span>
                    <span class="line-through text-[#666]"> HK$160 </span>
                </p>
                <p class="mb-[12px]">
                    <span class="text-[16px]">可水洗的收纳袋，加厚无异味防潮防尘</span>
                </p>
                <p class="mj">
                    <span class="">满200-20</span>
                    <span>已售 242</span>
                </p>
            </div>

            <van-cell-group class="mb-[4px]">
                <van-cell>
                    <template #title>
                        <span class="mr-[20px] text-[#666]">规格</span>
                        <span>玫红色 原木色</span>
                    </template>
                    <template #right-icon>
                        <van-icon class="leading-[24px]" name="arrow" />
                    </template>
                </van-cell>
                <van-cell>
                    <template #title>
                        <span class="mr-[20px] text-[#666]">运费</span>
                        <span>免运费（偏远地区除外）</span>
                    </template>
                    <template #right-icon>
                        <van-icon class="leading-[24px]" name="arrow" />
                    </template>
                </van-cell>
            </van-cell-group>

            <div class="product-comment px-[16px] py-[10px] bg-white">
                <p class="text-[16px]">用户评价</p>
                <van-swipe>
                    <van-swipe-item>
                        <div class="bg-[#f5f5f5] p-[12px] rounded-[10px]">
                            <p class="flex items-center">
                                <img class="w-[28px] mr-[10px]" src="/public/image/avatar.png" alt="" />
                                <span class="text-[16px]">小姐姐</span>
                                <span class="ml-auto text-[#999]">2024-09-21</span>
                            </p>
                            <p class="flex my-[12px] items-center">
                                <img v-for="el in 5" src="/public/image/Star1.png" alt="" />
                            </p>
                            <p>小姐姐人非常好，有耐心，认真仔细， 感谢!</p>
                        </div>
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const num = ref(1);
const type = ref<"商品详情" | "商品评价">("商品详情");

// const swiperRef = ref();
// const slides = ref(Array.from({ length: 10 }));
// const slide = ref(1);
</script>

<style lang="scss" scoped>
.product-details {
    background-color: var(--main-color-3);
}
// pc
.product-box-pc {
    padding: 30px 15vw;
    .product-info {
        display: flex;
        gap: 30px;

        & > img {
            width: 40%;
            border-radius: 20px;
            aspect-ratio: 1 / 1;
            object-fit: cover;
        }
        & > div {
            width: calc(60% - 30px);
            .title {
                font-size: 28px;
                font-weight: bold;
            }
            .mj {
                span:nth-child(1) {
                    background-color: rgba($color: #ff0000, $alpha: 0.05);
                    border: 1px solid #ff0000;
                    border-radius: 4px;
                    padding: 4px 6px;
                    color: #ff0000;
                }
                span:nth-child(2) {
                    margin-left: 15px;
                    color: #666;
                }
            }
            .label {
            }
            .price {
                background-color: rgba($color: #fff, $alpha: 0.7);
            }
        }
    }
    .product-nav {
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
}

// h5
.product-box-h5 {
    display: none;
}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    .product-box-pc {
        display: none;
    }
    .product-box-h5 {
        display: block;
    }
}

// h5
.product-box-h5 {
    background-color: var(--main-color-3);
    .sw {
        aspect-ratio: 375 / 300;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        .custom-indicator {
            position: absolute;
            right: 10px;
            bottom: 10px;
            padding: 2px 12px;
            border-radius: 20px;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.1);
            color: #fff;
        }
    }
    .product-comment {
    }
    .product-price {
        background-color: #fff;
        .mj {
            span:nth-child(1) {
                background-color: rgba($color: #ff0000, $alpha: 0.05);
                border: 1px solid #ff0000;
                border-radius: 4px;
                padding: 4px 6px;
                color: #ff0000;
            }
            span:nth-child(2) {
                margin-left: 15px;
                color: #666;
            }
        }
    }
}
</style>
