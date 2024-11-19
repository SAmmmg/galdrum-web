<template>
    <div class="faq">
        <div class="back" @click="navigateTo('/PersonalCenter/main')">
            <el-icon size="22">
                <Back />
            </el-icon>
            <span>返回</span>
        </div>

        <div class="box1">
            <h1>定制你的鼓棒</h1>
        </div>

        <!-- <el-collapse class="collapse" v-model="activeNames" @change="handleChange">
            <el-collapse-item v-for="el in 5" :key="el" :title="'问题' + el" :name="el" :icon="CaretRight">
                <template #icon="{ isActive }">
                    <Plus v-show="isActive" style="width: 16px; margin-left: auto" />
                    <Minus v-show="!isActive" style="width: 16px; margin-left: auto" />
                </template>
                <div>问题的内容{{ el }}</div>
            </el-collapse-item>
        </el-collapse> -->
        <ul class="collapse">
            <li v-for="(el, index) in arr" :key="index">
                <p class="title">
                    <span>0{{ index + 1 }}</span>
                    <span>{{ el.wt }}</span>
                    <el-icon @click="el.bool = !el.bool" v-show="el.bool">
                        <Plus />
                    </el-icon>
                    <el-icon @click="el.bool = !el.bool" v-show="!el.bool">
                        <Minus />
                    </el-icon>
                </p>
                <div class="content" :style="el.bool ? 'height:20px;' : 'height:0px;'">{{ el.hd }}</div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { CaretRight, Plus, Minus, Back } from "@element-plus/icons-vue";

const activeNames = ref(["1"]);
const handleChange = (val: any) => {
    console.log(val);
};

const arr = ref([
    {
        wt: "问题问题问题问题问题问题问题问题问题？",
        hd: "回答回答回答回答回答回答回答回答回答回答回答回答",
        bool: false,
    },
    {
        wt: "问题问题问题问题问题问题问题问题问题？",
        hd: "回答回答回答回答回答回答回答回答回答回答回答回答",
        bool: false,
    },
    {
        wt: "问题问题问题问题问题问题问题问题问题？",
        hd: "回答回答回答回答回答回答回答回答回答回答回答回答",
        bool: false,
    },
    {
        wt: "问题问题问题问题问题问题问题问题问题？",
        hd: "回答回答回答回答回答回答回答回答回答回答回答回答",
        bool: false,
    },
]);
</script>

<style lang="scss" scoped>
.faq {
    // min-height: 100vh;
    // padding-top: 30vh;
    // background-color: #fff;
    width: 100%;
    height: 100vh;
    color: #fff;
    padding: 80px;
    // position: relative;
    // display: flex;
    // flex-direction: column;
    .collapse {
        li {
            // border: 1px solid #fff;
            // border: 2px solid;

            // border-image-source: linear-gradient(119.71deg, rgba(184, 196, 255, 0.46) 3.65%, #1f2230 96.75%);
            // border-image-slice: 2;
            border: 4px solid transparent;
            border-radius: 16px;
            background-clip: padding-box, border-box;
            background-origin: padding-box, border-box;
            background-image: linear-gradient(to right, #1d1c1b, #1d1c1b),
                linear-gradient(119.71deg, rgba(184, 196, 255, 0.46) 3.65%, #1f2230 96.75%);

            padding: 20px 20px 0;
            margin-bottom: 20px;
            overflow: hidden;
            & > p {
                display: flex;
                font-size: 24px;
                align-items: center;
                margin-bottom: 20px;
                .el-icon {
                    margin-left: auto;
                    cursor: pointer;
                }
            }
            .content {
                // margin-top: 20px;
                height: 20px;
                transition-duration: 0.3s;
            }
        }
    }
    .back {
        position: absolute;
        left: 20px;
        top: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
        .el-icon {
            margin-right: 5px;
        }
    }
    .box1 {
        h1 {
            font-size: 48px;
            margin-bottom: 20px;
        }
    }
}
</style>
