/*
 * @Descripttion: 首页路由
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-22 16:31:49
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-07 15:53:27
 */
import { get } from '@/common/js/request'

// 获取商铺分类
const getShopCategory = (params) => {
  return get('/mainIndex/getShopCategory', params)
}

// 获取商铺
const getMerchantsByPage = (params) => {
  return get('/merchants/getMerchantsByPage', params)
}

// 获取一级分类下的二级分类
const getSecLevelCategory = (params) => {
  return get('/merchantCategory/getSecLevelCategory', params)
}

// 获取二级分类下商铺数量
const getSecLevelFoodCount = (params) => {
  return get('/merchantCategory/getSecLevelFoodCount', params)
}

// 获取分类下的商铺列表
const getMerByCategory = (params) => {
  return get('/merchants/getMerByCategory', params)
}

// 根据名称模糊搜索商户
const getMerByKeyword = (params) => {
  return get('/merchants/getMerByKeyword', params)
}
export default {
  getShopCategory,
  getMerchantsByPage,
  getSecLevelCategory,
  getSecLevelFoodCount,
  getMerByCategory,
  getMerByKeyword
}
