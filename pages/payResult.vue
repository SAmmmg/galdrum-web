<template>
    <div class="flex flex-col items-center min-h-[calc(100vh-40px)]" style="padding: 100px 40px 0">
        <img width="100" src="/public/image/pay_success.png" />
        <span class="text-[18px]" style="margin: 20px 0px 40px">支付{{ type == "success" ? "成功" : "失败" }}</span>
        <div class="w-full flex gap-[20px]">
            <CustomBtn class="flex-[1]" txt="查看订单" :active="true" />
            <CustomBtn class="flex-[1]" txt="返回首页" @click="navigateTo('/')" />
        </div>
    </div>
</template>

<script setup lang="ts">
const type = ref<"success" | "error">("success");
const route = useRoute();
if (route.query.type == "error") {
    type.value = "error";
}
</script>

<style lang="scss" scoped></style>
