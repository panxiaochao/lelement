// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'

// Progress 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  ease: 'ease',
  speed: 500
});
router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
});

router.afterEach(transition => {
  NProgress.done();
});


Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  //render: h => h(App)
  template: '<App/>',
  components: {
    App
  }
})