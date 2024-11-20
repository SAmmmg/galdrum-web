<template>
    <div class="shoppingCart">
        <div class="back" @click="navigateTo('/PersonalCenter/main')">
            <el-icon size="22">
                <Back />
            </el-icon>
            <span>返回</span>
        </div>

        <div class="box1">
            <h1>购物车</h1>
        </div>

        <div class="content">
            <GradientBox style="position: relative; flex: 1">
                <div class="sp" v-show="arr.length">
                    <div>全部商品（{{ arr.length }}）</div>
                    <ul>
                        <li v-for="el in arr" :key="el.id">
                            <el-checkbox v-model="el.bool" />
                            <img src="/blue.png" alt="" />
                            <div>
                                <p>定制你的鼓棒</p>
                                <br />
                                <p>尺寸1|颜色1&A区|图标1&A区</p>
                            </div>
                            <span class="price"> ￥299 </span>
                            <el-input-number size="small" v-model="el.num" :min="1" />
                            <el-button type="danger" plain @click="arr = arr.filter(e => e.id !== el.id)">删除</el-button>
                        </li>
                    </ul>
                </div>

                <div class="nothing" v-show="!arr.length">
                    <img src="/image/Group_69.png" alt="" />
                    <p>购物车没有商品</p>
                </div>
            </GradientBox>

            <GradientBox style="width: 20%; margin-left: 20px" v-show="arr.filter(e => e.bool).length">
                <div class="jsuan">
                    <div style="font-size: 24px">结算明细</div>
                    <img src="/blue.png" alt="" />
                    <div>
                        <span>商品总价</span>
                        <span>￥299</span>
                    </div>
                    <div>
                        <span>优惠券</span>
                        <span>减￥0</span>
                    </div>
                    <br />
                    <div>
                        <span>合计</span>
                        <span class="price">￥299</span>
                    </div>
                    <button>结算（{{ arr.filter(e => e.bool).length }}）</button>
                </div>
            </GradientBox>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Back } from "@element-plus/icons-vue";

const arr = ref([
    {
        title: "定制你的鼓棒",
        id: 1,
        bool: false,
        num: 1,
    },
    {
        title: "定制你的鼓棒",
        id: 2,
        bool: false,
        num: 1,
    },
    {
        title: "定制你的鼓棒",
        id: 3,
        bool: false,
        num: 1,
    },
]);
</script>

<style lang="scss" scoped>
.shoppingCart {
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    color: #fff;
    padding: 80px;
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
        h1 {
            font-size: 48px;
            margin-bottom: 20px;
        }
    }

    .content {
        flex: 1;
        color: #fff;
        display: flex;
        .nothing {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            // display: fle;
            text-align: center;
            img {
                width: 200px;
            }
        }
        .sp {
            padding: 30px;
            & > div {
                margin-bottom: 20px;
            }
            ul {
                display: flex;
                flex-direction: column;
                li {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 20px;
                    img {
                        width: 100px;
                        height: 100px;
                        border-radius: 4px;
                    }
                    .el-button {
                        background-color: transparent;
                        border-color: rgba(246, 43, 43, 1);
                        color: rgba(246, 43, 43, 1);
                    }
                }
            }
        }
        .jsuan {
            padding: 30px;
            display: flex;
            flex-direction: column;
            height: 100%;
            .price {
                font-size: 24px;
                color: rgba(132, 154, 255, 1);
            }

            img {
                width: 100px;
                height: 100px;
                border-radius: 4px;
                margin-bottom: 20px;
            }
            & > div {
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;
                align-items: center;
            }
            & > button {
                margin-top: auto;
                background-color: var(--base-color);
                height: 30px;
                line-height: 30px;
                border: none;
                border-radius: 4px;
                color: #fff;
                width: 100%;
                max-width: 200px;
                margin-left: auto;
                margin-right: auto;
            }
        }
    }
}
</style>
