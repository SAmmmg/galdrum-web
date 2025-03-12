<template>
    <div class="relative">
        <swiper-container class="sw3" ref="swiperRef3" :autoplay="true">
            <swiper-slide v-for="el in banners" :key="el">
                <img class="w-full" :src="`/image/banner/${el}`" />
            </swiper-slide>
        </swiper-container>
        <img
            src="/image/Group 105@2x.png"
            @click="navigateTo('/custom')"
            class="absolute cursor-pointer z-10 translate-x-[-50%] left-[50%] bottom-[-20px] w-[10%] min-w-[80px]"
        />
    </div>

    <div class="box">
        <img class="pc:my-[30px] h5:my-[20px] w-full" src="/image/Group 1000007222@2x.png" />

        <swiper-container class="sw2" ref="swiperRef2" :autoplay="true">
            <swiper-slide v-for="(slide, idx) in slides" :key="idx">
                <img src="/image/banner.png" alt="" />
            </swiper-slide>
        </swiper-container>

        <img class="my-[30px] w-full" src="/image/Group 185@2x.png" />

        <swiper-container class="sw1" ref="swiperRef1" :autoplay="true">
            <swiper-slide v-for="(slide, idx) in slides" :key="idx" @click="navigateTo('/productList')">
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
</template>

<script lang="ts" setup>
const swiperRef = ref(null);
const swiperRef1 = ref(null);
const swiperRef2 = ref(null);
const swiperRef3 = ref(null);
const slides = ref(Array.from({ length: 10 }));
const banners = ref(["banner1.png", "banner2.png", "banner3.png", "banner4.png"]);

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
