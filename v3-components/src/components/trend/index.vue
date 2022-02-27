<template>
  <section class="trend-wrapper">
    <div class="text" :style="{ color: props.isTextColor ? color : '' }">
      {{ props.content }}
    </div>
    <div class="icon">
      <slot>
        <component
          :is="`my-icon-${props.icon}`"
          :class="{'upside-down': isUp}"
          :style="{ color: color }"
        >
        </component>
      </slot>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineProps, computed, toRefs } from "vue";
const props = defineProps({
  content: String,
  icon: String,
  isExchangeColor:{
    type: Boolean,
    default: false,
  },
  isTextColor: {
    type: Boolean,
    default: false,
  },
  isUp: {
    type: Boolean,
    default: true,
  },
  upColor: {
    type: String,
    default: "#c45656",
  },
  downColor: {
    type: String,
    default: "#95d475",
  },
});
const color = computed(() => {
    let color = props.upColor
    let up = props.upColor
    let down = props.downColor
    if(props.isExchangeColor){
        up = props.downColor
        down = props.upColor
    }
    if(props.isUp){
        color = up
    }else{
        color = down
    }
    return color
})
</script>

<style lang="less" scoped>
.trend-wrapper {
  display: flex;
  .text {
    margin-right: 5px;
  }
  .upside-down{
      transform: rotateZ(180deg);
  }
}
</style>
