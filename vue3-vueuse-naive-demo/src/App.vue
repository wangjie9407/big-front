<script setup>
import { ref, onMounted,h } from 'vue';
import {RouterLink } from 'vue-router'
import loadDir from '@/Utils/loadDir.js'

const collapsed = ref(false)
let routes = ref([])

const initRoutes = () => {
  const loadRoutes = loadDir(import.meta.globEager('./router/routes/*.js'))
  return loadRoutes.filter(e => e.meta).map(({ meta: { title: label }, path: href }) => ({
    label: () => h(RouterLink, { to: { path: href } }, { default: () => label }),
    href,
    key: label
  }))
}

onMounted(() => {
  routes.value = initRoutes()
  console.log(routes.value)
})
</script>

<template>
  <n-layout has-sider style="height: 100%;">
    <n-layout-sider
      collapse-mode="transform"
      :collapsed-width="120"
      :width="240"
      show-trigger="bar"
      content-style="padding: 24px;"
      bordered
    >
      <n-menu
        :collapsed-icon-size="22"
         :collapsed-width="164"
        :options="routes"
        :label-field="'label'"
        :key-field="'key'"
      />
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      <router-view></router-view>
    </n-layout-content>
  </n-layout>
</template>

<style lang="less" scoped>
:deep(.n-layout) {
  height: 100%;
}
.container {
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
}
</style>
