<!-- 首页 -->
<template>
    <div class="main">
        <Banner></Banner>

        <div class="boxs">
            <div class="box1">
                <div>
                    <p>定制你的鼓棒</p>
                    <el-button type="primary" round>立即购买</el-button>
                </div>
                <img src="/blue.png" alt="" />
            </div>

            <div class="box2">
                <div>
                    <p>时尚与展示个性的搭配</p>
                    <el-button type="primary" round>立即购买</el-button>
                </div>
                <img src="/blue.png" alt="" />
            </div>

            <div class="box3">
                <p>
                    <span class="title">精选商品</span>
                    <span style="margin-left: auto"> 查看更多 </span>
                    <el-icon><ArrowRight /></el-icon>
                </p>
                <ul>
                    <li v-for="el in 3" :key="el">
                        <img src="/blue.png" alt="" />

                        <div>
                            <span>商品{{ el }}</span>
                            <el-button type="primary" round size="small">立即购买</el-button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.main {
    .boxs {
        padding: 40px 80px 0px;
    }
}

.box1,
.box2 {
    background-color: #f6f6f9;
    display: flex;
    margin-bottom: 40px;
    padding: 20px 40px;
    justify-content: space-between;
    border-radius: 20px;
    & > div {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        p {
            font-size: 28px;
            margin-bottom: 20px;
        }
    }
    & > img {
        width: 40%;
        height: 100%;
        object-fit: cover;
    }
}
.box3 {
    margin-bottom: 40px;
    & > p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        .title {
            font-size: 28px;
            // font-weight: 400;
        }
    }
    & > ul {
        display: flex;
        justify-content: space-between;
        li {
            width: calc((100% - 40px) / 3);
            padding: 20px;
            background-color: #f6f6f9;
            border-radius: 20px;
            height: 400px;
            display: flex;
            flex-direction: column;
            img {
                width: 100%;
                flex: 1;
                object-fit: cover;
            }
            div {
                margin-top: 10px;
                padding-top: 10px;
                border-top: 1px solid #ccc;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
    .main {
        .boxs {
            padding: 20px 20px 0px;
        }
    }
    .box1,
    .box2 {
        margin-bottom: 20px;
        & > div {
            p {
                font-size: 18px;
                margin-bottom: 20px;
            }
        }
    }
    .box3 {
        margin-bottom: 20px;
        & > ul {
            display: flex;
            // justify-content: space-between;
            flex-direction: column;
            li {
                // width: calc((100% - 40px) / 3);
                width: 100%;
                // padding: 20px;
                // background-color: #f6f6f9;
                // border-radius: 20px;
                height: 300px;
                // display: flex;
                // flex-direction: column;
                margin-bottom: 10px;
                img {
                    width: 100%;
                    flex: 1;
                    object-fit: cover;
                }
                div {
                    margin-top: 10px;
                    padding-top: 10px;
                    border-top: 1px solid #ccc;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
}
</style>
