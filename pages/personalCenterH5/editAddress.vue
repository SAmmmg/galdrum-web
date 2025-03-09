<template>
    <div class="min-h-[calc(100vh-40px)] flex flex-col">
        <h5-Back class="p-[16px] bg-white" title="修改地址" />

        <div>
            <van-form>
                <van-cell-group :border="false" class="mb-[4px]">
                    <van-field v-model="form.name" label="姓名" placeholder="请输入姓名" />
                    <van-field v-model="form.tel" label="手机号码" type="tel" placeholder="请输入手机号码" />
                    <van-field v-model="fieldValue" label="所在地区" is-link readonly placeholder="选择省/市/区" @click="onClick" />
                    <van-field v-model="form.address" label="详细地址" placeholder="请输入详细地址" />
                </van-cell-group>
            </van-form>

            <div class="bg-[var(--main-color-3)]" style="height: 4px"></div>

            <van-cell-group :border="false">
                <van-cell title="设为默认地址">
                    <template #right-icon>
                        <van-switch v-model="form.default" size="16px" />
                    </template>
                </van-cell>

                <van-cell>
                    <template #title>
                        <p class="text-center" style="color: red">删除地址</p>
                    </template>
                </van-cell>
            </van-cell-group>

            <van-popup v-model:show="show" round position="bottom">
                <van-area title="标题" :area-list="areaList" />
            </van-popup>
        </div>

        <CustomBtn class="mt-auto mx-auto" txt="新增地址" :active="true" style="margin-bottom: 10px; width: 80%" />
    </div>
</template>

<script setup lang="ts">
const form = reactive({
    name: "",
    tel: "",
    area: "",
    address: "",
    default: false,
});

function onClick() {
    show.value = true;
    console.log("zms");
}
const areaList = {
    province_list: {
        110000: "北京市",
        120000: "天津市",
    },
    city_list: {
        110100: "北京市",
        120100: "天津市",
    },
    county_list: {
        110101: "东城区",
        110102: "西城区",
        // ....
    },
};
const show = ref(false);
const fieldValue = ref("");
const cascaderValue = ref("");
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
    {
        text: "浙江省",
        value: "330000",
        children: [{ text: "杭州市", value: "330100" }],
    },
    {
        text: "江苏省",
        value: "320000",
        children: [{ text: "南京市", value: "320100" }],
    },
];
// 全部选项选择完毕后，会触发 finish 事件
const onFinish = (d: any) => {
    show.value = false;
    fieldValue.value = d.selectedOptions.map((option: any) => option.text).join("/");
};
</script>

<style lang="scss" scoped></style>
