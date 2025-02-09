<template>
    <div class="footer">
        <div class="link">
            <div class="left">
                <img src="/assets/logo@3x.png" alt="" />
                <br />
                <p>地址：广东省 深圳市 南山区 民企科技园 3栋601</p>
                <p>邮箱：840112676@qq.com</p>
                <br />
                <p>
                    <img src="/assets/Group 210@3x.png" alt="" />
                    <img src="/assets/Group 214@3x.png" alt="" />
                    <img src="/assets/Group 209@3x.png" alt="" />
                </p>
            </div>
            <ul class="right">
                <li>
                    <span>我们的产品</span>
                    <span>鼓棒定制</span>
                    <span>鼓包</span>
                    <span>鼓棒</span>
                    <span>周边</span>
                </li>

                <li>
                    <span>关于我们</span>
                    <span>品牌故事</span>
                    <span>常见问题</span>
                </li>
            </ul>
        </div>

        <div class="copyright">
            <span>Copyright &copy; 2024 Logo 隐私条款</span>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    padding: 40px 15vw;
    display: flex;
    flex-direction: column;
    color: white;
    background: var(--main-color-1) no-repeat right 15% bottom 20% url("/assets/Mask group@3x.png");
    background-size: auto 115%;

    .link {
        display: flex;
        justify-content: space-between;
        .left {
            margin-right: 10px;
            & > img {
                height: 30px;
            }
            p {
                display: flex;
                gap: 10px;
                img {
                    width: 40px;
                }
            }
        }
        .right {
            display: flex;
            gap: 80px;
            li {
                display: flex;
                flex-direction: column;
                & > span:nth-of-type(1) {
                    margin-bottom: 20px;
                    color: #fff;
                }
                span {
                    margin-bottom: 10px;
                    color: rgba($color: #fff, $alpha: 0.5);
                }
            }
        }
    }

    .copyright {
        margin-top: auto;
        text-align: center;
        padding-top: 40px;
        border-top: 1px solid rgba($color: #fff, $alpha: 0.1);
        margin-top: 40px;
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    .footer {
        padding: 0px 20px 20px;
        background-position: right 30% bottom 0%;
        .link {
            .left,
            .right {
                margin-top: 20px;
            }
            flex-wrap: wrap;
            .right {
                gap: 20px;
            }
        }
        .copyright {
            padding-top: 20px;
            margin-top: 20px;
        }
    }
}
</style>
