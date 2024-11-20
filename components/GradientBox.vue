<template>
    <!-- 渐变边框盒子 -->
    <div class="gradient-box">
        <slot></slot>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.gradient-box {
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 16px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(to right, #1d1c1b, #1d1c1b), linear-gradient(119.71deg, rgba(184, 196, 255, 0.46) 3.65%, #1f2230 96.75%);
}
</style>
