<template>
    <div class="faq">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item v-for="el in 5" :key="el" :title="'问题' + el" :name="el" :icon="CaretRight">
                <template #icon="{ isActive }">
                    <!-- <span class="icon-ele"> -->
                    <!-- {{ isActive ? 'Expanded' : 'Collapsed' }} -->
                    <Plus v-show="isActive" style="width: 16px; margin-left: auto" />
                    <Minus v-show="!isActive" style="width: 16px; margin-left: auto" />
                    <!-- </span> -->
                </template>
                <div>问题的内容{{ el }}</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { CaretRight, Plus, Minus } from "@element-plus/icons-vue";

const activeNames = ref(["1"]);
const handleChange = (val: any) => {
    console.log(val);
};
</script>

<style lang="scss" scoped>
.faq {
    min-height: 100vh;
    padding-top: 30vh;
    background-color: #fff;
    & > div {
        width: 70%;
        margin: 0 auto;
    }
}
</style>
