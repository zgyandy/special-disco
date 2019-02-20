import Router  from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
import home from '../page/home/index'
const router = new Router ({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/store',
      name: 'store',
      component: resolve => require(['../page/store/index.vue'], resolve)
    },
    {
      path: '/getter2',
      name: 'getter2',
      component: resolve => require(['../page/getter/getter2.vue'], resolve)
    }
  ]
})
export default router
