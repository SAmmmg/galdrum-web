<!-- 账号信息 -->
<template>
    <div class="account">
        <div class="back" @click="navigateTo('/PersonalCenter/main')">
            <el-icon size="22">
                <Back />
            </el-icon>
            <span>返回</span>
        </div>
        <div class="content">
            <div class="left">
                <GradientBox>
                    <div class="item">
                        <img src="/image/avatar.png" alt="" />
                        <ul>
                            <li v-for="el in ['账户信息', '订单管理', '收货地址']" @click="type = el" :class="{ active: type == el }">
                                <el-icon size="22" style="margin-right: 5px">
                                    <User />
                                </el-icon>
                                <span>{{ el }}</span>
                            </li>
                        </ul>
                    </div>
                </GradientBox>
            </div>
            <div class="right">
                <GradientBox>
                    <el-scrollbar>
                        <div class="zhxx" v-show="type == '账户信息'">
                            <h2>密码设置</h2>
                            <ul>
                                <li>
                                    <el-icon size="32" style="margin-right: 20px">
                                        <User />
                                    </el-icon>
                                    <div>
                                        <p class="huizi">邮箱</p>
                                        <p>支持账号密码登录</p>
                                    </div>
                                    <div class="value">chenli921@gmail.com</div>
                                    <div class="edit">更改邮箱</div>
                                </li>
                                <li>
                                    <el-icon size="32" style="margin-right: 20px">
                                        <User />
                                    </el-icon>
                                    <div>
                                        <p class="huizi">邮箱</p>
                                        <p>支持账号密码登录</p>
                                    </div>
                                    <div class="value">chenli921@gmail.com</div>
                                    <div class="edit">更改邮箱</div>
                                </li>
                                <li>
                                    <el-icon size="32" style="margin-right: 20px">
                                        <User />
                                    </el-icon>
                                    <div>
                                        <p class="huizi">邮箱</p>
                                        <p>支持账号密码登录</p>
                                    </div>
                                    <div class="value">chenli921@gmail.com</div>
                                    <div class="edit">更改邮箱</div>
                                </li>
                            </ul>
                            <el-divider />
                            <h2>账号注销</h2>
                            <p style="color: red">
                                若不再需要此账号，可将其注销。注销成功后，该账号下所有服务，数据将被删除且无法恢复，谨慎操作！
                            </p>
                            <button>注销账号</button>
                        </div>

                        <div class="ddgl" v-show="type == '订单管理'">
                            <h2>最近订单</h2>
                            <div class="header">
                                <div style="width: 40%">订单内容</div>
                                <div style="width: 20%">订单生成时间</div>
                                <div style="width: 15%">订单编号</div>
                                <div style="width: 5%">订单状态</div>
                                <div style="width: 20%">操作</div>
                            </div>
                            <el-scrollbar style="height: calc(100% - 140px)">
                                <ul class="list">
                                    <li v-for="el in 5">
                                        <GradientBox>
                                            <div class="item">
                                                <img src="/blue.png" alt="" />
                                                <div class="fff">
                                                    <p>定制你的鼓棒</p>
                                                    <p>尺寸1 | 颜色1&A区 | 图标1&A区</p>
                                                    <p>￥286</p>
                                                </div>
                                                <div style="margin-left: auto">2023/ 03/27 09:40:00</div>
                                                <div style="margin-left: auto">1211313123131313</div>
                                                <div style="margin-left: auto">待支付</div>
                                                <div class="btns">
                                                    <button>支付</button>
                                                    <button>取消</button>
                                                </div>
                                            </div>
                                        </GradientBox>
                                    </li>
                                </ul>
                            </el-scrollbar>
                        </div>

                        <div class="shdz" v-show="type == '收货地址'">
                            <h2>收货地址</h2>
                            <button class="add">添加地址</button>
                            <ul>
                                <li v-for="el in 4" :key="4">
                                    <h3>收货人：Peter</h3>
                                    <p>86-15989786756</p>
                                    <p>
                                        广东省 深圳市 龙岗区 坂田街道 <br />
                                        光雅园二巷12号
                                    </p>
                                    <p class="btns">
                                        <button class="edit">修改</button>
                                        <button class="del">删除</button>
                                    </p>
                                    <button class="mr">设为默认</button>
                                </li>
                            </ul>
                        </div>
                    </el-scrollbar>
                </GradientBox>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Back, User } from "@element-plus/icons-vue";

const type = ref("账户信息");
</script>

