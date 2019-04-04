import Vue from 'vue';
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
const requireComponent = require.context(
  '.', true, /.vue$/
   //找到components文件夹下以.vue命名的文件 false 不包含子目录中文件 true 表示包含子目录
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = capitalizeFirstLetter(
    fileName.replace(/^.\//, '').replace(/^\w+\//, '').replace(/.vue$/, '')
    //因为得到的filename格式是: './baseButton.vue' 或者是 ./common/btn.vue, 所以这里我们去掉头和尾，只保留真正的文件名
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})