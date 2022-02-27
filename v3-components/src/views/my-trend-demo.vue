<template>
  <el-button-group>
    <el-button type="primary" @click="onChangeStatus">切换状态</el-button>
    <el-button type="primary" @click="onExchangeColor">互换icon颜色</el-button>
    <el-button type="primary" @click="setTextColor">是否显示文字颜色</el-button>
  </el-button-group>
  <section class="trend-demo-wrapper">
    <div class="trend-item">
      <MyTrend
        :content="'业绩'"
        :isUp="isKpiUp"
        :icon="kpiIcon"
        :isExchangeColor="isExchangeCOlor"
        :isTextColor="isTextColor"
      />
      <ChooseIcon v-model:visible="kpiVisible" @selectIcon="setKPIIcon">
        <my-icon-Menu />
      </ChooseIcon>
    </div>
    <div class="trend-item">
      <MyTrend
        :content="'体重'"
        :icon="weightIcon"
        :isUp="isWeightUp"
        :isExchangeColor="isExchangeCOlor"
        :isTextColor="isTextColor"
      />
      <ChooseIcon v-model:visible="weightVisible" @selectIcon="setWeightIcon">
        <my-icon-Menu />
      </ChooseIcon>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isExchangeCOlor = ref(false);
const isTextColor = ref(false);
const isKpiUp = ref(true);
const isWeightUp = ref(false);
const kpiIcon = ref("ArrowUpBold");
const weightIcon = ref("ArrowUpBold");
const kpiVisible = ref(false);
const weightVisible = ref(false);

const onExchangeColor = () => (isExchangeCOlor.value = !isExchangeCOlor.value);
const setTextColor = () => (isTextColor.value = !isTextColor.value);
const setKPIIcon = (icon: string) => (kpiIcon.value = icon);
const setWeightIcon = (icon: string) => (weightIcon.value = icon);
const onChangeStatus = () => {
    isKpiUp.value = !isKpiUp.value
    isWeightUp.value = !isWeightUp.value
};
</script>

<style lang="less" scoped>
.trend-demo-wrapper {
  display: flex;
  .trend-item {
    display: flex;
    margin: 20px;
  }
}
</style>
