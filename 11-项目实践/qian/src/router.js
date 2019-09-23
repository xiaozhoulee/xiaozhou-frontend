import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import Class from './views/Class.vue'
import MenuList from './components/MenuList.vue'
import Student from './views/Student.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/Class',
      name: 'Class',
      component: Class
    },
    {
      path: '/MenuList',
      name: 'MenuList',
      component: MenuList
    },
    {
      path: '/Student',
      name: 'Student',
      component: Student
    },
  ]
})
