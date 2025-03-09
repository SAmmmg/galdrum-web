<template>
    <AppHeader></AppHeader>
    <div class="app-main" style="">
        <NuxtPage />
        <form ref="formRef" class="invisible w-0 h-0" action="https://wp.cymmc.top/my-account/" method="post">
            <input name="username" v-model="loginForm.user" type="text" />
            <input name="password" v-model="loginForm.password" type="text" />
            <input name="rememberme" value="forever" type="text" />
            <input name="woocommerce-login-nonce" v-model="loginForm.nonce" type="text" />
            <input name="_wp_http_referer" value="/single.php" type="text" />
            <input name="login" value="登录" type="text" />
        </form>
    </div>
    <AppFooter></AppFooter>

    <custom-popup v-model="show">
        <div class="p-[20px]">
            <div class="flex flex-col justify-start min-h-[50vh] relative pb-[40px]">
                <!-- 密码登录 -->
                <template v-if="type == '密码登录'">
                    <p class="text-[28px] mb-[20px] h-[80px] leading-[80px] text-center">{{ type }}</p>
                    <el-input v-model="loginForm.user" class="custom-ipt mb-[20px]" placeholder="账号(手机号/邮箱)" />
                    <el-input v-model="loginForm.password" class="custom-ipt mb-[20px]" placeholder="请输入登录密码" type="password" />
                    <custom-btn class="mb-[10px] h-[40px] leading-[38px]" txt="登录" :active="true" @click="clickLogin"></custom-btn>
                    <!-- <p class="text-right">
                        <span class="text-[#485fde]">验证码登录</span>
                    </p> -->

                    <div class="absolute left-[50%] bottom-0 translate-x-[-50%]">
                        <span>还没有账号？</span>
                        <span class="text-[#485fde] cursor-pointer" @click="type = '账号注册'">立即注册</span>
                    </div>
                </template>

                <!-- 账号注册 -->
                <template v-if="type == '账号注册'">
                    <p class="text-[28px] mb-[20px] h-[80px] leading-[80px] text-center">{{ type }}</p>
                    <el-input v-model="registerForm.user" class="custom-ipt mb-[20px]" placeholder="请输入你的用户名" />
                    <div class="mb-[20px] flex">
                        <el-input v-model="registerForm.email" class="custom-ipt" placeholder="请输入你的邮箱" />
                        <!-- <custom-btn class="h-[40px] leading-[38px] ml-[10px] w-[160px]" txt="获取验证码"></custom-btn> -->
                    </div>
                    <el-input v-model="registerForm.password" class="custom-ipt mb-[20px]" placeholder="请设置登录密码" />
                    <el-input v-model="qrPassword" class="custom-ipt mb-[20px]" placeholder="请确认登录密码" />
                    <custom-btn class="mb-[10px] h-[40px] leading-[38px]" txt="注册" :active="true" @click="clickRegister"></custom-btn>
                    <!-- <p class="text-right">
                        <span class="text-[#485fde]" @click="type = '密码登录'">密码登录</span>
                    </p> -->

                    <div class="absolute left-[50%] bottom-0 translate-x-[-50%]">
                        <span>已有账号？</span>
                        <span class="text-[#485fde] cursor-pointer" @click="type = '密码登录'">直接登录</span>
                    </div>
                </template>

                <!-- 验证码登录 -->
                <template v-if="type == '验证码登录'">
                    <p class="text-[28px] mb-[20px] h-[80px] leading-[80px] text-center">{{ type }}</p>
                    <el-input class="custom-ipt mb-[20px]" placeholder="账号(手机号/邮箱)" />
                    <div class="mb-[20px] flex">
                        <el-input class="custom-ipt" placeholder="请输入验证码" />
                        <custom-btn class="h-[40px] leading-[38px] ml-[10px] w-[160px]" txt="获取验证码"></custom-btn>
                    </div>
                    <custom-btn class="mb-[10px] h-[40px] leading-[38px]" txt="登录" :active="true"></custom-btn>
                    <p class="text-right">
                        <span class="text-[#485fde] cursor-pointer" @click="type = '密码登录'">密码登录</span>
                    </p>
                    <div class="absolute left-[50%] bottom-0 translate-x-[-50%]">
                        <span>还没有账号？</span>
                        <span class="text-[#485fde] cursor-pointer" @click="type = '账号注册'">立即注册</span>
                    </div>
                </template>
            </div>
        </div>
    </custom-popup>
