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
    }, {
      path: '/watch',
      name: 'watch',
      component: resolve => require(['../page/watch/watch.vue'], resolve)
    }, {
      path: '/parent',
      name: 'parent',
      component: resolve => require(['../page/parent/index.vue'], resolve),
      children: [
        {
          path: '/parent/a',
          name: 'one',
          component: resolve => require(['../page/parent/sonOne.vue'], resolve)
        },
        {
          path: '/parent/b',
          name: 'two',
          component: resolve => require(['../page/parent/sonOne.vue'], resolve)
        }
      ]
    }, {
      path: '/render',
      name: 'render',
      component: resolve => require(['../page/render/index.vue'], resolve)
    }
  ]
})
export default router
