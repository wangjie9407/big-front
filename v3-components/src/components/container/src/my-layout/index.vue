<template>
  <el-container class="my-layout-wrapper">
    <my-layout-nav :collapse="isCollapse"></my-layout-nav>
    <my-layout-header :collapse="isCollapse" @trigger="trigger"></my-layout-header>
    <el-main>
      <el-scrollbar></el-scrollbar>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import MyLayoutHeader from "@/components/container/src/my-layout-header/index.vue";
import MyLayoutNav from "@/components/container/src/my-layout-nav/index.vue";
const isCollapse = ref(false);

const trigger = (val: boolean) => (isCollapse.value = val);
</script>

<style lang="less">
.my-layout-wrapper {
  height: 100%;
  width: 100%;
  .switch-collapse {
    cursor: pointer;
  }
}
</style>
