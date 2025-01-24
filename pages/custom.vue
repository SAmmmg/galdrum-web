<template>
    <div style="background-color: var(--main-color-3)">
        <div class="custom-box">
            <div>70vw70vw</div>
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
                                <div>
                                    Consistent with <br />
                                    <el-select v-model="ac" placeholder="选择定制字体">
                                        <el-option v-for="item in 3" :key="item" :label="item" :value="item" />
                                    </el-select>
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
    </div>
</template>

<script setup lang="ts">
const ac = ref(1);
</script>

<style lang="scss" scoped>
.custom-box {
    width: 70vw;
    margin: 0 auto;
    padding: 50px;
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
