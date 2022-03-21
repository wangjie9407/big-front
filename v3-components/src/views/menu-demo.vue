<template>
  <MyMenu :menu="menu" :width="'350px'" />
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted } from "vue";
import { RouteRecordRaw } from "vue-router";
import { formatGlob } from "@/Utils/useGlobeager";

const menu: Ref<Array<RouteRecordRaw & { meta: { title: string } }>> = ref([]);

const initMenu = () => {
  const routes = formatGlob(import.meta.globEager("/src/router/routes/*.ts"));
  const sub = JSON.parse(JSON.stringify(routes));
  routes[3].children = sub.slice(0, 3);
  menu.value = routes as Array<RouteRecordRaw & { meta: { title: string } }>;
};
onMounted(() => {
  initMenu();
});
</script>

<style lang="less" scoped></style>
