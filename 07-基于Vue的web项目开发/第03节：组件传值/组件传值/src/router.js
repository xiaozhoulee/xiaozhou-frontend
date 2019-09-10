import Vue from 'vue'
import Router from 'vue-router'
// import Child from './components/Child.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'Child',
    //   component: Child
    // },
    
  ]
})
