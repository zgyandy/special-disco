<template>
  <div id="app">
    <router-link to = '/home'>去首页</router-link>&nbsp;
    <router-link to = '/store'>状态管理</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='less' scopd>
#app {
  padding-top: 40px;
  text-align: center;
  line-height: 40px;
}
</style>
