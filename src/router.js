import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import ByeWorld from '@/components/ByeWorld'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '*',
      component: ByeWorld
    }
  ]
})

export default router
