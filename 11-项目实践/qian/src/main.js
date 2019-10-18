import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



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