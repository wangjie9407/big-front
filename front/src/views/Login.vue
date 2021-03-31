<template>
    <div>
    <a-tabs default-active-key="1" v-model="activeKey" >
      <a-tab-pane key="1" tab="登入">
          <Login @forgetPwd="forgetPwd"/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="找回密码" force-render>
          <Forget/>
      </a-tab-pane>
    </a-tabs>
    </div>
</template>

<script>
import Login from '../components/Login';
import Forget from '../components/Forget';
    export default {
        name:'LoginPage',
        components: {
            Login,
            Forget
        },
        data() {
            return {
                activeKey: '1'
            }
        },
        methods: {
            forgetPwd() {
                console.log(233)
                this.activeKey = '2'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>