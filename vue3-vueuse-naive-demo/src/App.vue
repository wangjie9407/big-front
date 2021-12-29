<script setup>
import {  ref, onMounted,reactive } from 'vue';
import loadDir from '@/Utils/loadDir.js'

const collapsed = ref(false)
let routes = reactive([])

const initRoutes = () => {
  const loadRoutes = loadDir(import.meta.globEager('./router/routes/*.js'))
  return loadRoutes.filter(e => e.meta).map(({ meta: { title: label }, path: href }) => ({ label, href, key: label }))
}

onMounted(() => {
   routes = routes.concat(initRoutes())
   console.log('routes', routes)
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
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="routes"
          />
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;"></n-layout-content>
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
