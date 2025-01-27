<template>
    <div style="background-color: var(--main-color-3)">
        <div class="custom-box">
            <!-- #region 定制鼓棒 -->
            <div class="custom-gb">
                <div>
                    <button class="active">左棒</button>
                    <canvas ref="left" width="1024" height="74"></canvas>
                </div>
                <div>
                    <button>右棒</button>
                    <canvas ref="right" width="1024" height="74"></canvas>
                </div>
            </div>
            <!-- #endregion 定制鼓棒 -->

            <div class="set">
                <div class="left">
                    <div class="title">选择你的鼓棒材质</div>
                    <div class="btns">
                        <CustomBtn v-for="el in 3" style="background-color: var(--main-color-3)" txt="山胡桃木" />
                    </div>
                    <div class="title">选择你的鼓棒款式</div>
                    <div class="btns">
                        <CustomBtn v-for="el in 3" style="background-color: var(--main-color-3)" txt="山胡桃木" />
                    </div>
                    <div class="title">选择您的槌头</div>
                    <div class="btns">
                        <CustomBtn v-for="el in 3" style="background-color: var(--main-color-3)" txt="山胡桃木" />
                    </div>
                    <div class="title">选择你的鼓棒尺寸</div>
                    <div class="btns">
                        <CustomBtn v-for="el in 3" style="background-color: var(--main-color-3)" txt="山胡桃木" />
                    </div>

                    <el-divider border-style="dashed" />

                    <h2>请开始设计你的鼓棒</h2>
                    <div class="sj">
                        <CustomBtn :active="true" txt="左棒" />
                        <CustomBtn txt="右棒" />
                    </div>
                    <div class="sjgb">
                        <div class="title">选择颜色</div>
                        <div class="colors">
                            <div v-for="el in ['#0c5282', '#a34200']" :style="{ borderColor: el }">
                                <div :style="{ backgroundColor: el }"></div>
                            </div>
                        </div>

                        <el-collapse accordion>
                            <el-collapse-item v-for="el in 2" title="A区" :name="el">
                                <template #icon="{ isActive }">
                                    <img v-show="isActive" style="margin-left: auto; width: 20px" src="/assets/Group 308@2x.png" alt="" />
                                    <img v-show="!isActive" style="margin-left: auto; width: 20px" src="/assets/Group 300@2x.png" alt="" />
                                </template>
                                <div class="ipts">
                                    <el-select v-model="ac" placeholder="选择定制字体">
                                        <el-option v-for="item in 3" :key="item" :label="item" :value="item" />
                                    </el-select>
                                    <el-input placeholder="请输入文字内容" v-model="leftForm.txt" @blur="onBlur" />
                                    <el-select v-model="ac" placeholder="选择定制图标">
                                        <el-option v-for="item in 3" :key="item" :label="item" :value="item" />
                                    </el-select>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </div>
                <div class="right">
                    <div class="title">定制金额</div>
                    <form action="#">
                        <p>
                            <label for="">山桃胡木</label>
                            <label for="">￥80</label>
                        </p>
                        <p>
                            <label for="">山桃胡木</label>
                            <label for="">￥80</label>
                        </p>
                        <p>
                            <label for="">数量</label>
                            <label for="">
                                <NumberIpt></NumberIpt>
                            </label>
                        </p>
                    </form>
                    <div class="title" style="text-align: right">总计：￥55</div>
                    <CustomBtn style="margin-bottom: 10px" />
                    <CustomBtn style="margin-bottom: 10px" :active="true" />
                </div>
            </div>
        </div>

        <!-- <canvas style="visibility: hidden"></canvas> -->
    </div>
</template>

<script setup lang="ts">
const ac = ref(1);
const left = ref<HTMLCanvasElement>();
const right = ref<HTMLCanvasElement>();

let leftCtx: CanvasRenderingContext2D;
let rightCtx: CanvasRenderingContext2D;

const leftForm = reactive({
    txt: "",
});
const rightForm = reactive({
    txt: "",
});

function onBlur() {
    leftCtx.font = "24px 'Songti TC'";
    leftCtx.fillText(leftForm.txt, 300, 40);

    let image = new Image();
    image.onload = () => {
        let w = image.width;
        let h = image.height;
        // console.log();
        leftCtx.drawImage(image, 500, 17, w * (38 / h), 38);
        // rightCtx.drawImage(image, 0, 0, 1024, 74);
    };
    image.src = "/image/logo.png";
}
onMounted(() => {
    leftCtx = left.value?.getContext("2d") as CanvasRenderingContext2D;
    rightCtx = right.value?.getContext("2d") as CanvasRenderingContext2D;

    let image = new Image();
    image.onload = () => {
        leftCtx.drawImage(image, 0, 0, 1024, 74);
        rightCtx.drawImage(image, 0, 0, 1024, 74);
    };
    image.src = "/image/鼓棒@2x.png";
    // console.log(left);
    // console.log(right);
});
</script>

<style lang="scss" scoped>
.custom-box {
    width: 70vw;
    margin: 0 auto;
    padding: 50px;
    .custom-gb {
        div {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            button {
                width: 60px;
                height: 34px;
                border: none;
                border-radius: 6px;
                border: 1px solid transparent;
                background-color: transparent;
                height: 34px;
                line-height: 34px;
                text-align: center;
                cursor: pointer;
            }
            .active {
                border-color: var(--main-color-1);
                background-color: var(--main-color-1);
                color: #fff;
            }
            & > canvas {
                width: calc(100% - 60px);
                // flex: 1;
                height: auto;
            }
        }
    }

    .set {
        display: flex;
        align-items: flex-start;
        .title {
            font-size: 18px;
            margin-bottom: 15px;
        }
        .left,
        .right {
            background-color: white;
            padding: 30px;
        }
        .left {
            width: 60%;
            margin-right: 10px;
            .sj {
                display: flex;
                margin-bottom: 30px;
                & > button {
                    background-color: var(--main-color-3);
                }
                & > button:nth-of-type(1) {
                    border-top-right-radius: 0px;
                    border-bottom-right-radius: 0px;
                    border-right: none;
                }
                & > button:nth-of-type(2) {
                    border-top-left-radius: 0px;
                    border-bottom-left-radius: 0px;
                    // border-left: none;
                }
            }
            .sjgb {
                background-color: var(--main-color-3);
                padding: 20px;
                :deep(.el-collapse) {
                    button,
                    div {
                        background-color: transparent !important;
                    }
                }
                .colors {
                    display: flex;
                    gap: 15px;
                    & > div {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        position: relative;
                        border: 1px solid;
                        border-color: transparent;
                        padding: 2.5px;
                        div {
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                        }
                    }
                }
                .ipts {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    & > div {
                        width: calc(50% - 5px);
                    }
                }
            }
        }
        .right {
            flex: 1;
            form {
                p {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                }
            }
        }
        .btns {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
        }
        h2 {
            font-size: 28px;
            margin-bottom: 30px;
        }
    }
}
</style>
