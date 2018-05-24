import Vue from 'vue'
import Router from 'vue-router'
import HOME_ROUTER from '@/app/home/HomeRouter'
import MINE_ROUTER from '@/app/mine/MineRouter'
Vue.use(Router)

export default new Router({
  routes: [
    ...HOME_ROUTER,
    ...MINE_ROUTER
  ]
})
