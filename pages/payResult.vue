<template>
    <div class="flex flex-col items-center min-h-[calc(100vh-40px)] pay-result" style="padding: 100px 40px 0">
        <img width="100" :src="type == 'success' ? '/image/pay_success.png' : '/image/pay_error.png'" />
        <span class="text-[18px]" style="margin: 20px 0px 40px">支付{{ type == "success" ? "成功" : "失败" }}</span>
        <div class="w-full flex gap-[20px] justify-center">
            <CustomBtn class="w-[120px]" txt="查看订单" :active="true" />
            <CustomBtn class="w-[120px]" txt="返回首页" @click="navigateTo('/')" />
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

<style lang="scss" scoped>
.pay-result {
    background-color: var(--main-color-3);
}
@media screen and (max-width: 960px) {
    .pay-result {
        background-color: #fff;
    }
}
</style>
