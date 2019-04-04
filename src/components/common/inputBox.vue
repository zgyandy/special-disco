<template>
  <div class="inputBox">
    <input type="text"  v-bind="$attrs" v-on="$listeners">
    <p>默认情况下父作用域的不被认作 props 的特性绑定 (attribute bindings) 将会“回退”且作为普通的 HTML 特性应用在子组件的根元素上。当撰写包裹一个目标元素或另一个组件的组件时，这可能不会总是符合预期行为。通过设置 inheritAttrs 到 false，这些默认行为将会被去掉。而通过 (同样是 2.4 新增的) 实例属性 $attrs 可以让这些特性生效，且可以通过 v-bind 显性的绑定到非根元素上。</p>
    <p class="redColor">注意：这个选项不影响 class 和 style 绑定。</p>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  computed: {
    listeners () {
      return {
        ...this.listeners,
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style scoped lang='less'>
  .redColor {
    color: #e10030;
  }
  .inputBox {
    width: 600px;
    padding: 0 20px;
    margin: 0 auto;
    background: gray;
    input {
      height: 30px;
      width: 200px;
      margin: 0 auto;
      text-indent: 5px;
      font-size: 14px;
    }
  }
</style>
