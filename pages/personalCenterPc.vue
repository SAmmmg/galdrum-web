<template>
    <div class="bg-[#f5f1ec] px-[15vw] py-[40px] flex items-start">
        <div class="bg-[#fcfbf9] rounded-[10px] p-[30px] w-[200px] min-w-[200px] mr-[20px]">
            <ul class="flex flex-col gap-[30px] w-full">
                <li
                    v-for="el in types"
                    class="w-full border-[1px] border-solid border-[#D6D6D6] bg-[#f5f1ec] h-[40px] leading-[40px] rounded-[8px] flex justify-center items-center cursor-pointer"
                    @click="navigateTo(el.route)"
                    :class="$route.path == el.route ? 'bg-[var(--main-color-1)] text-white' : ''"
                >
                    <img
                        class="w-[16px]"
                        :src="$route.path == el.route ? `/custom/image/personalCenter/${el.src}_active.png` : `/custom/image/personalCenter/${el.src}.png`"
                    />
                    <span class="ml-[10px]">{{ el.title }}</span>
                </li>
            </ul>
        </div>

        <RouterView />
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
definePageMeta({
    redirect: "/personalCenterPc/accountInfo",
});

onMounted(() => {
    const { isMobile } = toRefs(useUser());
    console.log(isMobile.value);
    if (isMobile.value) {
        navigateTo("/personalCenterH5");
    }
});

const types = ref([
    { title: "账户信息", route: "/personalCenterPc/accountInfo", src: "zh" },
    { title: "订单管理", route: "/personalCenterPc/order", src: "order" },
    // { title: "我的优惠券", route: "/personalCenter/coupon" },
    { title: "收货地址", route: "/personalCenterPc/shippingAddress", src: "dz" },
    // { title: "账号安全", route: "/personalCenter/accountSecurity", src: "aq" },
    { title: "常见问题", route: "/personalCenterPc/faq", src: "faq" },
]);
</script>

<style lang="scss" scoped></style>
