<template>
    <input v-for="i in 6" :key="i" :data-id="i" />
    <div>当前被激活得的input  {{ dataId }}</div>
</template>

<script lang="ts" setup>
import { useActiveElement } from '@vueuse/core'
import { computed } from 'vue'

const activeElement = useActiveElement()
const dataId = computed(() => activeElement.value?.dataset?.id)

</script>

<style lang="less" scoped>
</style>
