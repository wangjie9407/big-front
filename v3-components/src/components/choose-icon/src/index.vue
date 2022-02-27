<template>
  <div @click.stop="dialogChangeVisible(undefined)">
    <slot>
      <el-button type="primary">选择Icon</el-button>
    </slot>
  </div>

  <el-dialog
    v-model="props.visible"
    title="请选择图标Icon"
    :width="props.width"
    @close="dialogChangeVisible(false)"
  >
    <el-scrollbar height="600px">
      <div class="icon-wrapper">
        <div class="icon-item" v-for="icon in icons" :key="icon">
          <component :is="`my-icon-${icon}`" @click="copyIcon(icon)"></component>
          <div>{{ icon }}</div>
        </div>
      </div>
    </el-scrollbar>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, Ref, defineProps, withDefaults, onMounted, defineEmits } from "vue";
import { ElMessage } from "element-plus";
import { Icons } from "@/assets/const/icons";
import { useCopy } from '@/Utils/utils'
import { emit } from "process";
interface Props {
  width: string | number;
  visible: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  width: "50%",
  visible: false,
});
const emits = defineEmits(["update:visible", 'selectIcon']);
const icons: Ref<Array<string>> = ref([]);

onMounted(() => {
  icons.value = getAllIconsName();
});

// 显示 、 隐藏图标弹窗
const dialogChangeVisible = (show?: boolean): void => {
  if (typeof show === "boolean") {
    emits("update:visible", show);
    return;
  }
  emits("update:visible", !props.visible);
};

// 获取所有icon名称
const getAllIconsName = () => {
  return Object.keys(Icons).map((icon) => icon);
};

// 复制icon组件
const copyIcon = (icon: string) => {
  useCopy(`<my-icon-${icon}/>`)
  dialogChangeVisible(false)
  emits('selectIcon', icon)
  ElMessage({
    message: `您已成功复制图标 <my-icon-${icon}/>`,
    type: "success",
  });
};
</script>

<style lang="less" scoped>
.icon-wrapper {
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  .icon-item {
    display: flex;
    flex: 0 0 18%;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    margin: 0 5px 15px 5px;
    :deep(.icon) {
      width: 3rem;
      height: 3rem;
    }
  }
}
</style>
