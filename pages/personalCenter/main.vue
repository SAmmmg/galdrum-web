<template>
    <div class="main">
        <div class="left">
            <div class="top">
                <img src="/image/Group_71.png" alt="" />
                <div>
                    <div class="blue">
                        <img src="/image/logo.png" alt="" />
                    </div>
                    <img src="/image/Group_75.png" @click="navigateTo('/PersonalCenter/custom')" />
                </div>
            </div>
            <div class="bottom">
                <div>
                    <img @click="navigateTo('/PersonalCenter/delicate')" src="/image/Group_73.png" alt="" />
                    <img src="/image/Group_74.png" @click="navigateTo('/PersonalCenter/shoppingCart')" alt="" />
                </div>
            </div>
        </div>
        <div class="right">
            <div class="avatar">
                <div style="background: url('/image/Group_30.png') no-repeat rgba(35, 34, 32, 1); background-size: 100% 100%">
                    <div class="user">
                        <img src="/image/avatar.png" @click="navigateTo('/PersonalCenter/account')" alt="" />
                        <div>
                            <button @click="navigateTo('/PersonalCenter/order')">我的订单</button>
                            <button @click="navigateTo('/PersonalCenter/faq')">常见问题</button>
                        </div>
                    </div>
                    <p>个人中心</p>
                </div>
            </div>
            <div class="grxh">
                <img src="/image/Group_72.png" alt="" />
            </div>
        </div>

        <CustomDialog v-model="isShow" :show-close="false" width="400">
            <template #header>
                <div class="header">
                    <img src="/image/logo2.png" />
                    <div>
                        <el-icon @click="isShow = false" size="22"><SemiSelect /></el-icon>
                        <el-icon @click="isShow = false" size="22" style="margin-left: 10px"><CloseBold /></el-icon>
                    </div>
                </div>
            </template>
            <div class="dialog-box">
                <h2>{{ arr.find(e => e.type == type)?.title }}</h2>
                <template v-if="type == 'login_or_register'">
                    <el-input placeholder="账号" />
                    <div class="flex">
                        <el-input placeholder="请输入验证码" />
                        <button class="get">获取验证码</button>
                    </div>
                    <button>进入</button>
                    <div style="text-align: right; color: #fff; font-size: 12px; margin-top: -10px">
                        您也可以使用<a class="zise" @click="type = 'login'" href="#"> 密码登录</a>
                    </div>
                </template>

                <template v-else-if="type == 'login'">
                    <el-input placeholder="账号" />
                    <el-input type="password" placeholder="请输入登录密码" />
                    <button>进入</button>
                    <div style="display: flex; justify-content: space-between; color: #fff; font-size: 12px; margin-top: -10px">
                        <span style="color: #999; cursor: pointer" @click="type = 'find_pwd'">忘记密码？</span>
                        <span> 您也可以使用<a class="zise" @click="type = 'login_or_register'" href="#"> 验证码登录</a> </span>
                    </div>
                </template>

                <template v-else-if="type == 'register'">
                    <el-input placeholder="请输入手机号/邮箱" />
                    <div class="flex">
                        <el-input placeholder="请输入验证码" />
                        <button class="get">获取验证码</button>
                    </div>
                    <el-input type="password" placeholder="新密码（8-16位，同时包含字母和数字）" />
                    <button>注册</button>
                    <div style="text-align: center; margin-top: -10px">
                        <el-checkbox label="我已阅读并同意" />
                        <a href="#" class="zise">《XX服务协议》</a>
                    </div>
                </template>

                <template v-else-if="type == 'find_pwd'">
                    <el-input placeholder="账号（手机号/邮箱）" />
                    <div style="margin-top: -10px">请填写您需要找回密码的帐号</div>
                    <button @click="type = 'verify'">继续</button>
                </template>

                <template v-else-if="type == 'verify'">
                    <el-input placeholder="请输入手机号/邮箱" />
                    <div class="flex">
                        <el-input placeholder="请输入验证码" />
                        <button class="get">获取验证码</button>
                    </div>
                    <button @click="type = 'reset'">下一步</button>
                </template>

                <template v-else-if="type == 'reset'">
                    <el-input placeholder="新密码" />
                    <el-input placeholder="确认新密码" />
                    <button>确认重置</button>
                </template>
            </div>
            <template #footer>
                <template v-if="type == 'login_or_register'">
                    <div class="footer">注册即表明同意 <a class="zise" href="#">《XX服务协议》</a></div>
                </template>
                <template v-else-if="type == 'login'">
                    <div class="footer"><a class="zise" @click="type = 'register'" href="#">注册账号</a></div>
                </template>
                <template v-else-if="type == 'register'">
                    <div class="footer"><a class="zise" @click="type = 'login'" href="#">回到登录页</a></div>
                </template>
                <template v-else-if="type == 'find_pwd'">
                    <div class="footer"><a class="zise" @click="type = 'login'" href="#">回到登录页</a></div>
                </template>
                <template v-else-if="type == 'verify'">
                    <div class="footer"><a class="zise" @click="type = 'find_pwd'" href="#">上一步</a></div>
                </template>
                <template v-else-if="type == 'reset'">
                    <div class="footer"><a class="zise" @click="type = 'login'" href="#">回到登录页</a></div>
                </template>
            </template>
        </CustomDialog>
    </div>
