<template>
    <button class="custom-btn" :class="props.active ? 'active' : ''">
        <el-tooltip v-if="tooltipTxt" :content="tooltipTxt" raw-content placement="top" effect="light" :show-arrow="false">
            <span style="width: 100%; height: 100%; display: block">{{ props.txt || "文字" }}</span>
        </el-tooltip>
        <!--  -->
        <span v-else style="width: 100%; height: 100%; display: block">{{ props.txt || "文字" }}</span>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    active?: Boolean;
    txt?: String;
    tooltipTxt?: string;
}>();
</script>

<style lang="scss" scoped>
.custom-btn {
    border: 1px solid var(--main-color-1);
    border-radius: 6px;
    background-color: #fff;
    height: 32px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    width: 100%;
}
.active {
    color: #fff;
    background-color: var(--main-color-1) !important;
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    .custom-btn {
        font-size: 14px;
        // height: 30px;
        // line-height: 30px;
    }
}
</style>
