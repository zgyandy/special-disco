<template>
<div class="getter2">
  <dl class="box">
    <dd>
      <p class="title">通过方法访问</p>
      <p class="num">{{ doneTodos[2]['text'] }}</p>
    </dd>
    <dd>
      <p class="title">通过属性访问</p>
      <p class="num">{{ doneTodosCount }} {{NumFilter}}</p>
    </dd>
    <dd>
    </dd>
  </dl>
</div>
</template>

<script type='text/ecmascript-6'>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['doneTodosCount', 'doneTodos', 'NumFilter'])
  }
}
</script>

<style scoped lang='less'>
  .box {
    width: 700 - 40px;
    height: 300 - 40px;
    margin: 0 auto;
    line-height: 40px;
    border: 1px dashed #ccc;
    padding: 20px;
    border-radius: 10px;
    dt {
      height: 40px;
      padding-top: 20px;
      text-align: center;
      font-size: 18px;
    }
    dd {
      height: 40px;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      .title {
        width: 120px;
        text-align: center;
      }
      .num {
        height: 40px;
        width: 200px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    }
    dd:last-child {
      margin-bottom: 0;
    }
  }
</style>
