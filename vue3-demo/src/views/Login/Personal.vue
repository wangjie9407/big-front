<template>
    <user-info :label="'账号'" :value="user.username"></user-info>
</template>

<script lang="ts" setup>
    import useUserInfo from '@/store/userInfo'
    import UserInfo from '@/views/Login/user-info.tsx'
    const user = useUserInfo()
</script>

<style lang="less">
    .user-info{
        width: 100%;
        height: 50px;
        display: flex;
        padding: 10px 15px;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        .label{
            flex: 0 0 120px;
            text-align: left;
        }
        .value{
            flex: 1;
            text-align: left;
            padding-left: 10px;
            box-sizing: border-box;
        }
    }
</style>