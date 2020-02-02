/*
 * @Descripttion: 商品详情接口
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-02-02 14:04:24
 * @LastEditors  : 笑佛弥勒
 * @LastEditTime : 2020-02-02 15:50:01
 */
import { get } from '@/common/js/request'

// 获取商品详情
const getFoodDetail = (params) => {
  return get('/food/getFoodById', params)
}

// 获取商铺分类
const getMerchantsById = (params) => {
  return get('/merchants/getMerchantsById', params)
}

export default {
  getFoodDetail,
  getMerchantsById
}
