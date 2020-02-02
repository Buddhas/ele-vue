/*
 * @Descripttion: 首页路由
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-22 16:31:49
 * @LastEditors  : 笑佛弥勒
 * @LastEditTime : 2020-02-02 14:04:33
 */
import { get } from '@/common/js/request'

// 获取商铺分类
const getShopCategory = (params) => {
  return get('/mainIndex/getShopCategory', params)
}

// 获取商铺
const getMerchantsByPage = (params) => {
  return get('/merchants/findMerchantsByPage', params)
}

export default {
  getShopCategory,
  getMerchantsByPage
}
