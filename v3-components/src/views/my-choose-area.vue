<template>
    <ChooseArea @on-select-area="getSelectArea"/>
</template>

<script lang="ts" setup>

const getSelectArea = (e: {province: string, city: string, area: string}) => {
    console.log('on-select-area', e.province)
}
</script>

<style lang="less" scoped></style>