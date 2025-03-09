<template>
    <div :class="$route.matched.length == 1 ? 'flex' : 'hidden'" class="min-h-[calc(100vh-40px)] flex-col">
        <h5-Back class="p-[16px]" :title="$t('custom.settings.title')" />
        <van-cell-group :border="false">
            <van-cell :title="$t('custom.settings.profile.cell')" center is-link>
                <template #right-icon>
                    <img class="w-[50px] h-[50px] mr-[4px]" src="/image/avatar.png" />
                    <van-icon name="arrow" size="16" color="#969799" />
                    <!-- <van-icon name="arrow" /> -->
                </template>
            </van-cell>
            <van-cell :title="$t('custom.settings.profile.userId')" is-link value="7283727" />
            <van-cell :title="$t('custom.settings.profile.nickname')" @click="navigateTo('/personalCenterH5/myName')" is-link value="AAD更好" />
            <!-- <van-cell :title="$t('custom.settings.profile.address')" is-link :value="$t('custom.settings.profile.modifyText')" /> -->
            <!-- <van-cell :title="$t('custom.settings.profile.phone')" is-link :value="$t('custom.settings.profile.bindText')" /> -->
            <van-cell :title="$t('custom.settings.profile.email')" is-link :value="$t('custom.settings.profile.modifyText')" />
            <!-- <van-cell :title="$t('custom.settings.profile.password')" is-link :value="$t('custom.settings.profile.modifyText')" /> -->
            <van-cell title="常见问题" @click="navigateTo('/personalCenterH5/faq')" is-link />
        </van-cell-group>

        <CustomBtn
            class="mt-auto mx-auto w-[calc(100%-32px)] text-[#f62b2b] border-[#f62b2b]"
            style="background-color: #fff4f4 !important"
            :txt="$t('custom.settings.buttons.clearCache')"
            :active="true"
        />
        <CustomBtn class="my-[10px] mx-auto w-[calc(100%-32px)]" :txt="$t('custom.settings.buttons.logout')" :active="true" />
    </div>
    <!-- {{ $route.matched.length }} -->
    <router-view />
</template>

<script lang="ts" setup>
const form = reactive({
    name: "",
});

onMounted(() => {
    const { isMobile } = toRefs(useUser());
    console.log(isMobile.value);
    if (!isMobile.value) {
        navigateTo("/personalCenterPc");
    }
});
</script>
