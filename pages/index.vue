<template>
    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
            <img src="/image/banner.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
            <img src="/image/banner.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
            <img src="/image/banner.png" alt="" />
        </van-swipe-item>
    </van-swipe>
    <div class="box">
        <img src="/image/Group 1000007222@2x.png" style="width: 95%" />

        <!-- <el-carousel arrow="always" indicator-position="none">
            <el-carousel-item v-for="item in 4" :key="item">
                <img src="/image/banner.png" alt="" />
            </el-carousel-item>
        </el-carousel> -->
        <swiper-container class="sw2" ref="swiperRef2">
            <swiper-slide v-for="(slide, idx) in slides" :key="idx">
                <img src="/image/banner.png" alt="" />
            </swiper-slide>
        </swiper-container>

        <img src="/image/Group 185@2x.png" style="width: 95%" />

        <swiper-container class="sw1" ref="swiperRef1">
            <swiper-slide v-for="(slide, idx) in slides" :key="idx">
                <img src="/public/image/Group_71.png" alt="" />
            </swiper-slide>
        </swiper-container>

        <img src="/image/Group 208@2x.png" style="width: 60%" />

        <swiper-container class="sw" ref="swiperRef">
            <swiper-slide v-for="(slide, idx) in slides" :key="idx">
                <img src="/public/image/Group_71.png" alt="" />
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<script lang="ts" setup>
const swiperRef = ref(null);
const swiperRef1 = ref(null);
const swiperRef2 = ref(null);
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
    // centeredSlides: true,
    loop: true,
});
</script>

<style lang="scss" scoped>
.box {
    background-color: var(--main-color-1);
    padding: 30px 15vw;
    & > img {
        // width: 60%;
        margin: 30px 0;
        border: 1px dashed rgba($color: #fff, $alpha: 0.3);
    }
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
