<template>
    <div class="main">
        <p class="title">定制你的鼓棒</p>
        <p class="small">说明信息说明信息说明信息</p>
        <div class="custom">
            <div class="canvas">
                <canvas></canvas>
            </div>
            <div class="size">
                <p>尺寸</p>
                <ul>
                    <li v-for="el in 4">尺寸{{ el }}</li>
                </ul>
                <div class="select">
                    <div class="select-bang">
                        <div>wwww</div>
                        <div>
                            <div>左棒</div>
                            <div>右棒</div>
                        </div>
                    </div>
                    <div>
                        <el-select v-model="obj.color" placeholder="选择颜色" style="width: 240px">
                            <el-option v-for="item in 3" :key="item" :label="item" :value="item" />
                        </el-select>
                    </div>
                    <div>
                        <el-select class="left-no" v-model="obj.font" placeholder="字体" style="width: 120px">
                            <el-option v-for="item in 3" :key="item" :label="item" :value="item" />
                        </el-select>
                        <el-select class="right-no" v-model="obj.font" placeholder="a" style="width: 120px">
                            <el-option v-for="item in 3" :key="item" :label="item" :value="item" />
                        </el-select>
                    </div>
                    <div>
                        <el-select class="left-no" v-model="obj.icon" placeholder="图标" style="width: 120px">
                            <el-option v-for="item in 3" :key="item" :label="item" :value="item" />
                        </el-select>
                        <el-select class="right-no" v-model="obj.icon" placeholder="a" style="width: 120px">
                            <el-option v-for="item in 3" :key="item" :label="item" :value="item" />
                        </el-select>
                    </div>
                </div>
                <div class="btns">
                    <el-button type="primary">立即购买</el-button>
                    <el-button>加入购物车</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const obj = reactive({
    color: "",
    font: "",
    icon: "",
});
</script>

<style lang="scss" scoped>
.main {
    padding: 160px 40px 40px;
    // padding: 40px;
    .title {
        font-size: 40px;
        // font-weight: bold;
    }
    .small {
        // font-size: 14px;
        color: #333;
        // margin: 30px 60px;
        margin-top: 20px;
        margin-bottom: 40px;
    }
    .custom {
        display: flex;
        justify-content: space-between;
        // height: ;
        .canvas {
            background-color: #f6f6f9;
            width: 70%;
            border-radius: 20px;
        }
        .size {
            width: 28%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            & > p {
                margin-bottom: 20px;
                font-size: 16px;
            }
            & > ul {
                margin-bottom: 20px;
                display: flex;
                justify-content: space-between;
                li {
                    width: 50px;
                    border: 1px solid #333;
                    text-align: center;
                    border-radius: 6px;
                }
            }
            .select {
                margin-bottom: 20px;
                border-radius: 8px;
                border: 1px solid #ccc;
                padding: 20px 20px 0px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .select-bang {
                    width: 100%;
                    & > div:nth-of-type(1) {
                        width: 100%;
                        height: 200px;
                    }
                    & > div:nth-of-type(2) {
                        width: 100%;
                        display: flex;
                        justify-content: space-around;
                    }
                }
                & > div:not(.select-bang) {
                    display: flex;
                    width: 100%;
                    margin-bottom: 20px;
                    & > div {
                        flex: 1;
                    }
                    .left-no {
                        :deep(.el-select__wrapper) {
                            border-right: none;
                            border-top-right-radius: 0px;
                            border-bottom-right-radius: 0px;
                        }
                    }
                    .right-no {
                        :deep(.el-select__wrapper) {
                            // border-right: none;
                            border-top-left-radius: 0px;
                            border-bottom-left-radius: 0px;
                        }
                    }
                }
            }
            .btns {
            }
        }
    }
}
</style>
