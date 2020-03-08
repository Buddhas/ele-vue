/*
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditTime: 2020-03-08 17:45:55
 * @LastEditors: 笑佛弥勒
 * @Description: MUTATION基类
 * @FilePath: \ele-vue\ele-vue\src\store\mutation-types.js
 */
// common type

// 地址
export const common = Object.freeze({
  ADDCACHE: 'ADDCACHE',
  DELCACHE: 'DELCACHE'
})

// 商铺详情
export const shopDetail = Object.freeze({
  MERCHANTDETAIL: 'MERCHANTDETAIL'
})

// 商铺首页
export const main = Object.freeze({
  MERCHANTCATEGORY: 'MERCHANTCATEGORY',
})

// 地址
export const address = Object.freeze({
  MERCHANTCATEGORY: 'MERCHANTCATEGORY',
  CURRENTCITY: 'CURRENTCITY',
  SEARCHADDRESS: 'SEARCHADDRESS',
  SHIPADDRESS: 'SHIPADDRESS'
})
