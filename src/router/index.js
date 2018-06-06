import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const isDev = process.env.NODE_ENV === 'development'

export default new Router({
  mode: 'history',
  base: isDev ? '' : '/dist/',
  routes: [
    {
      path: '/',
      name: '选择城市和日期',
      component: () => import(/* webpackChunkName: 'searcher' */ '@/views/searcher')
    }
  ]
})
