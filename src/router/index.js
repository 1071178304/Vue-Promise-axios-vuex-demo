import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import item from '@/page/item'
import demo2 from '@/page/demo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/item',
      name: 'item',
      component: item
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    }
  ]
})
