import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import About from './views/About.vue'
import Layout from './views/Layout.vue'
import Cookies from 'js-cookie'

Vue.use(Router)



const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/layout',
            name: 'Layout',
            component: Layout,
            children:[
                {
                    path: '/home',
                    name: 'Home',
                    component: Home
                },
                {
                    path: '/about',
                    name: 'About',
                    component: About
                },
            ]
        },
    ]
})


router.beforeEach((to, from, next) => {
    let token = localStorage.getItem("token");
    console.log(token)
    if (token || to.path === "/") {
        next();
    } else {
        next({
            path:"/"
        });
    }
})

export default router