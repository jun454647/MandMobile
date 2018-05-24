
/**
 * 首页模块路由
 * */
const HOME_ROUTER = [{
  path: '/',
  name: 'home',
  component: resolve => require(['@/app/home/Home'], resolve),
  meta: {title: '首页'},
  children: []
}]

export default HOME_ROUTER
