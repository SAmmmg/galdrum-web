<template>
    <div style="background-color: var(--main-color-3)">
        <div class="custom-box">
            <!-- 定制鼓棒  -->
            <div class="custom-gb">
                <div>
                    <div class="mask-box">
                        <div class="txt">A区</div>
                        <div class="txt">B区</div>
                        <div class="txt">C区</div>
                        <div class="mask" :class="{ activeMask: actRegion == 'A' }"></div>
                        <div class="mask" :class="{ activeMask: actRegion == 'B' }"></div>
                        <div class="mask" :class="{ activeMask: actRegion == 'C' }"></div>
                    </div>
                    <div class="canvas">
                        <CustomBtn @click="bang = 'left'" :active="bang == 'left'" txt="左棒" />
                        <canvas ref="left" width="1024" height="74"></canvas>
                    </div>
                    <div class="space"></div>
                    <div class="canvas">
                        <CustomBtn @click="bang = 'right'" :active="bang == 'right'" txt="右棒" />
                        <canvas ref="right" width="1024" height="74"></canvas>
                    </div>
                    <div class="space"></div>
                </div>
            </div>

            <div class="set">
                <div class="left">
                    <div class="title">选择你的鼓棒材质</div>
                    <div class="btns">
                        <CustomBtn
                            tooltip-txt="演奏起来较敏捷，音色柔和。较适用与流行、JAZZ、FUNK等风格"
                            v-for="el in 3"
                            style="background-color: var(--main-color-3)"
                            txt="山胡桃木"
                        />
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
                        <CustomBtn @click="bang = 'left'" :active="bang == 'left'" txt="左棒" />
                        <CustomBtn @click="bang = 'right'" :active="bang == 'right'" txt="右棒" />
                    </div>
                    <div class="sjgb">
                        <div class="title">选择颜色</div>
                        <div class="colors">
                            <div
                                v-for="el in colors"
                                :style="{ borderColor: el == formItem.txtColor ? el : 'transparent' }"
                                @click="formItem.txtColor = el"
                            >
                                <div :style="{ backgroundColor: el }"></div>
                            </div>
                        </div>

                        <el-collapse accordion v-model="actRegion">
                            <el-collapse-item v-for="(el, k) in form" :title="k + '区'" :name="k">
                                <template #icon="{ isActive }">
                                    <img class="ml-auto w-[20px]" @click.stop v-show="isActive" src="/image/Group 308@2x.png" alt="" />
                                    <img class="ml-auto w-[20px]" @click.stop v-show="!isActive" src="/image/Group 300@2x.png" alt="" />
                                </template>
                                <div class="ipts">
                                    <el-select v-model="el.fontFamily" placeholder="选择定制字体">
                                        <el-option v-for="item in 3" :key="item" :label="item" :value="item" />
                                    </el-select>
                                    <el-input placeholder="请输入文字内容" v-model.lazy="el.txt" />
                                    <el-select v-model="el.icon" placeholder="选择定制图标" clearable>
                                        <el-option v-for="item in uploadIcon" :key="item" :value="item">
                                            <template #default>
                                                <div style="height: 100%; display: flex; align-items: center; justify-content: center">
                                                    <img :style="{ width: '20px' }" :src="item" />
                                                </div>
                                            </template>
                                        </el-option>

                                        <template #label>
                                            <img v-show="el.icon" :style="{ width: '20px' }" :src="el.icon" alt="" />
                                        </template>

                                        <template #empty> 点击右侧按钮上传图标 </template>
                                    </el-select>
                                    <el-upload action="#" :before-upload="beforeUpload" :auto-upload="true">
                                        <CustomBtn txt="上传我的图标" :active="true" />
                                    </el-upload>
                                </div>
                                <el-tabs type="border-card">
                                    <el-tab-pane label="十二星座">
                                        <div class="icons">
                                            <img
                                                @click="el.icon = ele"
                                                v-for="ele in ['/image/Frame@2x(1).png', '/image/Frame@2x(2).png']"
                                                :src="ele"
                                            />
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="十二生肖"></el-tab-pane>
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
                                <CustomNumberIpt />
                            </label>
                        </p>
                    </form>
                    <div class="title" style="text-align: right">总计：￥55</div>
                    <CustomBtn style="margin-bottom: 10px" txt="加入购物袋" />
                    <CustomBtn style="margin-bottom: 10px" txt="立即购买" :active="true" />
                </div>
            </div>
        </div>

        <!-- 抽屉 -->
        <div class="fixed-bottom">
            <el-badge :value="1">
                <el-icon :size="28" @click="drawerShow = true">
                    <ShoppingCart />
                </el-icon>
            </el-badge>
            <span>合计：￥80</span>

            <div class="btns">
                <button>加入购物车</button>
                <button>立即购买</button>
            </div>

            <!--  -->
            <van-popup v-model:show="drawerShow" position="bottom" :z-index="1000" teleport="body" :style="{ paddingBottom: '60px' }">
                <div class="right global-custom-right">
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
                                <CustomNumberIpt />
                            </label>
                        </p>
                    </form>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { CustomNumberIpt } from "#build/components";
