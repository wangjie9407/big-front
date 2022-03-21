<template>
    <MyForm :items="itemList"/>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import FormItemType from '@/components/my-form/types/FormItem.type'

const itemList = ref<Array<FormItemType>>([
    {
        element:'input',
        label: '账号',
        prop:'username',
        value:'',
        rule:{
            required: true,
            message:'请输入账号',
            trigger: 'change',
        }
    },
    {
        element:'input',
        label: '密码',
        prop:'password',
        value:'',
        attrs:{
            type:'password',
            onInput: (e: string) => handleUserInput(e) 
        },
        rule:{
            message:'请输入密码',
            required: true,
            trigger: 'change'
        }
    }
])

const handleUserInput = (e: string) => console.log(e)
</script>

<style lang="less" scoped>
    
</style>