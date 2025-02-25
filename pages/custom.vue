<template>
    <div class="gen-box" style="">
        <div class="custom-box">
            <!-- 定制鼓棒  -->
            <div class="" id="target1">
                <Teleport :to="tto">
                    <div @click="preview" class="flex">
                        <div class="flex flex-col flexBtn" v-if="tto == '#target1'">
                            <CustomBtn
                                class="font-Songti w-full h5:mb-[10px] pc:mb-[30px]"
                                @click.stop="bang = 'left'"
                                :active="bang == 'left'"
                                txt="左棒"
                            />
                            <CustomBtn class="font-Songti w-full" @click.stop="bang = 'right'" :active="bang == 'right'" txt="右棒" />
                        </div>
                        <div class="flex flex-col flex-[1] py-[30px] relative">
                            <div class="mask absolute" :class="{ activeMask: actRegion == 'A' }">
                                <div>A区</div>
                            </div>
                            <div class="mask absolute" :class="{ activeMask: actRegion == 'B' }">
                                <div>B区</div>
                            </div>
                            <div class="mask absolute" :class="{ activeMask: actRegion == 'C' }">
                                <div>C区</div>
                            </div>
                            <canvas class="w-full h5:mb-[10px] pc:mb-[30px]" ref="left" width="1024" height="74"></canvas>
                            <canvas class="w-full" ref="right" width="1024" height="74"></canvas>
                        </div>
                    </div>
                </Teleport>
            </div>

            <div class="set">
                <div class="left">
                    <div class="title font-Songti pc:mb-[15px] h5:mb-[20px]">选择你的鼓棒材质</div>
                    <div class="btns mb-[20px]">
                        <CustomBtn
                            class="font-Songti border-[#d6d6d6] bg-[var(--main-color-3)] text-[#00000080]"
                            tooltip-txt="演奏起来较敏捷，音色柔和。较适用与流行、JAZZ、FUNK等风格"
                            v-for="el in 3"
                            txt="山胡桃木"
                        />
                    </div>
                    <div class="title font-Songti pc:mb-[15px] h5:mb-[20px]">选择你的鼓棒款式</div>
                    <div class="btns mb-[20px]">
                        <CustomBtn
                            class="font-Songti border-[#d6d6d6] bg-[var(--main-color-3)] text-[#00000080]"
                            v-for="el in 3"
                            txt="山胡桃木"
                        />
                    </div>
                    <div class="title font-Songti pc:mb-[15px] h5:mb-[20px]">选择您的槌头</div>
                    <div class="btns mb-[20px]">
                        <CustomBtn
                            class="font-Songti border-[#d6d6d6] bg-[var(--main-color-3)] text-[#00000080]"
                            v-for="el in 3"
                            txt="山胡桃木"
                        />
                    </div>
                    <div class="title font-Songti pc:mb-[15px] h5:mb-[20px]">选择你的鼓棒尺寸</div>
                    <div class="btns mb-[20px]">
                        <CustomBtn
                            class="font-Songti border-[#d6d6d6] bg-[var(--main-color-3)] text-[#00000080]"
                            v-for="el in 3"
                            txt="山胡桃木"
                        />
                    </div>

                    <!-- <el-divider border-style="dashed" /> -->
                    <div class="mb-[20px] w-full border-dashed border-2 border-[var(--main-color-3)] h-[1px]"></div>

                    <h2 class="font-Songti pc:mb-[30px] h5:mb-[10px]">请开始设计您的鼓棒</h2>
                    <div class="sj pc:mb-[30px] h5:mb-[10px]">
                        <CustomBtn @click="bang = 'left'" :active="bang == 'left'" txt="左棒" />
                        <CustomBtn @click="bang = 'right'" :active="bang == 'right'" txt="右棒" />
                    </div>
                    <div class="sjgb">
                        <div class="title font-bold">选择颜色</div>
                        <div class="colors">
                            <div
                                v-for="el in colors"
                                :style="{ borderColor: el == formItem?.txtColor ? el : 'transparent' }"
                                @click="formItem.txtColor = el"
                            >
                                <div :style="{ backgroundColor: el }"></div>
                            </div>
                        </div>

                        <el-collapse accordion v-model="actRegion">
                            <el-collapse-item v-for="(el, k) in form" :title="k + '区'" :name="k">
                                <template #icon="{ isActive }">
                                    <img
                                        class="ml-auto w-[20px]"
                                        @click.stop="actRegion = k"
                                        v-show="isActive"
                                        src="/image/Group 1000007417@2x.png"
                                    />
                                    <img
                                        class="ml-auto w-[20px]"
                                        @click.stop="actRegion = k"
                                        v-show="!isActive"
                                        src="/image/Group 1000007416@2x.png"
                                    />
                                </template>
                                <div class="ipts flex flex-wrap gap-[10px] mb-[10px]">
                                    <el-select class="h5:w-full" v-model="el.fontFamily" placeholder="选择定制字体">
                                        <template #label>
                                            <span :style="{ fontFamily: el.fontFamily }">{{ el.fontFamily }}</span>
                                        </template>
                                        <el-option v-for="item in fonts" :key="item" :label="item" :value="item">
                                            <span :style="{ fontFamily: item }">ABCabc123({{ item }})</span>
                                        </el-option>
                                    </el-select>
                                    <el-input class="h5:w-full" placeholder="请输入文字内容" v-model.lazy="el.txt" />
                                    <el-input
                                        class="custom-icon h5:w-full"
                                        placeholder="选择定制图标"
                                        readonly
                                        @click="el.showBox = !el.showBox"
                                    >
                                        <template #suffix>
                                            <el-icon @click.stop="el.showBox = !el.showBox" :class="el.showBox ? 'rotate-180' : 'rotate-0'">
                                                <ArrowDown />
                                            </el-icon>
                                        </template>
                                    </el-input>
                                    <!--  -->
                                    <el-upload class="h5:hidden" action="#" :before-upload="beforeUpload" :auto-upload="true">
                                        <CustomBtn class="h5:hidden" txt="上传我的图标" :active="true" />
                                    </el-upload>
                                </div>
                                <el-tabs class="icon-box h5:mb-[10px]" type="border-card" v-show="el.showBox">
                                    <el-tab-pane label="我的图标">
                                        <div class="icons">
                                            <img @click="el.icon = item" v-for="item in uploadIcon" :key="item" :src="item" />
                                        </div>
                                    </el-tab-pane>
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
                                <!--  -->
                                <el-upload class="pc:hidden" action="#" :before-upload="beforeUpload" :auto-upload="true">
                                    <CustomBtn class="pc:hidden w-full" txt="上传我的图标" :active="true" />
                                </el-upload>
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
                    <div class="title text-right">总计：￥55</div>
                    <CustomBtn class="mb-[10px]" txt="加入购物袋" @click="show = true" />
                    <CustomBtn txt="立即购买" :active="true" />
                </div>
            </div>
        </div>

        <!-- h5 抽屉 -->
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

        <!-- 放大预览鼓棒 -->
        <van-image-preview
            v-model:show="previewShow"
            :images="['']"
            :showIndex="false"
            :loop="false"
            :doubleScale="false"
            :closeOnClickImage="false"
            :closeOnClickOverlay="false"
        >
            <template #image="{ src }">
                <div>
                    <swiper-container ref="swiperRef" :free-mode="true" slides-per-view="auto">
                        <swiper-slide class="w-[200vw] max-w-[200vw]" id="target2">
                            <!-- <img class="w-[500vw] max-w-[500vw]" :src="src" /> -->
                        </swiper-slide>
                    </swiper-container>
                    <p class="text-white text-center mt-[20px]" @touchstart="previewHide" @click="previewHide">
                        <van-icon name="close" size="24px" />
                    </p>
                </div>
            </template>
        </van-image-preview>

        <CustomPopup v-model="show" :show-close="false">
            <div class="w-[100%] p-[40px] flex flex-col items-center">
                <img src="/public/image/Group 652@2x.png" class="w-[70%]" />
                <p class="text-[24px] mt-[10px]">加入购物车成功！</p>
                <div class="flex gap-[20px] my-[20px] w-full">
                    <custom-btn class="flex-[1]" txt="查看购物车" :active="true" />
                    <custom-btn class="flex-[1]" txt="返回首页" />
                </div>
            </div>
        </CustomPopup>
    </div>
