<template>
    <div class="min-h-[calc(100vh-40px)] p-[16px] flex flex-col">
        <h5-Back class="bg-white" title="" />
        <p class="text-center text-[20px] my-[20px]">{{ $t('custom.leaveMsg.title') }}</p>

        <div
            class="rounded-[10px] overflow-hidden mb-[20px]"
            style="border: 2px solid var(--main-color-3); --van-field-text-area-min-height: 160px"
        >
            <van-field 
                class="rounded-[10px] bg-[#fffcf8]" 
                type="textarea" 
                :placeholder="$t('custom.leaveMsg.placeholder.content')" 
            />
        </div>

        <div class="rounded-[10px] overflow-hidden mb-[20px]" style="border: 2px solid var(--main-color-3)">
            <van-field 
                class="rounded-[10px] bg-[#fffcf8]" 
                :placeholder="$t('custom.leaveMsg.placeholder.contact')" 
            />
        </div>
        <CustomBtn 
            class="w-full" 
            :txt="$t('custom.leaveMsg.button')" 
            :active="true" 
        />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
