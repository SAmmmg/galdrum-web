<template>
    <div style="background-color: var(--main-color-3)">
        <div class="custom-box">
            <!-- #region 定制鼓棒 -->
            <div class="custom-gb">
                <div>
                    <button @click="bang = 'left'" :class="{ active: bang == 'left' }">左棒</button>
                    <canvas ref="left" width="1024" height="74"></canvas>
                </div>
                <div>
                    <button @click="bang = 'right'" :class="{ active: bang == 'right' }">右棒</button>
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
                            <el-collapse-item title="A区">
                                <template #icon="{ isActive }">
                                    <img v-show="isActive" style="margin-left: auto; width: 20px" src="/assets/Group 308@2x.png" alt="" />
                                    <img v-show="!isActive" style="margin-left: auto; width: 20px" src="/assets/Group 300@2x.png" alt="" />
                                </template>
                                <div class="ipts">
                                    <el-select v-model="form.fontFamily" placeholder="选择定制字体">
                                        <el-option v-for="item in 3" :key="item" :label="item" :value="item" />
                                    </el-select>
                                    <el-input placeholder="请输入文字内容" v-model="form.txt" />
                                    <el-select v-model="form.icon" placeholder="选择定制图标" clearable>
                                        <!-- <el-option v-for="item in 3" :key="item" :label="item" :value="item" /> -->

                                        <template #label>
                                            <img v-show="form.icon" :style="{ width: '20px' }" :src="form.icon" alt="" />
                                            <!-- <span>阿弥诺斯</span> -->
                                            <!-- <el-tag v-for="color in value" :key="color" :color="color" /> -->
                                        </template>
                                    </el-select>
                                    <CustomBtn txt="上传我的图标" :active="true" />
                                    <el-upload action="#" :before-upload="beforeUpload" :auto-upload="true">上传我的图标</el-upload>
                                </div>
                                <el-tabs type="border-card">
                                    <el-tab-pane label="十二星座">
                                        <div class="icons">
                                            <img
                                                @click="form.icon = el"
                                                v-for="el in ['/image/Frame@2x(1).png', '/image/Frame@2x(2).png']"
                                                :src="el"
                                            />
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="十二生肖">Config</el-tab-pane>
                                </el-tabs>
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
    </div>
</template>

<script setup lang="ts">
const bang = ref<"left" | "right">("left");
const left = ref<HTMLCanvasElement>();
const right = ref<HTMLCanvasElement>();

let leftCtx: CanvasRenderingContext2D;
let rightCtx: CanvasRenderingContext2D;

interface form {
    txt: string;
    fontFamily: string;
    // 预设图标
    icon: string;
    // 用户定制图标
    // customIcon: string;
}
const leftForm = reactive<form>({
    txt: "",
    fontFamily: "",
    icon: "",
});
const rightForm = reactive<form>({
    txt: "",
    fontFamily: "",
    icon: "",
});
const form = computed<form>(() => {
    return bang.value == "left" ? leftForm : rightForm;
});

let timer: NodeJS.Timeout;
watch(leftForm, () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        leftCtx.clearRect(0, 0, 1024, 74);

        drawBot("left", () => {
            leftCtx.font = "24px 'Songti TC'";
            leftCtx.fillText(leftForm.txt, 300, 44);

            let image = new Image();
            image.onload = () => {
                let w = image.width;
                let h = image.height;
                leftCtx.drawImage(image, 500, 17, w * (38 / h), 38);
            };
            image.src = form.value.icon;
        });
    }, 1000);
});
watch(rightForm, () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        rightCtx.clearRect(0, 0, 1024, 74);

        drawBot("right", () => {
            rightCtx.font = "24px 'Songti TC'";
            rightCtx.fillText(leftForm.txt, 300, 44);

            let image = new Image();
            image.onload = () => {
                let w = image.width;
                let h = image.height;
                rightCtx.drawImage(image, 500, 17, w * (38 / h), 38);
            };
            image.src = "/image/logo@2x.png";
        });
    }, 1000);
});

onMounted(() => {
    leftCtx = left.value?.getContext("2d") as CanvasRenderingContext2D;
    rightCtx = right.value?.getContext("2d") as CanvasRenderingContext2D;

    drawBot("left");
    drawBot("right");
});
function drawBot(type: "left" | "right", callBack?: Function) {
    let image = new Image();
    image.onload = () => {
        if (type == "left") {
            leftCtx.drawImage(image, 0, 0, 1024, 74);
        } else {
            rightCtx.drawImage(image, 0, 0, 1024, 74);
        }
        if (callBack) callBack();
    };
    image.src = "/image/鼓棒@2x.png";
}

function beforeUpload(file: File) {
    // console.log(raw);

    const reader = new FileReader();

    reader.onload = function () {
        form.value.icon = reader.result as string;
        console.log(reader.result); // 输出 Base64 编码字符串
    };
    // 读取文件内容并转换为 Base64 编码字符串
    return false;
}
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
                    button:not(.custom-btn),
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
                    margin-bottom: 10px;
                    & > div {
                        width: calc(50% - 5px);
                    }
                    .custom-btn {
                        width: 120px;
                    }
                }
                .icons {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-right: -10px;

                    img {
                        cursor: pointer;
                        width: 20px;
                        &:hover {
                            background-color: rgba($color: #000, $alpha: 0.1);
                        }
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
