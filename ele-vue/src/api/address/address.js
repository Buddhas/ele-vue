/*
 * @Descripttion: 首页路由
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-22 16:31:49
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-02-18 15:53:18
 */
import { get, post } from '@/common/js/request'

// 获取所有城市
const getAllCity = (params) => {
  return get('/mainIndex/getAllCity', params)
}

// 新增地址
const createdAddress = (params) => {
  return post('/userAddress/createdAddress', params)
}

// 新增地址
const updatedAddress = (params) => {
  return post('/userAddress/updatedAddress', params)
}

// 新增地址
const deleteAddress = (params) => {
  return get('/userAddress/deleteAddress', params)
}

// 获取地址地址
const getAddressById = (params) => {
  return get('/userAddress/getAddressById', params)
}

export default {
  getAllCity,
  createdAddress,
  updatedAddress,
  deleteAddress,
  getAddressById
}