import { ShoppingCart } from "@element-plus/icons-vue";

const colors = ref(["#0c5282", "#a34200", "#00754e", "#0074ff", "#FF6700", "#00DD99", "#E882B7", "#5BA300"]);
const bang = ref<"left" | "right">("left");
const left = ref<HTMLCanvasElement>();
const right = ref<HTMLCanvasElement>();
const drawerShow = ref(false);
const actRegion = ref<"A" | "B" | "C">("A");

let leftCtx: CanvasRenderingContext2D;
let rightCtx: CanvasRenderingContext2D;

interface formItem {
    // 文字
    txt: string;
    // 文字颜色
    txtColor: string;
    // 字体
    fontFamily: string;
    // 图标
    icon: string;
}
interface form {
    A: formItem;
    B: formItem;
    C: formItem;
}
const leftForm = reactive<form>({
    A: {
        txt: "",
        fontFamily: "",
        icon: "",
        txtColor: "",
    },
    B: {
        txt: "",
        fontFamily: "",
        icon: "",
        txtColor: "",
    },
    C: {
        txt: "",
        fontFamily: "",
        icon: "",
        txtColor: "",
    },
});
const rightForm = reactive<form>({
    A: {
        txt: "",
        fontFamily: "",
        icon: "",
        txtColor: "",
    },
    B: {
        txt: "",
        fontFamily: "",
        icon: "",
        txtColor: "",
    },
    C: {
        txt: "",
        fontFamily: "",
        icon: "",
        txtColor: "",
    },
});
const form = computed<form>(() => {
    return bang.value == "left" ? leftForm : rightForm;
});
const formItem = computed<formItem>(() => {
    return form.value[actRegion.value];
});
const uploadIcon = ref<string[]>([]);
onMounted(() => {
    leftCtx = left.value?.getContext("2d") as CanvasRenderingContext2D;
    rightCtx = right.value?.getContext("2d") as CanvasRenderingContext2D;

    drawBot("left");
    drawBot("right");
});
for (const [key, val] of Object.entries(leftForm)) {
    let timer: NodeJS.Timeout;
    watch(
        () => val,
        newVal => {
            clearTimeout(timer);
            timer = setTimeout(async () => {
                leftCtx.clearRect(0, 0, 1024, 74);
                await drawBot("left");
                drawIconTxt("left");
            }, 1000);
        },
        {
            deep: true,
        }
    );
}

for (const [key, val] of Object.entries(rightForm)) {
    let timer: NodeJS.Timeout;
    watch(
        () => val,
        newVal => {
            clearTimeout(timer);
            timer = setTimeout(async () => {
                rightCtx.clearRect(0, 0, 1024, 74);
                await drawBot("right");
                drawIconTxt("right");
            }, 1000);
        },
        {
            deep: true,
        }
    );
}

// 绘制棒子
async function drawBot(type: "left" | "right") {
    return new Promise((res, rej) => {
        let image = new Image();
        let ctx = type == "left" ? leftCtx : rightCtx;
        image.onload = () => {
            // ctx.clearRect(0, 0, 1024, 74);
            ctx.drawImage(image, 0, 0, 1024, 74);
            res(true);
        };
        image.src = "/image/鼓棒@2x.png";
    });
}
// 绘制图标和文字
function drawIconTxt(type: "left" | "right") {
    let ctx = type == "left" ? leftCtx : rightCtx;
    let form = type == "left" ? leftForm : rightForm;

    // ctx.clearRect(0, 0, 1024, 74);
    for (const [key, val] of Object.entries(form)) {
        if (key == "A") {
            ctx.font = "24px 'Songti TC'";
            ctx.fillStyle = val.txtColor;
            ctx.fillText(val.txt, 210, 44);

            let image = new Image();
            image.onload = () => {
                let w = image.width;
                let h = image.height;
                ctx.drawImage(image, 480, 17, w * (38 / h), 38);
            };
            image.src = val.icon;
        }
        if (key == "B") {
            ctx.font = "24px 'Songti TC'";
            ctx.fillStyle = val.txtColor;
            ctx.fillText(val.txt, 670, 44);

            let image = new Image();
            image.onload = () => {
                let w = image.width;
                let h = image.height;
                ctx.drawImage(image, 820, 17, w * (38 / h), 38);
            };
            image.src = val.icon;
        }
        if (key == "C") {
            ctx.font = "24px 'Songti TC'";
            ctx.fillStyle = val.txtColor;
            ctx.fillText(val.txt, 890, 44);

            let image = new Image();
            image.onload = () => {
                let w = image.width;
                let h = image.height;
                ctx.drawImage(image, 930, 17, w * (38 / h), 38);
            };
            image.src = val.icon;
        }
    }
}
// 自定义上传图标
function beforeUpload(file: File) {
    const reader = new FileReader();

    reader.onload = function () {
        let img = reader.result as string;
        formItem.value.icon = img;
        uploadIcon.value.push(img);
    };
    reader.readAsDataURL(file);

    return false;
}
// 绘制logo
function drawLogo(type: "left" | "right") {
    let image = new Image();
    image.onload = () => {
        if (type == "left") {
            leftCtx.drawImage(image, 0, 0, 1024, 74);
        } else {
            rightCtx.drawImage(image, 0, 0, 1024, 74);
        }
    };
    image.src = "/image/鼓棒@2x.png";
}
</script>

