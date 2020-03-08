/*
 * @Descripttion: 全局变量
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-03-08 17:01:27
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-08 23:45:11
 */
import { common as baseMutation } from '../mutation-types'
const state = {
  cache: ['MainIndex'] // keepAlive缓存组件
}

const actions = {}

const getters = {
  getcache: (state) => {
    return state.cache
  }
}

const mutations = {
  // 增加缓存
  [baseMutation.ADDCACHE](state, data) {
    !state.cache.includes(data) && state.cache.push(data)
    console.log('ADDCACHE', state.cache)
  },
  // 去除缓存
  [baseMutation.DELCACHE](state, data) {
    const index = state.cache.indexOf(data)
    index != -1 && state.cache.splice(index, 1)
    console.log('DELCACHE', state.cache)
  }
}
export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
