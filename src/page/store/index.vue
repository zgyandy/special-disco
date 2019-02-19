<template>
  <div class="store">
    <dl class="box">
      <dt>vuex</dt>
      <dd>
        <p class="title">payload</p>
        <Btn :btnName='btn1' :className="gray" @onClick="subOne"></Btn>
        <p class="num">{{ $store.state.numOne }}</p>
        <Btn :btnName='btn2' :className="green" @onClick="addOne"></Btn>
      </dd>
      <dd>
        <p class="title">commit</p>
        <Btn :btnName='btn1' :className="gray" @onClick="subTwo"></Btn>
        <p class="num">{{ $store.state.numTwo }}</p>
        <Btn :btnName='btn2' :className="green" @onClick="addTwo"></Btn>
      </dd>
      <dd>
        <p class="title">dispatch</p>
        <Btn :btnName='btn1' :className="gray" @onClick="addThr"></Btn>
        <p class="num">{{ $store.state.numThr }}</p>
        <Btn :btnName='btn2' :className="green" @onClick="subThr"></Btn>
      </dd>
      <dd>
        <p class="title">getter1</p>
        <Btn :btnName='btn1' :className="gray"></Btn>
        <p class="num">{{ $store.state.obj['num'] }}</p>
        <Btn :btnName='btn2' :className="green"></Btn>
      </dd>
      <dd>
        <p class="title">getter2</p>
        <Btn :btnName='btn1' :className="gray"></Btn>
        <p class="num">{{ $store.state.obj['num'] }}</p>
        <Btn :btnName='btn2' :className="green"></Btn>
      </dd>
      <dd>
        <p class="title">简单用法</p>
        <Btn :btnName='btn1' :className="gray"></Btn>
        <p class="num">{{ $store.state.numFiv }}</p>
        <Btn :btnName='btn2' :className="green"></Btn>
      </dd>
    </dl>
  </div>
</template>

<script>
import Btn from '@/components/common/btn'

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

<style scoped lang='less'>
  .store {
    .box {
      width: 700 - 40px;
      height: 500 - 40px;
      margin: 0 auto;
      line-height: 40px;
      border: 1px dashed #ccc;
      padding: 20px;
      border-radius: 10px;
      padding-top: 0;
      dt {
        height: 40px;
        text-align: center;
        font-size: 20px;
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
          width: 60px;
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
      }
      dd:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
