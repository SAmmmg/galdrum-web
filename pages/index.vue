<template>
    <swiper-container class="sw3" ref="swiperRef3" :autoplay="true">
        <swiper-slide v-for="(slide, idx) in slides" :key="idx">
            <img class="cursor-pointer" src="/image/banner.png" @click="navigateTo('/custom')" />
        </swiper-slide>
    </swiper-container>
    <div class="box">
        <img class="pc:my-[30px] h5:my-[20px] w-full" src="/image/Group 1000007222@2x.png" />

        <swiper-container class="sw2" ref="swiperRef2" :autoplay="true">
            <swiper-slide v-for="(slide, idx) in slides" :key="idx">
                <img src="/image/banner.png" alt="" />
            </swiper-slide>
        </swiper-container>

        <img class="my-[30px] w-full" src="/image/Group 185@2x.png" />

        <swiper-container class="sw1" ref="swiperRef1" :autoplay="true">
            <swiper-slide v-for="(slide, idx) in slides" :key="idx">
                <img src="/public/image/Group_71.png" alt="" />
            </swiper-slide>
        </swiper-container>

        <img class="my-[30px] w-full" src="/image/Group 208@2x.png" />

        <swiper-container class="sw w-[calc(100%+140px)] translate-x-[-70px]" ref="swiperRef" :autoplay="true">
            <swiper-slide v-for="(slide, idx) in slides" :key="idx">
                <img src="/public/image/Group_71.png" alt="" />
            </swiper-slide>
        </swiper-container>
    </div>

    <custom-popup v-model="show">
        <div class="p-[20px]">
            <div class="flex flex-col justify-start min-h-[50vh] relative pb-[40px]">
                <!-- 密码登录 -->
                <template v-if="type == '密码登录'">
                    <p class="text-[28px] mb-[20px] h-[80px] leading-[80px] text-center">{{ type }}</p>
                    <el-input class="custom-ipt mb-[20px]" placeholder="账号(手机号/邮箱)" />
                    <el-input class="custom-ipt mb-[20px]" placeholder="请输入登录密码" type="password" />
                    <custom-btn class="mb-[10px] h-[40px] leading-[38px]" txt="登录" :active="true"></custom-btn>
                    <p class="text-right">
                        <span class="text-[#485fde] cursor-pointer" @click="type = '验证码登录'">验证码登录</span>
                    </p>

                    <div class="absolute left-[50%] bottom-0 translate-x-[-50%]">
                        <span>还没有账号？</span>
                        <span class="text-[#485fde] cursor-pointer" @click="type = '账号注册'">立即注册</span>
                    </div>
                </template>

                <!-- 账号注册 -->
                <template v-if="type == '账号注册'">
                    <p class="text-[28px] mb-[20px] h-[80px] leading-[80px] text-center">{{ type }}</p>
                    <el-input class="custom-ipt mb-[20px]" placeholder="账号(手机号/邮箱)" />
                    <div class="mb-[20px] flex">
                        <el-input class="custom-ipt" placeholder="请输入验证码" />
                        <custom-btn class="h-[40px] leading-[38px] ml-[10px] w-[160px]" txt="获取验证码"></custom-btn>
                    </div>
                    <el-input class="custom-ipt mb-[20px]" placeholder="请设置登录密码" />
                    <el-input class="custom-ipt mb-[20px]" placeholder="请设置登录密码" />
                    <custom-btn class="mb-[10px] h-[40px] leading-[38px]" txt="注册" :active="true"></custom-btn>
                    <p class="text-right">
                        <span class="text-[#485fde] cursor-pointer" @click="type = '密码登录'">密码登录</span>
                    </p>

                    <div class="absolute left-[50%] bottom-0 translate-x-[-50%]">
                        <span>已有账号？</span>
                        <span class="text-[#485fde] cursor-pointer" @click="type = '验证码登录'">直接登录</span>
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
const type = ref<"密码登录" | "账号注册" | "验证码登录">("密码登录");
const show = ref(true);
const swiperRef = ref(null);
const swiperRef1 = ref(null);
const swiperRef2 = ref(null);
const swiperRef3 = ref(null);
const slides = ref(Array.from({ length: 10 }));

useSwiper(swiperRef, {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
});

useSwiper(swiperRef1, {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
});

useSwiper(swiperRef2, {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 3000,
    },
});

useSwiper(swiperRef3, {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
});
</script>

<style lang="scss" scoped>
.box {
    background-color: var(--main-color-1);
    padding: 30px 15vw;
    overflow: hidden;
}
.sw {
    swiper-slide {
        transform: scale(0.8);
        z-index: 1;
        img {
            width: 100%;
        }
    }
    .swiper-slide-active {
        transform: scale(1);
        position: relative;
        z-index: 10;
    }
    .swiper-slide-prev {
        z-index: 8;
        margin-right: -50px;
        margin-left: 50px;
    }
    .swiper-slide-next {
        margin-left: -50px;
        margin-right: 50px;

        z-index: 8;
    }
}
.sw1 {
    swiper-slide {
        transform: scale(0.85);
        z-index: 1;
        img {
            width: 100%;
        }
    }
    .swiper-slide-active {
        transform: scale(1);
        position: relative;
        z-index: 10;
    }
}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    .box {
        padding: 20px;
    }
}
</style>
