/*
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditTime : 2020-02-04 23:12:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ele-vue\ele-vue\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

import shopDetail from './modules/shopDetail'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shopDetail
  }
})
