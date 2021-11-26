<template>
    <div class="detail-wrapper">
        <section class="img-wrapper">
            <img :src="$filters.prefix(detailData.goodsCoverImg)" />
        </section>
        <section class="content-wapper">
            <h3 class="mb-10">{{ detailData.goodsName }}</h3>
            <p class="mb-10 goods-intro">{{ detailData.goodsIntro }}</p>
            <p class="sell-price">￥{{ detailData.sellingPrice }}</p>
        </section>
    </div>
    <add-cart></add-cart>
</template>

<script lang="ts" setup>
import AddCart from '@/views/Home/AddCart.vue'

import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getDetail } from '@/apis/service/good'
import { GoodsType } from '@/apis/models/TradeModel'
import { passVal } from '@/utils/Tools'

const route = useRoute()
let detailData: GoodsType = reactive({
    goodsId: route.query.id as string,
    goodsCoverImg: '',
    goodsIntro: '',
    goodsName: '',
    sellingPrice: 0,
    tag: ''
})

const getDetailData = async (id: string) => {
    const res = await getDetail(id)
    if (res.status !== 200 || !res.data) return
    const { data } = res.data
    passVal(data, detailData)
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
</style>
