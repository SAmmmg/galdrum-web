<template>
    <div class="number-ipt">
        <img @click="num > 1 ? num-- : ''" src="/image/Group 308@2x.png" alt="" />
        <span>{{ num }}</span>
        <img @click="num++" src="/image/Group 300@2x.png" alt="" />
    </div>
</template>

<script setup lang="ts">
const num = defineModel({
    type: Number,
    default: 1,
});
</script>

<style lang="scss" scoped>
.number-ipt {
    display: flex;
    align-items: center;
    span {
        margin: 0 10px;
    }
    img {
        width: 20px;
        cursor: pointer;
    }
}
</style>
