import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
const router = new Router ({
  mode: '',
  routes: [{
    path: '/home',
    component: resolve => require(['../page/home/index.vue'], resolve)
  }]
})
export default router
