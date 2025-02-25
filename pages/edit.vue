<template>
    <!-- p-[16px] -->
    <div class="min-h-[calc(100vh-40px)] flex flex-col">
        <h5-Back class="p-[16px]" title="设置" />
        <van-cell-group :border="false">
            <van-cell title="单元格" center is-link>
                <template #right-icon>
                    <img class="w-[50px] h-[50px] mr-[4px]" src="/image/avatar.png" />
                    <van-icon name="arrow" size="16" color="#969799" />
                    <!-- <van-icon name="arrow" /> -->
                </template>
            </van-cell>
            <van-cell title="用户ID" is-link value="7283727" />
            <van-cell title="昵称" is-link value="AAD更好" />
            <van-cell title="我的地址" is-link value="修改" />
            <van-cell title="手机号" is-link value="去绑定" />
            <van-cell title="邮箱" is-link value="修改" />
            <van-cell title="密码" is-link value="修改" />
        </van-cell-group>

        <CustomBtn
            class="mt-auto mx-auto w-[calc(100%-32px)] text-[#f62b2b] border-[#f62b2b]"
            style="background-color: #fff4f4 !important"
            txt="清除缓存"
            :active="true"
        />
        <CustomBtn class="my-[10px] mx-auto w-[calc(100%-32px)]" txt="退出当前账号" :active="true" />
    </div>
</template>

<script lang="ts" setup>
const form = reactive({
    name: "",
});
</script>
