<template>
    <div class="main">
        <!-- <NuxtChild /> -->
        <div class="left">
            <div class="top">
                <img src="/image/Group_71.png" alt="" />
                <div>
                    <div class="blue">
                        <img src="/image/logo.png" alt="" />
                    </div>
                    <img src="/image/Group_75.png" alt="" />
                </div>
            </div>
            <div class="bottom">
                <div>
                    <img src="/image/Group_73.png" alt="" />
                    <img src="/image/Group_74.png" alt="" />
                </div>
            </div>
        </div>
        <div class="right">
            <div class="avatar">
                <div style="background: url('/image/Group_30.png') no-repeat rgba(35, 34, 32, 1); background-size: 100% 100%">
                    <div class="user">
                        <img src="/image/avatar.png" alt="" />
                        <div>
                            <button>我的订单</button>
                            <button>常见问题</button>
                        </div>
                    </div>
                    <p>个人中心</p>
                </div>
            </div>
            <div class="grxh">
                <img src="/image/Group_72.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// navigateTo("/PersonalCenter/main");
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    background-color: #1d1c1b;
    display: flex;
    padding: 80px 20px 20px;
    .left {
        width: 67.9%;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top {
            display: flex;
            justify-content: space-between;
            & > img,
            & > div {
                width: calc(50% - 10px);
            }
            & > div {
                display: flex;
                flex-direction: column;
                .blue {
                    background-color: #2342d2;
                    position: relative;
                    border-radius: 30px;
                    // aspect-ratio: 72 / 37;
                    // margin-bottom: 20px;
                    width: 100%;
                    flex: 1;
                    // height: calc(100% - 20p);
                    img {
                        width: 100%;
                        position: absolute;
                        width: 80%;
                        height: auto;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
                & > img {
                    margin-top: 20px;
                    width: 100%;
                }
            }
        }
        .bottom {
            width: 100%;
            // display: flex;
            position: relative;
            margin-top: 20px;
            // justify-content: flex-end;
            flex: 1;

            div {
                position: absolute;
                height: 100%;
                width: 100%;
                display: flex;
                img:nth-of-type(1) {
                    height: 100%;
                }
                img:nth-of-type(2) {
                    margin-left: 20px;
                    flex: 1;
                    height: 100%;
                }
            }
        }
    }
    .right {
        flex: 1;
        .avatar {
            width: 100%;
            aspect-ratio: 51 / 38;
            position: relative;
            background-color: #1d1c1b;
            z-index: 2;
            & > div {
                position: relative;
                z-index: 1;
                background-color: rgba(35, 34, 32, 1);

                width: 100%;
                height: 100%;
                padding: 30px;
                border-radius: 30px;
                & > p {
                    position: absolute;
                    bottom: 30px;
                    left: 30px;
                    font-size: 54px;
                    color: white;
                }
            }

            .user {
                position: absolute;
                top: 30px;
                left: 30px;
                display: flex;

                & > img {
                    margin-right: 30px;
                    width: 100px;
                }
                & > div {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    button {
                        height: 40px;
                        border: 1px solid rgba(117, 117, 117, 1);
                        background-color: transparent;
                        border-radius: 20px;
                        padding: 0 20px;
                        color: #fff;
                        font-size: 28px;
                        cursor: pointer;
                        white-space: nowrap;
                    }
                }
            }
        }
        .grxh {
            margin-top: 10px;
            img {
                width: 100%;
                height: auto;
            }
        }
    }
}
</style>