</template>

<script setup lang="ts">
import { SemiSelect, CloseBold } from "@element-plus/icons-vue";

const arr = ref([
    {
        type: "login_or_register",
        title: "登录或注册",
    },
    {
        type: "login",
        title: "密码登录",
    },
    {
        type: "register",
        title: "账号注册",
    },
    {
        type: "find_pwd",
        title: "找回密码",
    },
    {
        type: "verify",
        title: "身份验证",
    },
    {
        type: "reset",
        title: "重置密码",
    },
]);
// 登录或注册、登录、注册、找回密码、身份验证、重置密码
const type = ref<"login_or_register" | "login" | "register" | "find_pwd" | "verify" | "reset">("login_or_register");
const isShow = ref(false);
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    padding: 30px;
    display: flex;
}
.left {
    width: 70%;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
        display: flex;
        justify-content: space-between;
        & > img {
            width: 40%;
        }
        & > div {
            width: calc(60% - 30px);
        }
        & > div {
            display: flex;
            flex-direction: column;
            .blue {
                background-color: #2342d2;
                position: relative;
                border-radius: 30px;
                // aspect-ratio: 72 / 37;
                // margin-bottom: 20px;
                width: 100%;
                flex: 1;
                // height: calc(100% - 20p);
                img {
                    width: 100%;
                    position: absolute;
                    // width: 80%;
                    width: 300px;
                    height: auto;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
            & > img {
                margin-top: 30px;
                width: 100%;
                cursor: pointer;
            }
        }
    }
    .bottom {
        width: 100%;
        position: relative;
        margin-top: 30px;
        flex: 1;

        div {
            position: absolute;
            height: 100%;
            width: 100%;
            display: flex;
            img:nth-of-type(1) {
                height: 100%;
                cursor: pointer;
            }
            img:nth-of-type(2) {
                margin-left: 30px;
                flex: 1;
                height: 100%;
                cursor: pointer;
            }
        }
    }
}
.right {
    flex: 1;
    .avatar {
        width: 100%;
        aspect-ratio: 51 / 38;
        position: relative;
        background-color: #1d1c1b;
        z-index: 2;
        & > div {
            position: relative;
            z-index: 1;
            background-color: rgba(35, 34, 32, 1);

            width: 100%;
            height: 100%;
            padding: 30px;
            border-radius: 30px;
            & > p {
                position: absolute;
                bottom: 30px;
                left: 30px;
                font-size: 48px;
                color: white;
            }
        }

        .user {
            position: absolute;
            top: 30px;
            left: 30px;
            display: flex;

            & > img {
                margin-right: 30px;
                width: 100px;
                cursor: pointer;
            }
            & > div {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                button {
                    height: 40px;
                    border: 1px solid rgba(117, 117, 117, 1);
                    background-color: transparent;
                    border-radius: 20px;
                    padding: 0 20px;
                    color: #fff;
                    font-size: 24px;
                    cursor: pointer;
                    white-space: nowrap;
                }
            }
        }
    }
    .grxh {
        margin-top: 10px;
        img {
            width: 100%;
            height: auto;
        }
    }
}
</style>

<style lang="scss" scoped>
.el-input {
    :deep(.el-input__wrapper) {
        background-color: #1f1f1e;
    }
}
.flex {
    display: flex;
    align-items: center;
}
.zise {
    color: #849aff;
}
.get {
    margin-left: 10px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    height: 34px;
    line-height: 34px;
    padding: 0 15px;
    cursor: pointer;
    color: rgba(132, 154, 255, 1);
    border-color: rgba(132, 154, 255, 1);
    white-space: nowrap;
    background-color: rgba($color: #849aff, $alpha: 0.1);
}

.header {
    display: flex;
    align-items: center;
    img {
        width: auto;
        height: 36px;
    }
    & > div {
        margin-left: auto;
        cursor: pointer;
    }
}
.footer {
    text-align: center;
    font-size: 12px;
}
.dialog-box {
    min-height: 300px;
    & > div,
    & > button {
        margin-bottom: 20px;
    }
    h2 {
        color: #fff;
        font-size: 32px;
        text-align: center;
        margin-bottom: 20px;
    }
    & > button {
        width: 100%;
        border: 1px solid var(--base-color);
        border-radius: 4px;
        height: 34px;
        line-height: 34px;
        cursor: pointer;
        color: #fff;
        white-space: nowrap;
        background-color: var(--base-color);
    }
}
</style>
