<template>
    <div class="custom">
        <div class="back" @click="navigateTo('/PersonalCenter/main')">
            <el-icon size="22">
                <Back />
            </el-icon>
            <span>返回</span>
        </div>

        <div class="box1">
            <h1>定制你的鼓棒</h1>
            <p>
                根据个人喜好定义属于你自己的鼓棍，提供具风格的图案或字体，<br />
                让你的设计更多元化。
            </p>

            <div class="arrow">
                <el-icon :size="60"><ArrowLeftBold /></el-icon>
                <el-icon :size="60" style="margin-left: 20px"><ArrowRightBold /></el-icon>
            </div>
        </div>
        <div class="images">
            <img src="/image/b1.png" alt="" />
            <img src="/image/b2.png" alt="" />
        </div>

        <div class="box2">
            <ul>
                <li v-for="el in 4">尺寸{{ el }}</li>
            </ul>

            <div class="zy">
                <div>
                    <img src="/image/Group_39.png" alt="" />
                    <p>左棒</p>
                </div>
                <div>
                    <img src="/image/Group_38.png" alt="" />
                    <p>右棒</p>
                </div>
            </div>
            <div class="color">
                <div v-for="el in ['red', 'blue', 'green', 'yellow', 'pink']" :style="{ backgroundColor: el }"></div>
            </div>
            <div class="font">
                <div class="item">
                    <el-select v-model="obj.font" placeholder="字体1">
                        <el-option :label="1" :value="1" />
                        <el-option :label="2" :value="2" />
                        <el-option :label="3" :value="3" />
                    </el-select>
                    <div class="line"></div>
                    <el-select v-model="obj.font" placeholder="A区">
                        <el-option :label="1" :value="1" />
                        <el-option :label="2" :value="2" />
                        <el-option :label="3" :value="3" />
                    </el-select>
                </div>
                <div class="item">
                    <el-select v-model="obj.font" placeholder="图标1">
                        <el-option :label="1" :value="1" />
                        <el-option :label="2" :value="2" />
                        <el-option :label="3" :value="3" />
                    </el-select>
                    <div class="line"></div>
                    <el-select v-model="obj.font" placeholder="A区">
                        <el-option :label="1" :value="1" />
                        <el-option :label="2" :value="2" />
                        <el-option :label="3" :value="3" />
                    </el-select>
                </div>
            </div>
            <div class="btns">
                <button style="background-color: #2342d2; margin-bottom: 20px">
                    <el-icon><View /></el-icon>
                    <span>开始预览</span>
                </button>
                <button style="background-color: rgba(255, 255, 255, 0.4)">
                    <el-icon><ShoppingCart /></el-icon>
                    <span>开始预览</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Back, View, ShoppingCart, ArrowLeftBold, ArrowRightBold } from "@element-plus/icons-vue";

const obj = reactive({
    color: "",
    font: "",
    icon: "",
});
</script>

<style lang="scss" scoped>
.custom {
    width: 100%;
    height: 100vh;
    background: url("/image/image_15.png") no-repeat;
    background-size: 100%;
    background-position: bottom;
    color: #fff;
    padding: 80px;
    position: relative;
    display: flex;
    flex-direction: column;
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
        position: relative;
        h1 {
            font-size: 48px;
            margin-bottom: 20px;
        }
        p {
            font-family: Inter;
            font-size: 24px;
            font-weight: 400;
            line-height: 36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            // background: rgba(255, 255, 255, 1);
            opacity: 0.5;
        }
        .arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0px;
            display: flex;
            // justify-content: ;
            align-items: center;
        }
    }
    .images {
        margin: 40px 0px;
        img {
            width: 100%;
            height: auto;
        }
        & > img:nth-of-type(1) {
            margin-bottom: 40px;
        }
    }
    .box2 {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        // flex: 1;
        margin-top: auto;
        height: 200px;
        ul {
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-between;
            li {
                border: 1px solid #fff;
                border-radius: 4px;
                padding: 0 20px;
                height: 40px;
                line-height: 40px;
            }
        }
        .zy {
            width: 400px;
            height: 100%;
            background-color: rgba($color: #fff, $alpha: 0.2);
            border-radius: 5px;
            display: flex;
            justify-content: space-around;
            & > div {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                p {
                    margin: 10px 0px;
                }
            }
        }
        .color {
            display: flex;
            flex-wrap: wrap;
            width: 150px;
            & > div {
                width: 30px;
                height: 30px;
                border: 1px solid #fff;
                border-radius: 50%;
                margin-right: 20px;
                margin-bottom: 20px;
            }
        }
        .font {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 100%;
            .item {
                width: 100px;
                border: 2px solid rgba($color: #fff, $alpha: 0.2);
                border-radius: 5px;
                .line {
                    margin: 0 auto;
                    width: 80%;
                    height: 1.5px;
                    background-color: rgba($color: #fff, $alpha: 0.2);
                }
            }
            :deep(.el-select__wrapper) {
                background-color: transparent;
                border: none;
                box-shadow: 0 0 0 0px !important;
                // box-sizi;
            }
        }
        .btns {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            button {
                width: 100px;
                aspect-ratio: 5 / 2;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: transparent;
                border: none;
                color: white;
                cursor: pointer;
                .el-icon {
                    margin-right: 10px;
                }
            }
        }
    }
}
</style>
