<script setup lang="ts"></script>

<template>
    <div class="footer">
        <ul>
            <li>
                <span>关注我们</span>
                <span>图标 图标</span>
            </li>

            <li>
                <span>产品</span>
                <span>鼓棒</span>
                <span>鼓包</span>
            </li>
            <li>
                <span>关于</span>
                <span>常见问题</span>
                <span>我的订单 </span>
            </li>
        </ul>
        <div class="copyright">
            <span>copyright &copy; 2024 Logo 隐私条款</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    background-color: #202429;
    width: 100%;
    height: 20vh;
    min-height: 200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    span {
        color: white;
    }
    & > ul {
        display: flex;
        justify-content: center;
        li {
            width: 10%;
            min-width: 80px;
            display: flex;
            flex-direction: column;
        }
    }
    .copyright {
        margin-top: auto;
        text-align: center;
        padding-top: 20px;
        border-top: 1px solid #ccc;
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
    .footer {
        & > ul {
            li {
            }
        }
    }
}
</style>
