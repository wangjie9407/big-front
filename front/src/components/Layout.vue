<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="p in pathList" :key="p" :href="p">{{p}}</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name:'layout',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'pathList'
    ]),
  },
}
</script>
<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: url('../assets/imags/logoStudy.png') no-repeat 100% 100% ;
  margin: 16px 24px 16px 0;
  float: left;
}
.ant-layout{
    height: 100%;
}
</style>
