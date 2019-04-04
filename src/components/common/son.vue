<template>
  <div class="son">
    我们需要借助一下神器webpack，使用 require.context() 方法来创建自己的（模块）上下文，从而实现自动动态require组件。这个方法需要3个参数：要搜索的文件夹目录，是否还应该搜索它的子目录，以及一个匹配文件的正则表达式。
    我们在components文件夹添加一个叫global.js的文件，在这个文件里借助webpack动态将需要的基础组件统统打包进来。
  </div>
</template>

<script type='text/ecmascript-6'>
export default {

}
</script>

<style scoped lang='less'>
  .son {
    padding: 0 20px;
  }
</style>
