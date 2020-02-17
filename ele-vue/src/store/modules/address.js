/*
 * @Descripttion: 地址VUEX
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-02-16 17:58:55
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-02-16 17:58:55
 */

import { main as baseMutation } from '../mutation-types'
const state = {
  currentCity: {
    citycode: '0755',
    adcode: '440300',
    name: '深圳市',
    center: '114.085947,22.547',
    level: 'city',
    districts: []
  } // 当前地址
}

const actions = {}

const getters = {
  getCurrentCity: (state) => {
    return state.currentCity
  }
}

const mutations = {
  [baseMutation.MERCHANTCATEGORY](state, data) {
    state.currentCity = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
