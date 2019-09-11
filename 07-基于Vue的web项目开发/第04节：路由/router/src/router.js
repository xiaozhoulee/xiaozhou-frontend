import Vue from 'vue'
import Router from 'vue-router'
import Student from './views/Student.vue'
import Class from './views/Class.vue'
import achievement from './views/achievement.vue'
import Teacher from './views/Teacher.vue'
import user from './views/user.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Student',
      component: Student
    },
    {
      path: '/Class',
      name: 'Class',
      component: Class

    },
    {
      path: '/achievement',
      name: 'achievement',
      component: achievement

    },
    {
      path: '/user',
      name: 'user',
      component: user

    },
    {
      path: '/Teacher',
      name: 'Teacher',
      component: Teacher

    }
  ]
})
