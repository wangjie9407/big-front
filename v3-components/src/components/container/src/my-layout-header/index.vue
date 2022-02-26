<template>
  <el-header>
    <span class="switch-collapse" @click="onTrigger" v-if="collapse">
      <my-icon-Expand />
    </span>
    <span class="switch-collapse" @click="onTrigger" v-else>
      <my-icon-Fold />
    </span>
  </el-header>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
    collapse: boolean
}>()
const emits = defineEmits<{
    (e: 'trigger', collapse: boolean): void
}>()
const onTrigger = () => {
    emits('trigger', !props.collapse)
}
</script>