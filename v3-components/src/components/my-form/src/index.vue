<template>
  <el-form v-if="formData" :model="formData" :rules="formRules" :validate-on-rule-change="true">
    <el-form-item
      v-for="item in props.items"
      :key="item.prop"
      :label="item.label"
      :prop="item.prop"
    >
      <template v-if="item.children?.length">
        <component :is="`el-${item.element}`" v-bind="item.attrs">
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :is="`el-${child.element}`"
            :label="child.label"
            :prop="child.value"
            v-bind="$attrs"
          >
          </component>
        </component>
      </template>
      <template v-else>
        <component
          :is="`el-${item.element}`"
          v-model="formData[item.prop]"
          v-bind="item.attrs"
        >
        </component>
      </template>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { PropType, ref, watch, onMounted } from "vue";
import FormItemType from "../types/FormItem.type";

const formData: any = ref(null);
const formRules: any = ref(null);
const props = defineProps({
  items: Array as PropType<Array<FormItemType>>,
});

onMounted(() => {
  initForm();
});

watch(
  () => props.items,
  (_) => {
    initForm();
  }
);

const initForm = () => {
  formRules.value = {};
  formData.value = props.items?.reduce((accr: any, cur) => {
    if (cur.rule) {
      formRules.value[cur.prop]
        ? formRules.value[cur.prop].push(cur.rule)
        : (formRules.value[cur.prop] = [cur.rule]);
    }
    accr[cur.prop] = cur.value;
    return accr;
  }, {});
};
</script>
<style lang="less" scoped></style>
