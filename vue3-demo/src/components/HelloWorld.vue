<template>
  <h1 class="text">{{ data.msg }}</h1>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { HelloWorldType } from '@/components/types/index'

const color: String = '#FB7299'
const fontSize: String = '16px'
const data:HelloWorldType = reactive({
  msg: 'hello i am conming'
})

</script>

<style scoped lang="less">
.text{
  color: v-bind(color);
  font-size: v-bind(fontSize)
}
</style>
