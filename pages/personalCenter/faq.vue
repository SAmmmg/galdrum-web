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
        <ul class="collapse">
            <li v-for="(el, index) in arr" :key="index">
                <GradientBox class="ggg">
                    <p class="title" @click="el.bool = !el.bool">
                        <span>0{{ index + 1 }}</span>
                        <span>{{ el.wt }}</span>
                        <el-icon v-show="el.bool">
                            <Plus />
                        </el-icon>
                        <el-icon v-show="!el.bool">
                            <Minus />
                        </el-icon>
                    </p>
                    <div class="content" :style="el.bool ? 'height:40px;' : 'height:0px;'">{{ el.hd }}</div>
                </GradientBox>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { CaretRight, Plus, Minus, Back } from "@element-plus/icons-vue";

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
    width: 100%;
    height: 100vh;
    color: #fff;
    padding: 80px;
    .collapse {
        li {
            // border: 4px solid transparent;
            // border-radius: 16px;
            // background-clip: padding-box, border-box;
            // background-origin: padding-box, border-box;
            // background-image: linear-gradient(to right, #1d1c1b, #1d1c1b),
            //     linear-gradient(119.71deg, rgba(184, 196, 255, 0.46) 3.65%, #1f2230 96.75%);
            .ggg {
                padding: 20px 20px 0;
                overflow: hidden;
            }

            margin-bottom: 20px;

            .title {
                display: flex;
                font-size: 24px;
                align-items: center;
                // margin-bottom: 20px;
                cursor: pointer;
                .el-icon {
                    margin-left: auto;
                }
            }
            .content {
                margin-top: 20px;
                // margin-bottom: 20px;
                height: 40px;
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
