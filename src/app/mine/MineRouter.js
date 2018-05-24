/**
 * 个人中心模块路由
 * */
const MINE_ROUTER = [{
  path: '/mine',
  name: 'mine',
  component: resolve => require(['@/app/mine/Mine'], resolve),
  meta: {title: '个人中心', keepAlive: false},
  children: [

  ]
}]

export default MINE_ROUTER
