<template>
    <ChooseIcon :width="'50%'" v-model:visible="visible"/>
</template>

<script setup lang="ts">
import ChooseIcon from '@/components/choose-icon/src/index.vue'
import {ref, watch} from 'vue'

const visible = ref(false)

watch(visible, (val) =>{
    console.log(val)
})
</script>

<style lang="less" scoped ></style>