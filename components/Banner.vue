<!-- banner轮播图 -->
<template>
    <el-carousel class="carousel" trigger="click" arrow="hover">
        <el-carousel-item v-for="item in 4" :key="item">
            <div class="item">
                <img src="/blue.png" alt="" />
            </div>
        </el-carousel-item>
    </el-carousel>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.item {
    width: 100%;
    height: 100%;
    background-color: #f6f6f9;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.carousel {
    :deep(.el-carousel__container) {
        height: 400px;
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
    .carousel {
        :deep(.el-carousel__container) {
            height: 200px;
        }
    }
}
</style>
