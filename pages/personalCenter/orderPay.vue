<template>
    <div class="order-pay">
        <div class="back" @click="navigateTo('/PersonalCenter/main')">
            <el-icon size="22">
                <Back />
            </el-icon>
            <span>返回</span>
        </div>

        <div class="box1">
            <h1>订单支付</h1>
        </div>

        <div class="content">
            <div class="left">
                <GradientBox>
                    <div class="item">
                        <p>订单金额：</p>
                        <p class="jianju">
                            <span style="color: #fff; font-size: 28px">￥286</span>
                        </p>
                        <p>订单编号：</p>
                        <p class="jianju">
                            <span style="color: #fff">12341234123412342134</span>
                        </p>
                        <p>购买内容：</p>
                        <p class="jianju">
                            <span style="color: #fff">鼓棒商品名称/尺寸1/颜色1&A区/ <br />图标1&A区 </span>
                        </p>
                        <p v-show="type == 'success'">支付方式：</p>
                        <p class="jianju" v-show="type == 'success'">
                            <span style="color: #fff">微信支付 </span>
                        </p>
                    </div>
                </GradientBox>
            </div>
            <div class="right">
                <GradientBox>
                    <div class="item" v-show="type == 'pay'">
                        <img src="/image/ewm.png" alt="" />
                        <div class="btns">
                            <button @click="type = 'success'">
                                <img src="/image/wx.png" alt="" />
                                微信支付
                            </button>
                            &nbsp; &nbsp;
                            <button @click="type = 'success'">
                                <img src="/image/zfb.png" alt="" />
                                支付宝
                            </button>
                        </div>
                        <div class="bot">支付遇到问题，<span>联系客服</span></div>
                    </div>

                    <div class="item2" v-show="type == 'success'">
                        <img src="/image/image_16.png" alt="" />
                        <p>支付成功</p>
                        <div class="btns">
                            <button style="color: #fff; background-color: var(--base-color); border-color: var(--base-color)">查看订单</button>
                            &nbsp; &nbsp;
                            <button @click="type = 'pay'">继续浏览商品</button>
                        </div>
                    </div>
                </GradientBox>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Back } from "@element-plus/icons-vue";

const type = ref<"pay" | "success">("success");
</script>

<style lang="scss" scoped>
.order-pay {
    width: 100%;
    height: 100vh;
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
}
.content {
    display: flex;
    flex: 1;
    .left {
        width: 40%;
        height: 100%;
        margin-right: 20px;
        .item {
            padding: 40px;
            p {
                color: rgba($color: #fff, $alpha: 0.6);
                font-size: 20px;
            }
            .jianju {
                margin-top: 10px;
                margin-bottom: 40px;
            }
        }
    }
    .right {
        height: 100%;
        flex: 1;
        .item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 100%;
            align-items: center;
            // padding: 30px 0px;
            padding-top: 100px;
            padding-bottom: 30px;
            & > img {
                width: 200px;
                height: 200px;
            }
            .btns {
                display: flex;
                margin-top: 40px;
                button {
                    border: 1px solid #fff;
                    border-radius: 4px;
                    // text-align: center;
                    width: 160px;
                    height: 42px;
                    line-height: 42px;
                    display: flex;
                    align-items: center;
                    background-color: transparent;
                    color: #fff;
                    justify-content: center;
                    font-size: 20px;
                    cursor: pointer;
                    &:hover {
                        border-color: var(--base-color);
                        background-color: rgba($color: #2342d2, $alpha: 0.2);
                    }
                    img {
                        margin-right: 10px;
                    }
                }
            }
            .bot {
                margin-top: auto;
                span {
                    color: rgba(132, 154, 255, 1);
                }
            }
        }
        .item2 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 100%;
            align-items: center;
            // padding: 30px 0px;
            padding: 100px 0px;
            & > img {
                width: 200px;
                height: 200px;
            }
            & > p {
                font-size: 20px;
                margin-top: 20px;
                margin-bottom: 40px;
            }
            .btns {
                display: flex;
                button {
                    border: 1px solid #fff;
                    border-radius: 4px;
                    // text-align: center;
                    width: 160px;
                    height: 42px;
                    line-height: 42px;
                    display: flex;
                    align-items: center;
                    background-color: transparent;
                    color: #fff;
                    justify-content: center;
                    font-size: 20px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
