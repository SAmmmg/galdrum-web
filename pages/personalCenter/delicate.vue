<!-- 精选商品 -->
<template>
    <div class="delicate">
        <div class="back" @click="navigateTo('/PersonalCenter/main')">
            <el-icon size="22">
                <Back />
            </el-icon>
            <span>返回</span>
        </div>

        <div class="box1">
            <h1>精选商品</h1>
            <el-select v-model="sort" placeholder="全部">
                <el-option :label="1" :value="1" />
                <el-option :label="2" :value="2" />
                <el-option :label="3" :value="3" />
            </el-select>
        </div>

        <ul class="uls">
            <li v-for="el in 12">
                <GradientBox>
                    <div class="item">
                        <div>
                            <img src="/image/bao.png" alt="" />
                        </div>
                        <p>時尚搭配单品1</p>
                        <p class="price">
                            <b>HK$199</b>
                        </p>
                        <button>立即购买</button>
                    </div>
                </GradientBox>
                <!-- <CommodityItem></CommodityItem> -->
            </li>
            <!-- <el-pagination style="justify-content: center; width: 100%" size="small" :page-size="12" layout="prev, pager, next" :total="48" /> -->
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { Back } from "@element-plus/icons-vue";

const sort = ref("");
</script>

<style lang="scss" scoped>
.delicate {
    width: 100%;
    min-height: 100vh;
    color: #fff;
    padding: 80px;
    .back {
        position: absolute;
        left: 20px;
        top: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
        .el-icon {
            margin-right: 5px;
        }
    }
    .box1 {
        display: flex;
        justify-content: space-between;
        h1 {
            font-size: 48px;
            margin-bottom: 20px;
        }
        .el-select {
            width: 120px;
            :deep(.el-select__wrapper) {
                background-color: transparent;
                --el-border-color: rgba(255, 255, 255, 0.2);
            }
        }
    }
    .uls {
        display: flex;
        flex-wrap: wrap;
        li {
            width: calc((100% - 60px) / 4);
            margin-right: 20px;
            margin-bottom: 20px;
            aspect-ratio: 388 / 484;
            .item {
                display: flex;
                flex-direction: column;
                color: #fff;
                padding: 20px;
                width: 100%;
                height: 100%;
                & > div {
                    background-color: rgba($color: #fff, $alpha: 0.1);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 60%;
                    border-radius: 20px;
                    margin-bottom: 20px;
                    img {
                        width: 90%;
                        // margin: 0 ;
                    }
                }
                & > p {
                    // margin: 10px 0;
                    margin-bottom: 10px;
                }
                .price {
                    font-size: 24px;
                    // background: rgba(132, 154, 255, 1);
                    color: rgba(132, 154, 255, 1);
                }
                button {
                    margin-top: auto;
                    color: #fff;
                    width: 100%;
                    background-color: var(--base-color);
                    border: none;
                    border-radius: 4px;
                    height: 30px;
                    line-height: 30px;
                    cursor: pointer;
                }
            }
        }
        li:nth-child(4n) {
            margin-right: 0px !important;
        }
    }
}
</style>
