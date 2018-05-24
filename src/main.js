// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mandMobile from 'mand-mobile'
import FastClick from 'fastclick'
import HttpService from './service/httpService'

/* 全局引用SVG */
const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const req = require.context('./assets/icons', true, /\.svg$/);
requireAll(req);


/* 全局样式 */
import 'mand-mobile/lib/mand-mobile.css'
import 'mand-mobile/components/_style/global.styl'
import './theme.custom.styl'
import './common/css/common.scss'
/* 全局样式 */

/* 全局JS */
import './filter/filter'
import './directive/directive'
/* 全局JS */

/* FastClick */
if ('ontouchstart' in window) {
  FastClick.attach(document.body)
}

/* 设置页面标题 */
router.afterEach(route => {
  document.title = route.meta.title || '';
})

Vue.use(mandMobile)
Vue.config.productionTip = false

/* 改原型链 */
Vue.prototype.$http = HttpService

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
