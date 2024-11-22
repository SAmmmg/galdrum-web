<template>
    <el-dialog class="CustomDialog" v-bind="$attrs">
        <template v-for="(value, key) in $slots" #[key]="slotProps" :key="key">
            <slot :name="key" v-bind="slotProps"></slot>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.CustomDialog {
    background-color: #252525 !important;
    font-size: 16px;

    // width: 100%;
    // height: 100%;
    color: #fff;
    border: 2px solid transparent;
    border-radius: 16px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(to right, #1d1c1b, #1d1c1b), linear-gradient(119.71deg, rgba(184, 196, 255, 0.46) 3.65%, #1f2230 96.75%);
    padding: 40px;
    .el-dialog__header {
        padding-bottom: 40px;
    }
}
</style>
