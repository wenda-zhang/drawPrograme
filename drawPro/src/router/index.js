import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage'
import Admin from '@/pages/Admin'
import User from '@/pages/User'
import Login from '@/pages/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      children: [{
        path: '/',
        name: 'admin',
        component: Admin
      }, 
      {
        path: '/user',
        name: 'user',
        component: User
      }]
    }
  ]
})