</template>

<script lang="ts" setup>
import { UserLogin, UserNonce, UserRegister } from "~/apis/user";

const route = useRoute();

onBeforeMount(() => {
    const { userData } = toRefs(useUser());
    let u = localStorage.getItem("userData") || "";
    if (u) {
        Object.assign(userData.value, JSON.parse(u)[0]);
    }
    pd();
});
//#region 字体加载
onMounted(() => {
    let fonts = [
        { name: "AlexBrush-Regular", url: "/font/AlexBrush-Regular.ttf" },
        { name: "Ballpark Weiner", url: "/font/Ballpark Weiner.otf" },
        { name: "Cooper Regular", url: "/font/Cooper Regular.ttf" },
        { name: "HarringtON", url: "/font/HarringtON.TTF" },
        { name: "Old English", url: "/font/Old English.ttf" },
        { name: "Sofia-Regular", url: "/font/Sofia-Regular.otf" },
        { name: "Stencil", url: "/font/Stencil.ttf" },
        { name: "engravers_t", url: "/font/engravers_t.ttf" },
        { name: "gabriola", url: "/font/gabriola.ttf" },
        { name: "honey_script_semibold", url: "/font/honey_script_semibold.ttf" },
    ];

    fonts.forEach(e => {
        let font = new FontFace(e.name, `url('${e.url}')`);
        font.load()
            .then(loadedFont => {
                document.fonts.add(loadedFont);
            })
            .catch(err => {
                console.log(e);
                console.log(err);
            });
    });
});
//#endregion

//#region 移动端
const { isMobile } = toRefs(useUser());
function query() {
    let is = window.matchMedia("(max-width: 960px)").matches;
    isMobile.value = is;
}
onBeforeMount(() => {
    query();
    window.addEventListener("resize", () => {
        query();
    });
});
//#endregion

const show = ref(false);
watch(() => route.fullPath, pd);
function pd() {
    const { userData } = toRefs(useUser());
    if (userData.value.id) {
    } else {
        show.value = true;
        ElMessage.warning("请先登录");
    }

    const authRoute = ["/personalCenterPc", "/personalCenterH5", "/shoppingCart", "/detail", "/custom"];
    console.log(route.matched[0].path);
    if (authRoute.findIndex(e => e == route.matched[0].path) != -1) {
        // 未登录
        if (!userData.value.id) {
            navigateTo("/");
        }
    }
}
const type = ref<"密码登录" | "账号注册" | "验证码登录">("密码登录");
const formRef = ref<HTMLFormElement>();
const loginForm = reactive({
    user: "",
    password: "",
    nonce: "",
});
async function clickLogin() {
    let { data, code } = await UserLogin(loginForm.user, loginForm.password);

    if (code != 0) {
        ElMessage.error("用户名或密码错误");
        return;
    }

    let {
        data: { nonce },
    } = await UserNonce();
    // nonce
    localStorage.setItem("userData", JSON.stringify(data));
    loginForm.nonce = nonce;

    nextTick(() => {
        formRef.value?.submit();
    });
}

// 注册
const registerForm = reactive({
    user: "",
    password: "",
    email: "",
});
const qrPassword = ref("");
async function clickRegister() {
    if (registerForm.password != qrPassword.value) {
        ElMessage.error("请确认密码一致");
        return;
    }

    let { data, code } = await UserRegister(registerForm.user, registerForm.password, registerForm.email);
    if (code != 0) {
        ElMessage.error("用户名和邮箱不能重复");
        return;
    }
    Object.assign(registerForm, {
        user: "",
        password: "",
        email: "",
    });
}
</script>

<style lang="scss">
@import url(../app.scss);

.app-main {
    // margin-top: 60px;
    padding-top: 60px;
    // padding-bottom: 350px;
    // min-height: calc(100vh - 350px);
    // box-sizing: content-box;
}
</style>
<style lang="scss">
@media screen and (max-width: 960px) {
    .app-main {
        padding-top: 40px;
    }
}
</style>
