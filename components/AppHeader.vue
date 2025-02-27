<script setup lang="ts">
import { User, ShoppingCart, List, MapLocation, SwitchButton } from "@element-plus/icons-vue";

// 滚动一定距离背景变色
const di = ref(false);
function scroll() {
    if (window.scrollY >= 50) {
        di.value = true;
    } else {
        di.value = false;
    }
}
onMounted(() => {
    window.addEventListener("scroll", scroll);
    scroll();
});

// 选中账号图标
const selectZh = ref(false);
</script>

<template>
    <div class="header">
        <img src="/image/logo_white.png" alt="" />
        <div style="margin-left: auto; display: flex; align-items: center; gap: 20px">
            <div class="ppgs">品牌故事</div>
            <el-dropdown trigger="click" @visible-change="(val:boolean )=>selectZh=val">
                <template #default>
                    <!-- <User style="cursor: pointer; width: 20px; height: 20px" /> -->
                    <img src="/image/header1.png" class="w-[18px] h-[18px] cursor-pointer" />
                </template>
                <template #dropdown>
                    <el-dropdown-menu class="menu">
                        <el-dropdown-item>
                            <el-icon color="black" :size="16"> <User /></el-icon>
                            账户信息
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <el-icon color="black" :size="16"><List /></el-icon>
                            订单管理
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <el-icon color="black" :size="16"><MapLocation /></el-icon>
                            收货地址
                        </el-dropdown-item>
                        <el-dropdown-item divided>
                            <el-icon color="black" :size="16"><SwitchButton /></el-icon>
                            退出登录
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <img src="/image/header2.png" class="w-[20px] h-[20px] cursor-pointer" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    position: fixed;
    width: 100%;
    padding: 15px 15vw;
    height: 60px;
    display: flex;
    align-items: center;
    z-index: 99;
    background: var(--main-color-1) no-repeat right 15% bottom 45% url("/image/Mask group.png");
    background-size: auto 180%;
    top: 0px;
    left: 0px;
    color: white;
    & > img {
        height: 100%;
    }
    span,
    svg {
        color: white;
    }
    .ppgs {
        position: relative;
        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #fff;
            top: calc(100% + 4px);
            left: 0px;
        }
    }
}
.menu {
    :deep(li):hover {
        .el-icon {
            --color: var(--el-color-primary) !important;
        }
    }
}
.iconBg {
    position: relative;
    color: #fff;
    z-index: 1;
    &::before {
        content: " ";
        position: absolute;
        top: -5px;
        left: -5px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        background-color: var(--el-color-primary);
        z-index: -1;
        border-radius: 50%;
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    .header {
        height: 40px;
        padding: 10px 20px;
    }
}
</style>
