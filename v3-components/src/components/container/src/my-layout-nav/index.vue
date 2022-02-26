<template>
  <el-aside width="auto" style="background-color: rgb(238, 241, 246)">
    <el-scrollbar>
      <el-menu :collapse="collapse">
        <el-menu-item index="2">
          <my-icon-Aim />
          <span>Navigator Two</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup lang="ts">
defineProps<{
    collapse: boolean
}>()

</script>
