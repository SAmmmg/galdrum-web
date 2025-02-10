<template>
    <div class="product-details">
        <!-- pc -->
        <div class="product-box-pc">
            <img src="/image/banner.png" alt="" />
            <div>
                <div class="title">可水洗的收纳袋，加厚无异味防潮防尘</div>
                <div class="mj">
                    <span>满200-20</span>
                    <span>已售 242</span>
                </div>

                <div></div>

                <div class="guige">
                    <div class="label w-[80px]">产品规格</div>
                </div>

                <div class="guige">
                    <div class="label w-[80px]">数量</div>
                </div>

                <div>
                    <CustomBtn txt="立即购买" />
                </div>
            </div>
        </div>

        <!-- h5 -->
        <div class="product-box-h5"></div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style lang="scss" scoped>
.product-details {
    background-color: var(--main-color-3);
    height: 100vh;
    .product-box-pc {
        padding: 30px 15vw;
        display: flex;
        gap: 30px;
        & > img {
            width: 40%;
            border-radius: 20px;
            aspect-ratio: 1 / 1;
            object-fit: cover;
        }
        & > div {
            width: calc(60% - 30px);
            .title {
                font-size: 28px;
                font-weight: bold;
            }
            .mj {
                span:nth-child(1) {
                    background-color: rgba($color: #ff0000, $alpha: 0.05);
                    border: 1px solid #ff0000;
                    border-radius: 4px;
                    padding: 4px 6px;
                }
                span:nth-child(2) {
                    margin-left: 15px;
                    color: #666;
                }
            }
            .label {
            }
        }
    }

    .product-box-h5 {
        display: none;
    }
}
</style>
