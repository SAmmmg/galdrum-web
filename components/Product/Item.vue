<template>
    <div class="product-item">
        <img src="/image/bao.png" alt="" />
        <p class="product-title">可水洗的收纳袋，加厚无异味 防潮防尘</p>
        <p class="product-price">
            <span>HK$150</span>
            <small>$160</small>
        </p>
        <p>
            <CustomBtn txt="去购买" :active="true" />
        </p>
    </div>
    <!-- <ul class="product-item">
        <li v-for="el in 4" :key="el"></li>
    </ul> -->
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
// .product-item {
//     display: flex;
//     gap: 20px;
//     flex-wrap: wrap;
//     li {
//     }
// }
.product-item {
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
</style>
