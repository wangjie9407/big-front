<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref, reactive } from "vue";

const inverted = ref(true);
const routerOptions = reactive([]);
</script>

<template>
  <div class="layout-wrapper">
      <n-layout has-sider>
        <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
          :inverted="inverted"
        >
          <n-menu
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="routerOptions"
          />
        </n-layout-sider>
      </n-layout>
  </div>
</template>

<style lang="less" scoped>
.layout-wrapper{
  width: 100%;
  height: 100%;
  :deep(.n-layout){
    height: 100%;
    box-sizing: border-box;
  }
}
</style>
