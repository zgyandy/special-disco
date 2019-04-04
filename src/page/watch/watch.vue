<template>
  <div class="watch">
    <input type="text" placeholder="请输入" v-model="inp1">
    <input type="text" placeholder="请输入" v-model="inp2">
    <HelloWorld></HelloWorld>
    <Btn :className = 'className'></Btn>
    <Son></Son>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data () {
    return {
      inp1: '',
      inp2: '',
      className: 'red'
    }
  },
  methods: {
    fetchData (oldData, newData) {
      console.log(oldData)
    }
  },
  watch: {
    // inp1: function (oldData, newData) {
    //   this.fetchData(oldData, newData)
    // },
    inp2: {
      handler: 'fetchData',
      immediate: true // 组件挂载的时候就会执行
    }
  }
}
</script>

<style scoped lang='less'>
  input {
    height: 30px;
    width: 300px;
    text-indent: 5px;
    border: 1px solid red;
  }
</style>
