/*
 * @Descripttion: 
 * @version: 
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-29 15:37:46
 */
import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './plugins/router'
import store from './store'
import filters from './filters'
import { globalSetting } from '@/common/mixins/common'
import './register'

import Toast from './components/toast/index'
import 'amfe-flexible'
Vue.use(Toast)
Vue.mixin({
  mixins: [globalSetting]
})
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
