<template>
  <div id="app">
   <Layout/>
  </div>
</template>

<script>
import Layout from './components/Layout';
export default {
  name: 'App',
  components: {
    Layout,
  },
}
</script>

<style lang="less">
#app{
  height: 100%;
  width: 100%;
}
</style>
