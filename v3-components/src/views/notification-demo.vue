<template>
  <div class="notification-wrapper">
    <Notification :value="taskList.length" :hidden="!taskList.length" :list="taskList">
      <my-icon-ChatRound />
    </Notification>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const taskList = ref([
    {
        label:'通知',
        list:[
           {
                icon:'my-icon-ChatDotSquare',
                content:'您好，您的Steam验证码为...',
                date:'2022-03-05 16:40:23'
           }
        ]
    },
    {
        label:'关注',
        list:[
           {
                icon:'my-icon-ChatDotSquare',
                content:'您好，您的Steam验证码为...',
                date:'2022-03-05 16:40:23'
           }
        ]
    },
    {
        label:'代办',
        list:[
           {
                icon:'my-icon-ChatDotSquare',
                content:'您好，您的Steam验证码为...',
                date:'2022-03-05 16:40:23'
           }
        ]
    },
])
</script>

<style lang="less" scoped>
.notification-wrapper {
  padding: 20px;
}
</style>
