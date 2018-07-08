import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import User from '@/components/User'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
