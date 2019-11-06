import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入element-ui第三方包
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.css'
// 引入axios
import axios from '@/api'
// 封装后的vue插件
import plugin from '@/components'
Vue.use(plugin)

// 使用element-ui第三方包
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
