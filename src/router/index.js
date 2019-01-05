import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/page/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    //  {
    //   path: '/lazyload',
    //   name: 'lazyload',
    //   component: Lazyload
    // },
    // {
    //   path: '/noLazyload',
    //   name: 'noLazyload',
    //   component: NoLazyload
    // },
    // {
    //   path: '/practice',
    //   name: 'practice',
    //   component: Practice
    // }
  ]
})
