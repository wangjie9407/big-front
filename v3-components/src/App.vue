<template>
  <el-container class="layout-container-demo">
    <!-- 菜单栏 -->
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-scrollbar>
        <MyMenu :menu="menuList"/>
      </el-scrollbar>
    </el-aside>

    <!-- 标题 -->
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <span>{{ title }}</span>
        </div>
      </el-header>

      <!-- 视图 -->
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted } from "vue";
import { RouteRecordRaw } from "vue-router";
import { formatGlob } from "@/Utils/useGlobeager";

const menuList: Ref<({ meta: { title: string } } & RouteRecordRaw)[]> = ref([]);
const title: Ref<string> = ref("");

onMounted(() => initMenuList());

function initMenuList() {
  const routes: RouteRecordRaw[] = formatGlob(import.meta.globEager("/src/router/routes/*.ts"));
  menuList.value = routes as ({ meta: { title: string } } & RouteRecordRaw)[];
}

function oneMenuItenClick(item: { meta: { title: string } } & RouteRecordRaw) {
  title.value = item.meta.title;
}
</script>

<style scoped>
.layout-container-demo {
  height: calc(100% - 40px);
  width: calc(100% - 40px);
  border: 1px solid #eee;
  margin: 20px;
  overflow: hidden;
  border-radius: 20px;
}
.layout-container-demo .el-header {
  position: relative;
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  width: 240px;
  color: var(--el-text-color-primary);
  background: #fff !important;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  position: absolute;
  display: inline-flex;
  align-items: center;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
</style>
