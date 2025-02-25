<template>
    <div class="min-h-[calc(100vh-40px)] p-[16px] flex flex-col">
        <h5-Back class="bg-white" title="评论列表" />

        <ul class="my-[16px]">
            <li v-for="ele in 2" class="mb-[16px]">
                <div class="flex relative">
                    <img class="w-[50px] mr-[16px]" src="/image/avatar.png" />
                    <div class="flex-[1]">
                        <p class="text-[16px] mb-[4px]">微信用户</p>
                        <p class="text-[#999]">规格:印花紫 2024-09-20</p>
                    </div>
                    <div class="flex absolute top-0 right-0">
                        <img v-for="el in 5" class="w-[16px] ml-[4px]" src="/image/Star1.png" />
                    </div>
                </div>
                <div class="my-[16px]">
                    小姐姐人非常好，有耐心，认真仔细，感谢!小姐姐人 非常好，有耐心，认真仔细，感谢!小姐姐人非常好，有
                    耐心认真仔细，感谢!小姐姐人非常好。
                </div>
                <div class="flex gap-[10px] flex-wrap">
                    <img v-for="(el, idx) in imgs" class="w-[calc((100%-20px)/3)]" :src="el" @click="preview(imgs, idx)" />
                </div>
            </li>
        </ul>

        <van-image-preview v-model:show="show" :images="images" :start-position="index">
            <template #image="{ src, style, onLoad }">
                <img class="w-[90%] mx-auto" :src="src" :style="[style]" />
            </template>
        </van-image-preview>
    </div>
</template>

<script setup lang="ts">
const imgs = ref(["/image/Group 622.png", "/image/Group 622.png", "/image/Group 622.png", "/image/Group 622.png", "/image/Group 622.png"]);

const show = ref(false);
const images = ref();
const index = ref(0);
function preview(data: string[], idx: number) {
    images.value = data;
    index.value = idx;
    show.value = true;
}
</script>

<style lang="scss" scoped></style>
