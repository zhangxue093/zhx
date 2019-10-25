import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '@/views/login'
Vue.use(VueRouter)
const router = new VueRouter({
  // 配置对象
  // 路由规则选项 routes  若干规则
  routes: [{
    path: '/login',
    component: login
  }]
})
//   导出
export default router
