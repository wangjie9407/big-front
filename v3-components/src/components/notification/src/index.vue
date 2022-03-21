<template>
  <el-popover v-model:visible="visible" placement="bottom" :width="300">
    <!-- 内容部分 -->
    <el-tabs>
      <el-tab-pane v-for="data in props.list" :label="data.label" :key="data.label">
        <div class="list-wrapper" v-for="item in data.list">
          <component :is="item.icon" />
          <div class="content-wrapper">
            <div class="content">{{ item.content }}</div>
            <div class="content">{{ item.date }}</div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 底部按钮 -->
    <div class="footer-btn">
         <el-button class="btn" type="text">清空代办</el-button>
         <el-button class="btn" type="text">查看更多</el-button>
    </div>

    <template #reference>
      <el-badge v-bind="$attrs">
        <div class="badge-content" @click="trigger">
          <slot>
            <my-icon-Notification />
          </slot>
        </div>
      </el-badge>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import DataModel from "../../../Models/NotificationType";
import { ref } from "vue";

const props = defineProps<{
  list: Array<DataModel>;
}>();

const visible = ref(false);

const trigger = () => visible.value = !visible.value
</script>

<style lang="less" scoped>
:deep(.icon) {
    width: 2rem;
    height: 2rem;
  }
:deep(.el-tabs__nav){
    width: 100%;
    .el-tabs__item{
        width: 33%;
        text-align: center;
    }
}
.badge-content {
  cursor: pointer;
}
.list-wrapper{
    display: flex;
}
.footer-btn{
    height: 40px;
    width: 100%;
    display: flex;
    border-top: 1px solid #ccc;
    .btn{
        flex: 1;
        &:first-child{
            border-right: 1px solid #ccc;
        }
    }
}
</style>
