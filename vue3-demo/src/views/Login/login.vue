<template>
    <van-nav-bar title="登录" left-arrow @click-left="getBack" />
    <section class="img-wrapper">
        <img class="logo" src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png" />
    </section>
    <section class="user-wrapper">
        <van-form>
            <van-field
                v-for="item in userList"
                :key="item.key"
                center
                clearable
                :label="item.label"
                :type="item.type"
                :placeholder="`请输入${item.label}`"
                v-model="userInfo[item.key]"
                :rules="[{ required: true, message: `请输入${item.label}` }]"
            />
        </van-form>
        <div
            class="type-wrapper"
            @click="changeType"
        >{{ type == 'login' ? '暂无账号，立即注册？' : '已有账号，现在登录？' }}</div>
        <div class="submit-btn">
            <van-button type="primary" @click="onSubmit">{{ type == 'login' ? '登录' : '注册' }}</van-button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { UserInfoType, UserItemType } from '@/apis/models/LoginModal'
import { register, login } from '@/apis/service/user'
import { Toast } from 'vant';
import { setLocal } from '@/utils/Tools'
import md5 from 'js-md5'

const router = useRouter()

const type = ref<String>('login')
const userInfo: UserInfoType = reactive({
    loginName: '',
    password: '',
})
const userList: UserItemType[] = reactive([
    { label: '账号', key: 'loginName',type:'text' },
    { label: '密码', key: 'password', type: 'password' },
])
// 返回
const getBack = () => {
    router.go(-1)
}
// 切换页面类型
const changeType = () => {
    type.value = type.value == 'login' ? 'register' : 'login'
    userInfo.password = ''
}
const onSubmit = async () => {
    const func = { register, login }
    const key = type.value as string
    let param: UserInfoType = { loginName: userInfo.loginName }
    param = key == 'login'
        ? { ...param, passwordMd5: md5(userInfo.password) }
        : { ...param, password: userInfo.password }
    const {data: res} = await func[key](param)
    if (!res || res.resultCode != 200) {
        Toast.fail(`${key == 'login' ? '登录' : '注册'}失败`)
        return
    }
    Toast.success(`${key == 'login' ? '登录' : '注册'}成功`)
    setLocal(`${userInfo.loginName}`, JSON.stringify(userInfo))
    setLocal('vue3-demo-token', res.data)
    if(type.value == 'login'){
        router.push('/home')
    }else{
        changeType()
    }
}
</script>

<style lang="less" scoped>
.img-wrapper {
    display: flex;
    justify-content: center;
    img {
        height: 120px;
        width: 120px;
        margin-top: 64px;
        margin-bottom: 32px;
    }
}
.type-wrapper {
    padding: 20px;
    box-sizing: border-box;
    text-align: right;
    cursor: pointer;
    color: #ddd;
}
.submit-btn {
    text-align: center;
    :deep(.van-button) {
        width: 40%;
    }
}
</style>
