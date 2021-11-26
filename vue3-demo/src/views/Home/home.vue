<template>
  <sction class="list-wrapper" v-for="list in showList" :key="list.key">
    <div class="devide-wrapper">{{ list.label }}</div>
    <div class="list-content">
      <section class="good-wrapper" @click="showDetail(good.goodsId)" v-for="good in homeData[list.key]" :key="good.goodsId">
        <img :src="$filters.prefix(good.goodsCoverImg)" />
        <div class="title">{{ good.goodsIntro }}</div>
        <div class="price">{{ good.sellingPrice }}</div>
      </section>
    </div>
  </sction>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getHome } from '@/apis/service/home'
import { GoodsType } from '@/apis/models/TradeModel'

const router = useRouter()
const showList = reactive([
  { label: '个性推荐', key: 'recommendGoodses' },
  { label: '热门商品', key: 'hotGoodses' },
  { label: '新品上线', key: 'newGoodses' },
])
const homeData: {
  hotGoodses: GoodsType[],
  newGoodses: GoodsType[],
  recommendGoodses: GoodsType[]
} = reactive({
  hotGoodses: [],
  newGoodses: [],
  recommendGoodses: []
})
const getGoodsList = async () => {
  const res: any = await getHome()
  if (!res || res.status != 200) return
  const { data } = res.data
  const keys: string[] = Object.keys(homeData)
  keys.forEach(k => homeData[k] = data[k])
}

const showDetail = (id: number) => {
  router.push({
    path:'/goods/detail',
    query:{id}
  })
}

onMounted(() => {getGoodsList()})
</script>

<style lang="less" scoped>
.devide-wrapper {
  height: 50px;
  color: #1beaea;
  line-height: 50px;
  text-align: center;
  background-color: #f9f9f9;
}
.list-wrapper {
  .list-content {
    display: flex;
    flex-wrap: wrap;
    .good-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
      flex: 0 0 50%;
      border-right: 1px solid #e9e9e9;
      border-bottom: 1px solid #e9e9e9;
      img {
        width: 120px;
        height: 120px;
      }
      .title {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: center;
      }
      .price {
        text-align: center;
        color: #1beaea;
      }
    }
  }
}
</style>
