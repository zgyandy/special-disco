<template>
  <div id="app">
    <router-link to = '/home'>去首页</router-link>&nbsp;
    <router-link to = '/store'>状态管理</router-link>
    <router-view />
  </div>
</template>

<script>
import Btn from './components/common/btn'

export default {
  data () {
    return {
      btn1: '-',
      btn2: '+',
      gray: 'gray',
      green: 'green'
    }
  },
  name: 'app',
  methods: {
    subOne: (_this) => {
      _this.$store.commit('payLoad', 0)
    },
    addOne: (_this) => {
      _this.$store.commit('payLoad', 12)
    },
    subTwo: (_this) => {
      _this.$store.commit('subTwo')
    },
    addTwo: (_this) => {
      _this.$store.commit('addTwo')
    },
    subThr: (_this) => {
      _this.$store.dispatch('ADDTHR')
    },
    addThr: (_this) => {
      _this.$store.dispatch('SUBTHR')
    }
  },
  computed: {
    Count () {
      // return this.
    }
  },
  components: {
    Btn
  }
}
</script>

<style lang='less' scopd>
#app {
  padding-top: 40px;
  text-align: center;
  line-height: 40px;
}
</style>
