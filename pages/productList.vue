<template>
    <div class="product-list">
        <swiper-container class="sw3" ref="swiperRef3">
            <swiper-slide v-for="(slide, idx) in slides" :key="idx">
                <img src="/image/banner.png" alt="" />
            </swiper-slide>
        </swiper-container>

        <!-- pc -->
        <div class="product-box-pc">
            <p class="title">鼓棒</p>

            <ul class="product-item">
                <li v-for="el in 4" :key="el">
                    <img src="/image/bao.png" alt="" />
                    <p class="product-title">可水洗的收纳袋，加厚无异味 防潮防尘</p>
                    <p class="product-price">
                        <span>HK$150</span>
                        <small>$160</small>
                    </p>
                    <p>
                        <CustomBtn txt="去购买" :active="true" />
                    </p>
                </li>
            </ul>

            <p class="title">鼓包</p>

            <ul class="product-item">
                <li v-for="el in 4" :key="el">
                    <img src="/image/bao.png" alt="" />
                    <p class="product-title">可水洗的收纳袋，加厚无异味 防潮防尘</p>
                    <p class="product-price">
                        <span>HK$150</span>
                        <small>$160</small>
                    </p>
                    <p>
                        <CustomBtn txt="去购买" :active="true" />
                    </p>
                </li>
            </ul>

            <p class="title">其他周边</p>

            <ul class="product-item">
                <li v-for="el in 4" :key="el">
                    <img src="/image/bao.png" alt="" />
                    <p class="product-title">可水洗的收纳袋，加厚无异味 防潮防尘</p>
                    <p class="product-price">
                        <span>HK$150</span>
                        <small>$160</small>
                    </p>
                    <p>
                        <CustomBtn txt="去购买" :active="true" />
                    </p>
                </li>
            </ul>
        </div>

        <!-- h5 -->
        <div class="product-box-h5">
            <div class="product-nav">
                <el-icon color="#000" @click="navigateTo('/')"><ArrowLeftBold /></el-icon>
                <span class="active">全部</span>
                <span>鼓棒</span>
                <span>鼓包</span>
                <span>周边</span>
            </div>

            <ul class="product-item">
                <li v-for="el in 4" :key="el">
                    <img src="/image/bao.png" alt="" />
                    <p class="product-title">可水洗的收纳袋，加厚无异味 防潮防尘</p>
                    <p class="product-price">
                        <span>HK$150</span>
                        <small>$160</small>
                    </p>
                    <p>
                        <CustomBtn txt="去购买" :active="true" />
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowLeftBold } from "@element-plus/icons-vue";

const slides = ref(Array.from({ length: 10 }));
</script>

<style lang="scss" scoped>
.product-list {
    background-color: var(--main-color-3);
    .product-box-pc {
        padding: 30px 15vw;
        .title {
            font-weight: bold;
            font-size: 28px;
            margin: 30px;
        }
    }
}
.product-item {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    li {
        width: calc((100% - 60px) / 4);
        background-color: #fff;
        padding: 0px 20px 10px;
        font-size: 1.2rem;
        & > img {
            width: 100%;
            object-fit: contain;
            margin-bottom: 10px;
            aspect-ratio: 10 / 8;
        }
        & > p {
            width: 100%;
            margin-bottom: 10px;
        }
        .product-price {
            span {
                font-family: "HarmonyOS Sans SC-Bold";
                font-weight: bold;
            }
            small {
                margin-left: 5px;
                color: #666666;
                text-decoration: line-through;
            }
        }
        .product-title {
            font-family: "黑体";
        }
    }
}

.product-box-h5 {
    padding: 20px;
    display: none;
    .product-nav {
        display: flex;
        font-size: 1.2rem;
        align-items: center;
        color: #666;
        margin-bottom: 20px;
        font-family: "Inter-Semi Bold";
        span {
            margin-left: 20px;
        }
        .active {
            font-size: 1.6rem;
            font-weight: bold;
            color: #000;
        }
    }
    .product-item {
        li {
            width: calc((100% - 20px) / 2);
        }
    }
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
</style>
