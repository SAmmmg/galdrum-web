<!-- 精选商品 -->
<template>
    <div class="main">
        <Banner></Banner>

        <p>精选商品</p>

        <ul class="uls">
            <li v-for="el in 12">
                <CommodityItem></CommodityItem>
            </li>
            <el-pagination style="justify-content: center; width: 100%" size="small" :page-size="12" layout="prev, pager, next" :total="48" />
        </ul>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.main {
    & > p {
        text-align: center;
        font-size: 28px;
        margin-top: 40px;
    }
    .uls {
        padding: 40px 80px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
            width: calc((100% - 60px) / 4);
            margin-bottom: 20px;
        }
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
    .main {
        & > p {
            margin-top: 20px;
        }
        .uls {
            padding: 20px;
            li {
                width: 100%;
            }
        }
    }
}
</style>
