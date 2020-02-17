/*
 * @Author: 笑佛弥勒
 * @Date: 2020-02-04 22:36:41
 * @LastEditTime : 2020-02-09 16:53:46
 * @LastEditors: 笑佛弥勒
 * @Description: 首页VUEX
 * @FilePath: \ele-vue\ele-vue\src\store\modules\shopDetail.js
 */

import { main as baseMutation } from '../mutation-types'
const state = {
  merchantCategory: {} // 商铺详情信息
}

const actions = {}

const getters = {
  getMerchantCategory: (state) => {
    return state.merchantCategory
  }
}

const mutations = {
  [baseMutation.MERCHANTCATEGORY](state, data) {
    state.merchantCategory = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
