/*
 * @Author: 笑佛弥勒
 * @Date: 2020-02-04 22:36:41
 * @LastEditTime : 2020-02-04 23:13:26
 * @LastEditors  : Please set LastEditors
 * @Description: 商铺页VUEX
 * @FilePath: \ele-vue\ele-vue\src\store\modules\shopDetail.js
 */

import { shopDetail as baseMutation } from '../mutation-types'
const state = {
  merchantDetail: {} // 商铺详情信息
}

const actions = {}

const getters = {
  getMerchantDetail: (state) => {
    return state.merchantDetail
  }
}

const mutations = {
  [baseMutation.MERCHANTDETAIL](state, data) {
    state.merchantDetail = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}