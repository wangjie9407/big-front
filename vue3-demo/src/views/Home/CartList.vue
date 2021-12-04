<template>
  <van-nav-bar title="购物车" left-arrow @click-left="getBack(router)" />
  <div class="cart-box">
    <section class="list-box">
      <template v-for="(item, index) in cart.list" :key="index">
        <div class="cart-item">
          <div class="check">
            <van-checkbox v-model="item.checked" @change="checkIsSelecAll"></van-checkbox>
          </div>
          <div class="img">
            <img :src="prefix(item.url)" alt="" />
          </div>
          <div class="goods">
            <div class="name">{{ item.name }}</div>
            <div class="price">
              单价：
              <span class="price-val">{{ item.price }}</span>
            </div>
          </div>
          <div class="nums">
            <van-stepper v-model="item.nums" />
          </div>
        </div>
      </template>
    </section>
    <footer class="settle-wrapper">
      <div class="select-all">
        <van-checkbox :checked="cart.isSelectAll" @click="cart.selectAll" type="success"
          >全选</van-checkbox
        >
      </div>
      <div class="total">
        合计
        <span class="small-font">￥</span>
        <span class="big-font">{{ toFix(cart.totalPrice) }}</span>
      </div>
      <div class="btn-box">
        <van-button round type="primary" class="settle-btn" size="small">结算</van-button>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { getBack, prefix, toFix } from "@/utils/Tools";
import useCart from "@/store/useCart";

const router = useRouter();
const cart = useCart();

function checkIsSelecAll(val){
    const arr = cart.list.map(e => e.checked)
    console.log(arr)
    if(cart.list.every(a => a.checked)){
        cart.setIsSelectAll(true)
    }else{
        cart.setIsSelectAll(false)
    }
}
</script>

<style lang="less" scoped>
.cart-box {
  height: 100%;
}
.list-box {
  height: calc(100% - 150px);
  padding: 10px 15px;
  box-sizing: border-box;
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img {
      img {
        height: 80px;
        width: 80px;
        object-fit: contain;
      }
    }
    .goods {
      flex: 1;
      margin: 0 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .name {
        margin-bottom: 10px;
      }
      .price {
        .price-val {
          color: red;
        }
      }
    }
    .nums {
      flex: 0 0 100px;
    }
  }
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
  .big-font {
    font-size: 22px;
    color: red;
  }
  .settle-btn {
    width: 110px;
    height: 40px;
    font-size: 14px;
  }
}
</style>
