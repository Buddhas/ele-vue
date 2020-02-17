/*
 * @Descripttion: 首页路由
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-22 16:31:49
 * @LastEditors: 笑佛弥勒
 * @LastEditTime : 2020-02-11 23:20:29
 */
import { get } from '@/common/js/request'

// 获取所有城市
const getAllCity = (params) => {
  return get('/mainIndex/getAllCity', params)
}

export default {
  getAllCity
}
