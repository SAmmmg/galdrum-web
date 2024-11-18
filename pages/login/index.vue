<!-- 登录页（海外、国内） -->
<template>
    <div class="login-mask">
        <div class="box">
            <template v-if="type == 'login_or_register'">
                <div class="title">登录或注册</div>
                <el-input size="large" v-model="form.phone" placeholder="账号" />
                <div class="yzm">
                    <el-input size="large" v-model="form.code" placeholder="请输入验证码" />
                    <el-button style="margin-left: 20px" size="large" plain>获取验证码</el-button>
                </div>
                <el-button size="large" type="primary">进入</el-button>
                <div style="justify-content: flex-end">您也可以使用&nbsp;<el-link type="primary" :underline="false">密码登录</el-link></div>

                <div class="agreement">注册即表明同意《XX服务协议》</div>
            </template>
            <template v-else-if="type == 'login'">
                <div class="title">密码登录</div>
                <el-input size="large" v-model="form.phone" placeholder="账号（手机号/邮箱）" />
                <el-input size="large" v-model="form.phone" placeholder="请输入登录密码" />
                <el-button size="large" type="primary">进入</el-button>
                <div style="justify-content: space-between">
                    <el-link type="info" :underline="false">忘记密码？</el-link>
                    <span style="margin-left: auto"> 您也可以使用&nbsp; </span>
                    <el-link type="primary" :underline="false">密码登录</el-link>
                </div>
                <div class="agreement">
                    <el-link type="primary" :underline="false">注册账号</el-link>
                </div>
            </template>
            <template v-else-if="type == 'register'">
                <div class="title">账号注册</div>
                <el-input size="large" v-model="form.phone" placeholder="请输入手机号/邮箱" />
                <div class="yzm">
                    <el-input size="large" v-model="form.code" placeholder="请输入验证码" />
                    <el-button style="margin-left: 20px" size="large" plain>获取验证码</el-button>
                </div>
                <el-input
                    v-model="form.password"
                    size="large"
                    type="password"
                    placeholder="新密码（8-16位，同时包含字母和数字）"
                    show-password
                />
                <el-button size="large" type="primary">注册</el-button>
                <el-checkbox v-model="form.yes">我已阅读并同意同意《XX服务协议》</el-checkbox>
                <div class="agreement">回到登录页</div>
            </template>
            <template v-else-if="type == 'find_pwd'">
                <div class="title">找回密码</div>
                <el-input size="large" v-model="form.phone" placeholder="账号（手机号/邮箱）" />
                <el-button size="large" type="primary">继续</el-button>
                <div class="agreement">回到登录页</div>
            </template>
            <template v-else-if="type == 'verify'">
                <div class="title">身份验证</div>
                <el-select v-model="value" placeholder="Select" size="large">
                    <!-- <el-option key="123手机号验证" label="123手机号验证" :value="1" /> -->
                    <!-- <el-option key="123邮箱验证" label="123邮箱验证" :value="2" /> -->
                    <el-option v-for="item in 10" :key="item" :label="item" :value="item" />
                </el-select>
                <div class="yzm">
                    <el-input size="large" v-model="form.code" placeholder="请输入验证码" />
                    <el-button style="margin-left: 20px" size="large" plain>获取验证码</el-button>
                </div>
                <el-button size="large" type="primary">下一步</el-button>
                <div class="agreement">上一步</div>
            </template>
            <template v-else-if="type == 'reset'">
                <div class="title">登录或注册</div>
                <el-input v-model="form.password" size="large" type="password" placeholder="新密码" show-password />
                <el-input v-model="form.password" size="large" type="password" placeholder="确认新密码" show-password />
                <el-button size="large" type="primary">确认重置</el-button>
                <div class="agreement">回到登录页</div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";

definePageMeta({
    name: "login",
});
const value = ref("");
const route = useRoute();
// 登录或注册、登录、注册、找回密码、身份验证、重置密码
const type = ref<"login_or_register" | "login" | "register" | "find_pwd" | "verify" | "reset">("reset");
const form = reactive({
    phone: "",
    password: "",
    code: "",
    yes: false,
});
</script>

<style lang="scss" scoped>
.login-mask {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 999;
    background-color: rgba($color: #ffffff, $alpha: 1);
    .box {
        width: 400px;
        height: 550px;
        box-shadow: var(--el-box-shadow-light);
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > button {
            width: 100%;
            margin-bottom: 15px;
        }
        & > div {
            width: 100%;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        .yzm {
            display: flex;
        }
        .title {
            margin-bottom: 30px;
            font-size: 26px;
            text-align: center;
            // align-items: center;
            justify-content: center;
        }
        .agreement {
            position: absolute;
            bottom: 10px;
            left: 0;
            justify-content: center;
            margin-bottom: 0px;
            font-size: 12px;
            color: #666;
            cursor: pointer;
            // transform: translateX(-50%);
        }
        :deep(.el-select__wrapper) {
            width: 100%;
        }
    }
}
</style>
