<template>
    <div class="order">
        <div class="back" @click="navigateTo('/PersonalCenter/main')">
            <el-icon size="22">
                <Back />
            </el-icon>
            <span>返回</span>
        </div>

        <div class="box1">
            <h1>确认订单</h1>
        </div>

        <div class="content">
            <div class="left">
                <GradientBox>
                    <div class="item">
                        <div class="title">收货地址</div>
                        <ul>
                            <li>
                                <span>所在地区</span>
                                <el-select v-model="obj.sss" placeholder="省、市、区">
                                    <el-option :label="1" :value="1" />
                                    <el-option :label="2" :value="2" />
                                    <el-option :label="3" :value="3" />
                                </el-select>
                            </li>
                            <li>
                                <span>详细地址</span>
                                <el-input></el-input>
                            </li>
                            <li>
                                <span>收货人</span>
                                <el-input></el-input>
                            </li>
                            <li>
                                <span>手机号</span>
                                <div class="jia">+86</div>
                                <el-input style="flex: 1"></el-input>
                            </li>
                        </ul>

                        <el-checkbox v-model="obj.save" label="保存地址" />
                    </div>
                </GradientBox>
            </div>
            <div class="right">
                <GradientBox>
                    <div class="item">
                        <div class="title">商品信息</div>
                    </div>
                </GradientBox>
            </div>
        </div>

        <div class="bottom">
            <span>应付金额：{{ obj.price }}</span>
            <button>提交订单</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Back } from "@element-plus/icons-vue";

const obj = reactive({
    price: 1144,
    save: false,
    sss: "",
});
</script>

<style lang="scss" scoped>
.order {
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
    .bottom {
        display: flex;
        justify-content: space-between;
        align-content: center;
        span {
            font-size: 20px;
        }
        button {
            // margin-top: auto;
            color: #fff;
            // width: 100%;
            padding: 0 30px;
            background-color: var(--base-color);
            border: none;
            border-radius: 4px;
            height: 30px;
            line-height: 30px;
            cursor: pointer;
        }
    }
    .content {
        color: #fff;
        display: flex;
        margin-bottom: 20px;
        flex: 1;
        // .left,
        // .right {
        //     padding: 30px;
        // }
        .item {
            padding: 30px;
            .title {
                font-size: 20px;
                margin-bottom: 30px;
            }
        }
        .left {
            width: 40%;
            margin-right: 20px;
            .item {
                & > ul {
                    li {
                        display: flex;
                        align-items: center;
                        // align-self: center;
                        margin-bottom: 20px;
                        --el-input-border-color: rgba(255, 255, 255, 0.2);
                        & > span {
                            display: inline-block;
                            width: 80px;
                            margin-right: 20px;
                            white-space: nowrap;
                        }
                        .jia {
                            border-radius: 4px;
                            border: 2px solid rgba(255, 255, 255, 0.6);
                            // box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2) inset;

                            // height: 100%;
                            height: 32px;
                            line-height: 32px;
                            padding: 0 10px;
                            margin-right: 10px;
                        }
                        .el-select {
                            flex: 1;
                            :deep(.el-select__wrapper) {
                                background-color: transparent;
                            }
                        }
                        .el-input {
                            flex: 1;
                            :deep(.el-input__wrapper) {
                                background-color: transparent;
                            }
                        }
                    }
                }
            }
        }
        .right {
            flex: 1;
        }
    }
}
</style>
