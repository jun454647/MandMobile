// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mandMobile from 'mand-mobile'
import FastClick from 'fastclick'

/* 全局样式 */
import 'mand-mobile/lib/mand-mobile.css'
/* 全局样式 */

/* FastClick */
if ('ontouchstart' in window) {
  FastClick.attach(document.body)
}

Vue.use(mandMobile)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
