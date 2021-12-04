<template>
    <van-nav-bar :title="detailData.goodsName" left-arrow @click-left="getBack(router)" />
    <div class="detail-wrapper">
        <section class="img-wrapper">
            <img :src="prefix(detailData.goodsCoverImg)" />
        </section>
        <section class="content-wapper">
            <h3 class="mb-10">{{ detailData.goodsName }}</h3>
            <p class="mb-10 goods-intro">{{ detailData.goodsIntro }}</p>
            <p class="sell-price">￥{{ detailData.sellingPrice }}</p>
        </section>
    </div>
    <div class="add-cart-wrapper">
        <div class="icon-text">
            <van-icon name="chat-o" />
            <div>客服</div>
        </div>
        <div class="icon-text">
            <van-badge :content="cart.len ? cart.len : '' ">
                <van-icon name="shopping-cart-o" @click="showCartList" />
            </van-badge>
            <div>购物车</div>
        </div>
        <div class="btn-wrapper">
            <van-button class="btn" round @click="addCart">加入购物车</van-button>
            <van-button class="btn" round @click="buy">立即购买</van-button>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getDetail } from '@/apis/service/good'
import { GoodsType } from '@/apis/models/TradeModel'
import { passVal, getBack, prefix, useRouterPush } from '@/utils/Tools'

import useCart from '@/store/useCart'

const route = useRoute()
const router = useRouter()
const push  = useRouterPush(router)
const cart = useCart()

let detailData: GoodsType = reactive({
    goodsId: route.query.id as string,
    goodsCoverImg: '',
    goodsIntro: '',
    goodsName: '',
    sellingPrice: 0,
    tag: ''
})

async function getDetailData(id: string) {
    const res = await getDetail(id)
    if (res.status !== 200 || !res.data) return
    const { data } = res.data
    passVal(data, detailData)
}

function addCart() {
    const { goodsCoverImg, sellingPrice, goodsName } = detailData
    cart.addOrderList({
        url: goodsCoverImg, nums: 1, name: goodsName, price: sellingPrice,checked: false
    })
}

function showCartList() {
    push('/cart')

}

function buy() {
}

onMounted(() => {
    const id: string = route.query.id as string
    getDetailData(id)
})
</script>
<style lang="less" scoped>
.detail-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    .img-wrapper {
        img {
            width: 375px;
            height: 375px;
        }
    }
    .content-wapper {
        padding: 10px;
        box-sizing: border-box;
        .mb-10 {
            margin-bottom: 10px;
        }
        .goods-intro {
            color: #999;
        }
        .sell-price {
            font-size: 22px;
            color: #f63515;
        }
    }
}
.add-cart-wrapper {
    display: flex;
    position: fixed;
    align-items: center;
    bottom: 50px;
    height: 50px;
    width: 100%;
    background-color: #fff;
    justify-content: space-between;
    align-items: center;
    .icon-text {
        font-size: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 50px;
        div {
            font-size: 12px;
        }
    }
    .btn-wrapper {
        flex: 0 0 270px;
        display: flex;
        justify-content: space-between;
        :deep(.van-button) {
            flex: 0 0 135px;
            border-radius: 90px 0 0 90px;
            background: linear-gradient(to right, #6bd8d8, #1baeae);
            color: #fff;
            border: none;
            &:last-child {
                border-radius: 0 90px 90px 0;
            }
        }
    }
}
</style>