</template>

<script setup lang="ts">
// import { CustomNumberIpt } from "#build/components";
import { ShoppingCart, ArrowDown } from "@element-plus/icons-vue";

const show = ref(false);
const fonts = ref([
    "AlexBrush-Regular",
    "Ballpark Weiner",
    "Cooper Regular",
    "HarringtON",
    "Old English",
    "Sofia-Regular",
    "Stencil",
    "engravers_t",
    "gabriola",
    "honey_script_semibold",
]);
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
    // 显示图标选择盒子
    showBox: boolean;
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
        showBox: false,
    },
    B: {
        txt: "",
        fontFamily: "",
        icon: "",
        txtColor: "",
        showBox: false,
    },
    C: {
        txt: "",
        fontFamily: "",
        icon: "",
        txtColor: "",
        showBox: false,
    },
});
const rightForm = reactive<form>({
    A: {
        txt: "",
        fontFamily: "",
        icon: "",
        txtColor: "",
        showBox: false,
    },
    B: {
        txt: "",
        fontFamily: "",
        icon: "",
        txtColor: "",
        showBox: false,
    },
    C: {
        txt: "",
        fontFamily: "",
        icon: "",
        txtColor: "",
        showBox: false,
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
        () => [val.txt, val.txtColor, val.fontFamily, val.icon],
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
        image.onload = async () => {
            // ctx.clearRect(0, 0, 1024, 74);
            ctx.drawImage(image, 0, 0, 1024, 74);
            await drawLogo(type);
            res(true);
        };
        image.src = "/image/鼓棒@2x.png";
    });
}
async function drawLogo(type: "left" | "right") {
    return new Promise((res, rej) => {
        let image = new Image();
        let ctx = type == "left" ? leftCtx : rightCtx;
        image.onload = () => {
            let w = image.width;
            let h = image.height;
            ctx.drawImage(image, 520, 18, w * (36 / h), 36);
            res(true);
        };
        image.src = "/image/logo_black.png";
    });
}
// 绘制图标和文字
async function drawIconTxt(type: "left" | "right") {
    let ctx = type == "left" ? leftCtx : rightCtx;
    let form = type == "left" ? leftForm : rightForm;

    for (const [key, val] of Object.entries(form)) {
        if (key == "A") {
            ctx.textAlign = "right";
            ctx.font = `24px '${val.fontFamily}'`;
            ctx.fillStyle = val.txtColor;
            ctx.fillText(val.txt, 470, 44);

            let image = new Image();
            image.onload = () => {
                let w = image.width;
                let h = image.height;
                ctx.drawImage(image, 170, 17, w * (38 / h), 38);
            };
            image.src = val.icon;
        }
        if (key == "B") {
            ctx.textAlign = "right";
            ctx.font = `24px '${val.fontFamily}'`;
            ctx.fillStyle = val.txtColor;
            ctx.fillText(val.txt, 830, 44);

            let image = new Image();
            image.onload = () => {
                let w = image.width;
                let h = image.height;
                ctx.drawImage(image, 685, 17, w * (38 / h), 38);
            };
            image.src = val.icon;
        }
        if (key == "C") {
            ctx.textAlign = "right";
            ctx.font = `24px '${val.fontFamily}'`;
            ctx.fillStyle = val.txtColor;
            ctx.fillText(val.txt, 975, 44);

            let image = new Image();
            image.onload = () => {
                let w = image.width;
                let h = image.height;
                ctx.drawImage(image, 855, 17, w * (38 / h), 38);
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

const tto = ref<"#target1" | "#target2">("#target1");
const swiperRef = ref();
const previewShow = ref(false);
// 预览
function preview() {
    previewShow.value = true;
    nextTick(() => {
        setTimeout(() => {
            tto.value = "#target2";
        }, 0);
    });
}

function previewHide() {
    previewShow.value = false;
    tto.value = "#target1";
}
</script>

<style lang="scss" scoped>
.gen-box {
    --van-image-preview-overlay-background: rgba(0, 0, 0, 0.5) !important;
    background-color: #fffcf8;
}
.custom-box {
    width: 70vw;
    margin: 0 auto;
    padding: 0px 50px 50px;

    #target1 {
        position: sticky;
        top: 60px;
        background-color: #fffcf8;
        z-index: 11;
        padding-top: 20px;
        .canvas {
            position: relative;
        }
        .mask {
            position: absolute;
            width: 100px;
            height: calc(100% - 60px);
            top: 30px;
            background-color: transparent;
            border: 1px dashed #dad7ce;
            border-radius: 8px;
            z-index: -1;
            & > div {
                position: absolute;
                top: -30px;
                left: 50%;
                transform: translateX(-50%);
                white-space: nowrap;
            }
        }
        .activeMask {
            background-color: #e5e3dc;
        }
        .mask:nth-of-type(1) {
            left: calc((100% * 160) / 1024);
            width: calc((100% * 320) / 1024);
        }
        .mask:nth-of-type(2) {
            left: calc((100% * 680) / 1024);
            width: calc((100% * 160) / 1024);
        }
        .mask:nth-of-type(3) {
            left: calc((100% * 850) / 1024);
            width: calc((100% * 130) / 1024);
        }
    }

    .set {
        display: flex;
        align-items: flex-start;
        .title {
            font-size: 18px;
            // margin-bottom: 15px;
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
                // margin-bottom: 30px;
                & > button {
                    background-color: #fffcf8;
                    width: 100px;
                    border-color: #d6d6d6;
                }
                & > button:nth-of-type(1) {
                    border-top-right-radius: 0px;
                    border-bottom-right-radius: 0px;
                    border-right: none;
                }
                & > button:nth-of-type(2) {
                    border-top-left-radius: 0px;
                    border-bottom-left-radius: 0px;
                }
            }
            .sjgb {
                background-color: #fffcf8;
                padding: 20px;
                border-radius: 10px;
                border: 2px solid var(--main-color-3);

                :deep(.el-collapse) {
                    --el-collapse-border-color: var(--main-color-3);
                    button:not(.custom-btn),
                    div {
                        background-color: transparent !important;
                    }
                }
                .colors {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    margin-bottom: 20px;
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
                    // display: flex;
                    // gap: 10px;
                    // flex-wrap: wrap;
                    // margin-bottom: 10px;
                    & > div {
                        width: calc(50% - 5px);
                        height: 32px;
                    }
                    .custom-btn {
                        width: 120px;
                    }
                    .custom-icon {
                        :deep(.el-input__wrapper) {
                            cursor: pointer;
                            padding: 4px 12px;
                        }
                        :deep(input) {
                            cursor: pointer;
                        }
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
                .icon-box {
                    border-radius: 10px;
                    border-width: 2px;
                    overflow: hidden;
                    --el-border-color: var(--main-color-3) !important;
                    --el-border-color-light: transparent !important;
                    :deep(.is-active) {
                        background-color: var(--main-color-3) !important;
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
            // margin-bottom: 30px;
        }
        h2 {
            font-size: 28px;
            // margin-bottom: 30px;
        }
    }
}
.fixed-bottom {
    display: none;
}
#target2 {
    position: sticky;
    top: 60px;
    background-color: #fffcf8;
    z-index: 11;
    padding: 80px 60px 30px;
    .canvas {
        position: relative;
    }
    .mask {
        position: absolute;
        width: 100px;
        height: calc(100% - 60px);
        top: 30px;
        background-color: transparent;
        border: 3px dashed #dad7ce;
        border-radius: 8px;
        z-index: -1;
        & > div {
            font-size: 36px;
            font-weight: bold;
            position: absolute;
            top: -80px;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
        }
    }
    .activeMask {
        background-color: #e5e3dc;
    }
    .mask:nth-of-type(1) {
        left: calc((100% * 160) / 1024);
        width: calc((100% * 320) / 1024);
    }
    .mask:nth-of-type(2) {
        left: calc((100% * 680) / 1024);
        width: calc((100% * 160) / 1024);
    }
    .mask:nth-of-type(3) {
        left: calc((100% * 850) / 1024);
        width: calc((100% * 130) / 1024);
    }
}
.flexBtn {
    width: 60px;
    margin-right: 20px;
    justify-content: center;
    button {
        border-color: transparent;
        background-color: transparent;
    }
}
:deep(.el-upload) {
    width: 100%;
    // text-align: left;
    justify-content: start;
}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    .custom-box {
        width: 100%;
        padding: 0px;
        .custom-gb {
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
                    // border: 2px solid #fffcf8;
                    // border-radius: 8px;
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
    #target1 {
        top: 40px !important;
        padding: 0 20px;
    }
    #target2 {
        padding: 60px 40px 20px;
        .mask {
            & > div {
                top: -60px;
                font-size: 30px;
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
        border-top: 1px solid #fffcf8;
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
    .flexBtn {
        width: 40px;
        margin-right: 10px;
        button {
            height: 24px;
            line-height: 22px;
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
