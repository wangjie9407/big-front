<template>
  <el-select v-model="name.province" placeholder="省" @change="onSelect(cities, 'city', $event)">
    <el-option v-for="item in options.province" :key="item" :label="item" :value="item">
    </el-option>
  </el-select>省
  <el-select v-model="name.city" placeholder="市" @change="onSelect(areas,'area' , $event)">
    <el-option v-for="item in options.city" :key="item" :label="item" :value="item">
    </el-option>
  </el-select>市
  <el-select v-model="name.area" placeholder="区" >
    <el-option v-for="item in options.area" :key="item" :label="item" :value="item">
    </el-option>
  </el-select>区
</template>

<script lang="ts" setup>
import provinces from "@/assets/const/provinces";
import cities from "@/assets/const/cities";
import areas from "@/assets/const/areas";
import { ref, Ref, reactive } from "vue";


const name = reactive({
    province:'',
    city:'',
    area:'',
})
const options = reactive({
    province: provinces,
    city: [] as string[],
    area: [] as string[]
})
const cityOptions:Ref<string[]> = ref<string[]>([])
const areaOptions:Ref<string[]> = ref<string[]>([])

// 根据所选项获取下级地区信息
const onSelect = (area: (typeof cities | typeof areas), optionKey: keyof typeof options ,areaKey: keyof typeof area ) => {
    options[optionKey] = area[areaKey]
    name[optionKey] = ''
    if(optionKey === 'city'){
        name.area = ''
        options.area = []
    }
} 
</script>

<style lang="less" scoped></style>
