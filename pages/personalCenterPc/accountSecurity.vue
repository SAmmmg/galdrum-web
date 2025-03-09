<template>
    <div class="flex-[1] bg-[#fcfbf9] rounded-[10px] p-[20px]">
        <p class="font-bold text-[24px]">密码设置</p>

        <div class="flex items-center justify-between mt-[20px]">
            <img class="w-[40px] mr-[10px]" src="/image/Group 47@2x.png" />
            <div class="w-2/5">
                <p>邮箱</p>
                <p class="text-[#666]">支持邮箱验证码登录</p>
            </div>
            <span class="mr-auto text-[#666]">fridd234@163.com</span>
            <CustomBtn class="w-[80px]" txt="更改邮箱" />
        </div>

        <div class="flex items-center justify-between mt-[20px]">
            <img class="w-[40px] mr-[10px]" src="/image/Group 48@2x.png" />
            <div class="w-2/5">
                <p>手机号</p>
                <p class="text-[#666]">支持手机号验证码登录</p>
            </div>
            <span class="mr-auto text-[#666]">未绑定</span>
            <CustomBtn class="w-[80px]" txt="去绑定" />
        </div>

        <div class="flex items-center justify-between mt-[20px]">
            <img class="w-[40px] mr-[10px]" src="/image/Group 49@2x.png" />
            <div class="w-2/5">
                <p>密码</p>
                <p class="text-[#666]">支持邮箱/手机号+密码登录</p>
            </div>
            <span class="mr-auto text-[#666]">*********</span>
            <CustomBtn class="w-[80px]" txt="修改密码" />
        </div>

        <div class="my-[24px] h-[2px] w-full bg-[var(--main-color-1)] opacity-10"></div>

        <p class="text-[24px]">账号注销</p>
        <p class="text-[#F62B2B] my-[10px]">若不再需要此账号，可将其注销。注销成功后，该账号下所有服务，数据将被删除且无法恢复，谨慎操作！</p>
        <CustomBtn class="w-[80px] border-[#F62B2B] text-[#F62B2B] bg-[#fcf1ef]" txt="注销账号" />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
