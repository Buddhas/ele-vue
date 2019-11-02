import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './plugins/router'
import store from './store'
import filters from './filters'

import Toast from './components/toast/index'
import 'amfe-flexible'
Vue.use(Toast)

Vue.config.productionTip = false
// 全局过滤器
Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName])
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
