<!-- 商品组件 -->
<template>
    <div class="item">
        <img src="/blue.png" alt="" />
        <div class="title">title</div>
        <div class="price">￥999</div>
        <div>
            <el-button type="primary" round size="small">立即购买</el-button>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.item {
    width: 100%;
    // height: 200px;
    display: flex;
    flex-direction: column;
    background-color: #f6f6f9;
    padding: 20px 20px 10px;
    border-radius: 20px;
    img {
        width: 100%;
        // height: 100%;
        height: 200px;
        object-fit: cover;
        margin-bottom: 10px;
    }
    & > div {
        margin-bottom: 10px;
    }
}
</style>
