import Vue from 'vue'
import Router from 'vue-router'
import Fruits from './views/Fruits.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Fruits',
      component: Fruits
    }   
  ]
})
