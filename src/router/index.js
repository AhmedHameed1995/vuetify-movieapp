import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppForm from '@/components/AppForm'
import AppCrud from '@/components/AppCrud'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/form',
      name: 'AppForm',
      component: AppForm
    },
    {
      path: '/crud',
      name: 'AppCrud',
      component: AppCrud
    }
  ]
})
