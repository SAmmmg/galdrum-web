<script setup lang="ts">
import { User, ShoppingCart, List, MapLocation, SwitchButton } from "@element-plus/icons-vue";

// 滚动一定距离背景变色
const headerRef = ref<HTMLDivElement>();
function scroll() {
    if (window.scrollY >= 50) {
        headerRef.value?.classList.add("bg");
    } else {
        headerRef.value?.classList.remove("bg");
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
    <div class="header" ref="headerRef">
        <span>logo</span>
        <div style="margin-left: auto">
            <el-dropdown trigger="click" @visible-change="(val:boolean )=>selectZh=val">
                <template #default>
                    <el-icon style="cursor: pointer" :class="selectZh ? 'iconBg' : ''" color="black" :size="20">
                        <User />
                    </el-icon>
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
            &nbsp;
            <el-icon style="cursor: pointer" color="black" :size="20">
                <ShoppingCart />
            </el-icon>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    position: fixed;
    width: 100%;
    padding: 20px 30px;
    height: 60px;
    // line-height: 40px;
    display: flex;
    align-items: center;
    z-index: 99;
    background-color: transparent;
    transition-duration: 0.3s;
}
.bg {
    background-color: #fff;
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
@media screen and (max-width: 768px) {
    .header {
        height: 40px;
    }
}
</style>
