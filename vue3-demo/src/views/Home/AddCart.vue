<template>
    <div class="add-cart-wrapper">
        <div class="icon-text">
            <van-icon name="chat-o" />
            <div>客服</div>
        </div>
        <div class="icon-text">
            <van-icon name="shopping-cart-o" />
            <div>购物车</div>
        </div>
        <div class="btn-wrapper">
            <van-button class="btn" round>加入购物车</van-button>
            <van-button class="btn" round>立即购买</van-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.add-cart-wrapper {
    display: flex;
    position: fixed;
    align-items: center;
    bottom: 0;
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
    .btn-wrapper{
        flex: 0 0 270px;
        display: flex;
        justify-content: space-between;
        :deep(.van-button){
            flex: 0 0 135px;
            border-radius: 90px 0 0 90px;
            background: linear-gradient(to right, #6bd8d8, #1baeae);
            color: #fff;
            border: none;
            &:last-child{
                border-radius: 0 90px 90px 0;
            }
        }
    }
}
</style>
