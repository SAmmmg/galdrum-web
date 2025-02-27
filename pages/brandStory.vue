<template>
    <div>
        <img class="w-full" src="/public/image/Group 1000007193@2x.png" />
        <img class="w-full" src="/public/image/Group 1000007230@2x.png" />

        <div class="bg-[var(--main-color-3)] p-[24px]">
            <p class="font-Songti text-[16px] font-semibold mb-[5px]">{{ $t('custom.brandStory.designConcept.title') }}</p>
            <p class="font-Songti">{{ $t('custom.brandStory.designConcept.description') }}</p>

            <img class="w-full mx-auto my-[36px]" src="/public/image/Group 1000007195@2x.png" />

            <p class="font-Songti mb-[24px]">
                {{ $t('custom.brandStory.customization.description') }}
            </p>

            <div class="flex gap-[10px]">
                <img class="w-[calc(50%-5px)] object-cover" src="/image/Group 1000007198@2x.png" />
                <div class="flex-[1] flex flex-col">
                    <img class="w-full mb-[10px] flex-[1] object-cover" src="/image/Group 1000007196@2x.png" />
                    <img class="w-full flex-[1] object-cover" src="/image/Group 1000007197@2x.png" />
                </div>
            </div>
        </div>

        <img class="w-full" src="/image/Group 1000007232@2x.png" />
    </div>
</template>
<script setup lang="ts">
// definePageMeta({
//     layout: 'empty',
// });
</script>
<style lang="scss" scoped></style>
