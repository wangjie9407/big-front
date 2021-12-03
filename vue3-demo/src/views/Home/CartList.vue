<template>
    <van-nav-bar title="购物车" left-arrow @click-left="getBack(router)" />
    <div class="cart-box">
        <section class="list-box"></section>
         <footer class="settle-wrapper">
            <div class="select-all">
                <van-checkbox v-model="settleData.selectAll" type="success">全选</van-checkbox>
            </div>
            <div class="total">合计
                <span class="small-font">￥</span>
                <span class="big-font"></span>
                <span class="small-font"></span>
            </div>
            <div class="btn-box">
                <van-button round type="primary" class="settle-btn" size="small">结算</van-button>
            </div>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getBack, prefix, } from '@/utils/Tools'
import { Settle } from '@/apis/models/OrderModal'

const router = useRouter()
const settleData: Settle = reactive({
    selectAll: false,
    total: 0
})

</script>

<style lang="less" scoped>

.cart-box{
    height: 100%;
}
.list-box{
    height: calc(100% - 150px);
}
.settle-wrapper {
    width: 100%;
    display: flex;
    flex: 0 0 50px;
    padding: 0 16px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    height: 50px;
    .settle-btn{
        width: 110px;
        height: 40px;
        font-size: 14px;
    }
}
</style>