<style lang="scss" scoped>
.custom-box {
    width: 70vw;
    margin: 0 auto;
    padding: 0px 50px 50px;
    .custom-gb {
        position: sticky;
        top: 60px;
        background-color: var(--main-color-3);
        z-index: 11;
        & > div {
            padding-top: 50px;
        }
        .space {
            height: 30px;
            width: 100%;
        }
        .mask-box {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 1;
            .txt {
                position: absolute;
                top: 20px;
                cursor: pointer;
            }
            .txt:nth-of-type(1) {
                left: 40%;
            }
            .txt:nth-of-type(2) {
                left: 75%;
            }
            .txt:nth-of-type(3) {
                left: 90%;
            }
            .mask {
                position: absolute;
                top: 50px;
                background-color: transparent;
                // #e5e3dc
                border: 1px dashed #dad7ce;
                border-radius: 8px;
                height: calc(100% - 70px);
                transform: translateX(calc(-50% + 10px));
            }
            .activeMask {
                background-color: #e5e3dc;
            }
            .mask:nth-of-type(4) {
                left: 40%;
                width: 30%;
            }
            .mask:nth-of-type(5) {
                left: 75%;
                width: 18%;
            }
            .mask:nth-of-type(6) {
                left: 90%;
                width: 9%;
            }
        }
        .canvas {
            width: 100%;
            display: flex;
            align-items: center;
            position: relative;
            z-index: 2;
            button {
                width: 60px;
                border: 1px solid transparent;
                background-color: transparent;
            }
            & > canvas {
                width: calc(100% - 60px);
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
                    gap: 10px;
                    flex-wrap: wrap;
                    & > div {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        position: relative;
                        border: 1px solid;
                        border-color: transparent;
                        padding: 2.5px;
                        cursor: pointer;
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
.fixed-bottom {
    display: none;
}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    .custom-box {
        width: 100%;
        padding: 0px;
        .custom-gb {
            // width: calc(100% - 40px);
            // margin: 0 auto;
            top: 40px;
            & > div {
                margin: 0 auto;

                width: calc(100% - 40px);
                position: relative;
            }

            .space {
                height: 20px;
            }
            .canvas {
                button {
                    width: 40px;
                }
                canvas {
                    width: calc(100% - 40px);
                }
            }
        }
        .set {
            flex-direction: column;
            .left {
                margin-right: 0px;
                padding: 20px;
                .sjgb {
                    border: 2px solid var(--main-color-3);
                    border-radius: 8px;
                }
            }
            .left,
            .right {
                width: 100%;
            }
            .right {
                display: none;
            }
        }
    }
    .fixed-bottom {
        display: flex;
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 60px;
        align-items: center;
        background-color: white;
        border-top: 1px solid var(--main-color-3);
        padding-left: 20px;
        gap: 10px;
        z-index: 1010;
        .btns {
            margin-left: auto;
            border: 1px solid var(--main-color-1);
            height: calc(100% + 1px);
            margin-top: -1px;
            button {
                font-size: 16px;
                border: none;
                height: 100%;
                padding: 0 20px;
            }
            & > button:nth-of-type(1) {
            }
            & > button:nth-of-type(2) {
                background-color: var(--main-color-1);
                color: white;
            }
        }
    }
}
</style>

<style lang="scss">
.global-custom-right {
    flex: 1;
    background-color: white;
    padding: 20px;
    .title {
        font-size: 16px;
        margin-bottom: 10px;
    }
    form {
        p {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }
    }
}
</style>
