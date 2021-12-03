<template>
  <div class="container-box">
    <section class="view-box">
      <router-view></router-view>
    </section>
    <footer class="fooer-box">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home">首页</van-tabbar-item>
        <van-tabbar-item icon="classify">分类</van-tabbar-item>
        <van-tabbar-item icon="cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="person">个人中心</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useRouterPush } from '@/utils/Tools'

const push = useRouterPush(useRouter())
const active = ref<String>('')
watch(active, (val) => {
  const routeObj = {
    '0': () => push('/home'),
    '2': () => push('/cart'),
  }
  routeObj[`${val}`] && routeObj[`${val}`]()
})
</script>

<style lang="less" scoped>
.container-box {
  height: 100%;
  .view-box {
    height: 100%;
    margin-bottom: 50px;
  }
  .fooer-box {
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>