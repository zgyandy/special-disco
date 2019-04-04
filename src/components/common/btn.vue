<template>
  <div id="btn" @click="onClick">
    <div :class="className">{{ btnName }}</div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  props: {
    btnName: {
      type: String,
      default: '按钮'
    },
    className: {
      type: String,
      // default: 'red'
    }
  },
  methods: {
    onClick () {
      this.$emit('onClick', this)
    }
  }
}
</script>

<style scoped lang='less'>
  #btn {
    height: 40px;
    width: 120px;
    font-size: 30px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    text-align: center;
    line-height: 40px;
    user-select: none;
    .gray {
      background: gray;
    }
    .red {
      background: red;
    }
    .green {
      background: green;
    }
  }
</style>