<style lang="scss" scoped>
.account {
    width: 100%;
    height: 100vh;
    color: #fff;
    padding: 80px;
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
    .content {
        height: 100%;
        display: flex;
        .left {
            width: 200px;
            margin-right: 10px;
            .item {
                padding: 40px 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                & > img {
                    width: 100px;
                    height: 100px;
                    margin-bottom: 30px;
                }
                ul {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    li {
                        width: 100%;
                        height: 40px;
                        line-height: 40px;
                        color: #ccc;
                        background-color: rgba($color: #fff, $alpha: 0.1);
                        text-align: center;
                        font-size: 16px;
                        border-radius: 4px;
                        margin-bottom: 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                    }
                    .active {
                        background-color: var(--base-color);
                    }
                }
            }
        }
        .right {
            flex: 1;
            .zhxx {
                padding: 40px;
                ul {
                    li {
                        display: flex;
                        align-items: center;
                        margin-top: 30px;
                        .value {
                            margin: 0 auto;
                        }
                        .edit {
                            color: #fff;
                            border: 1px solid #fff;
                            border-radius: 4px;
                            background-color: transparent;
                            text-align: center;
                            height: 40px;
                            line-height: 40px;
                            font-size: 16px;
                            width: 100px;
                            cursor: pointer;
                        }
                        .huizi {
                            font-size: 20px;
                            margin-bottom: 10px;
                        }
                    }
                }
                h2 {
                    font-size: 28px;
                    margin-bottom: 20px;
                }
                & > button {
                    color: red;
                    border: 1px solid red;
                    border-radius: 4px;
                    background-color: rgba($color: #ff0000, $alpha: 0.2);
                    height: 40px;
                    line-height: 40px;
                    font-size: 16px;
                    // width: 100px;
                    padding: 0 20px;
                    cursor: pointer;
                    margin-top: 30px;
                }
            }
            .ddgl {
                padding: 40px;
                position: relative;
                height: 100%;
                h2 {
                    font-size: 28px;
                    margin-bottom: 20px;
                }
                .header {
                    display: flex;
                    align-items: center;
                    padding: 15px 0px;
                    height: 50px;
                    background-color: rgba($color: #fff, $alpha: 0.1);
                    margin-bottom: 10px;
                    border-radius: 4px;
                    div {
                        text-align: center;
                        white-space: nowrap;
                    }
                }
                .list {
                    li {
                        margin-bottom: 10px;
                    }
                    .item {
                        display: flex;
                        align-items: center;
                        height: 120px;
                        padding: 10px;
                        justify-content: space-between;
                        .fff {
                            margin-right: auto;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            height: 100%;
                            & > p:nth-of-type(1) {
                                font-size: 20px;
                            }
                            & > p:nth-of-type(3) {
                                // border: 0.5px solid rgba(35, 66, 210, 1)
                                font-size: 18px;
                            }
                        }
                        img {
                            width: 100px;
                            height: 100px;
                            border-radius: 10px;
                            margin-right: 10px;
                        }
                        .btns {
                            margin-left: auto;

                            button {
                                color: #fff;
                                border: 1px solid #fff;
                                border-radius: 4px;
                                background-color: transparent;
                                height: 34px;
                                line-height: 34px;
                                // font-size: 16px;
                                padding: 0 15px;
                                cursor: pointer;
                            }
                            button:nth-of-type(1) {
                                color: rgba(132, 154, 255, 1);
                                border-color: rgba(132, 154, 255, 1);

                                // border: 1px solid
                            }
                            button:nth-of-type(2) {
                                margin-left: 20px;
                            }
                        }
                    }
                }
            }
            .shdz {
                padding: 40px;
                position: relative;
                h2 {
                    font-size: 28px;
                    margin-bottom: 20px;
                }
                .add {
                    position: absolute;
                    top: 40px;
                    right: 40px;
                    color: #fff;
                    border: 1px solid var(--base-color);
                    border-radius: 4px;
                    background-color: var(--base-color);
                    height: 40px;
                    line-height: 40px;
                    font-size: 16px;
                    // width: 100px;
                    padding: 0 20px;
                    cursor: pointer;
                }
                ul {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    li {
                        width: calc((100% - 40px) / 3);
                        margin-right: 20px;
                        margin-bottom: 20px;
                        background-color: rgba($color: #fff, $alpha: 0.1);
                        border-radius: 10px;
                        padding: 20px;
                        position: relative;
                        h3,
                        p {
                            margin-bottom: 10px;
                        }
                        .btns {
                            display: flex;
                            justify-content: flex-end;
                            margin-top: 20px;
                            margin-bottom: 0px;
                            button {
                                border: 1px solid transparent;
                                border-radius: 4px;
                                background-color: rgba($color: #fff, $alpha: 0.1);
                                height: 34px;
                                line-height: 34px;
                                font-size: 16px;
                                padding: 0 15px;
                                cursor: pointer;
                            }
                            .edit {
                                color: rgba(132, 154, 255, 1);
                            }
                            .del {
                                color: red;
                                border-color: red;
                                background-color: rgba($color: #ff0000, $alpha: 0.2);
                                margin-left: 10px;
                            }
                        }
                        .mr {
                            position: absolute;
                            top: 20px;
                            right: 20px;

                            color: #fff;
                            border: 1px solid #fff;
                            border-radius: 4px;
                            background-color: rgba($color: #fff, $alpha: 0.1);
                            height: 28px;
                            line-height: 28px;
                            font-size: 16px;
                            padding: 0 5px;
                            cursor: pointer;
                            font-size: 12px;
                        }
                    }
                    li:nth-child(3n) {
                        margin-right: 0px;
                    }
                }
            }
        }
    }
}
</style>
