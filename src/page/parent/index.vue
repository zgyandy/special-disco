<template>
  <div class="parent">
    <router-link to="/parent/a">one</router-link>&nbsp;
    <router-link :to="{name: 'two'}">two</router-link>
    <router-view :key="$route.path"/>
    <div> reouter-view 添加key属性 应用场景，当从page a 其跳转到page b时 ，由于a b 页面用了相同的组件，所以组件会被复用，组件中的钩子函数就不会执行</div>
    <InputBox :value="value"></InputBox>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data () {
    return {
      value: '输入框'
    }
  },
  metaInfo: {
    title: 'parent',
    titleTemplate: '%s - by vue-meta',
    htmlAttrs: {
      lang: 'zh'
    }
  },
  created () {
    console.log(this.$route.path)
  },
  methods: {
    fetchPath () {
      console.log(this.$route.fullpath)
    },
    input (n) {
      this.value = n
      console.log(this.value)
    }
  }
}
</script>

<style scoped lang='less'>

</style>
