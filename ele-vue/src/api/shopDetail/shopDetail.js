/*
 * @Descripttion: 商品详情接口
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-02-02 14:04:24
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-02-04 23:34:15
 */
import { get } from '@/common/js/request'

// 获取商品详情
const getFoodDetail = (params) => {
  return get('/food/getFoodById', params)
}

// 获取商铺
const getMerchantsById = (params) => {
  return get('/merchants/getMerchantsById', params)
}
const getFoodByMerId = (params) => {
  return get('/merchants/getFoodByMerId', params)
}
export default {
  getFoodDetail,
  getMerchantsById,
  getFoodByMerId
}
