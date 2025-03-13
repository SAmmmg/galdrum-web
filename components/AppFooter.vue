<template>
    <div class="footer">
        <div class="link">
            <div class="left">
                <img src="/image/logo_white.png" />
                <br />
                <p>{{ $t('custom.footer.address') }}</p>
                <p>{{ $t('custom.footer.email') }}</p>
                <br />
                <p>
                    <img src="/image/Group 210@3x.png" />
                    <img src="/image/Group 214@3x.png" />
                    <img src="/image/Group 209@3x.png" />
                </p>
            </div>
            <ul class="right">
                <li>
                    <span>{{ $t('custom.footer.products.title') }}</span>
                    <span>{{ $t('custom.footer.products.drumstickCustom') }}</span>
                    <span>{{ $t('custom.footer.products.drumBag') }}</span>
                    <span>{{ $t('custom.footer.products.drumstick') }}</span>
                    <span>{{ $t('custom.footer.products.accessories') }}</span>
                </li>

                <li>
                    <span>{{ $t('custom.footer.about.title') }}</span>
                    <span @click="navigateTo('/brandStory')">{{ $t('custom.footer.about.brandStory') }}</span>
                    <span @click="navigateTo('/personalCenterH5/faq')">{{ $t('custom.footer.about.faq') }}</span>
                </li>
            </ul>
        </div>

        <div class="copyright">
            <span>{{ $t('custom.footer.copyright') }}</span>
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
    background: var(--main-color-1) no-repeat right 15% bottom 20% url("/custom/image/Mask group.png");
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
