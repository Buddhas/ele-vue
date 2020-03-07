/*
 * @Descripttion: 地址路由
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-20 20:41:57
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-07 11:32:35
 */
const index = () => import(/* webpackChunkName: "addressIndex" */ '@/views/address/index')
const addAddress = () => import(/* webpackChunkName: "addAddress" */ '@/views/address/addAddress')
const selectAddress = () => import(/* webpackChunkName: "selectAddress" */ '@/views/address/selectAddress')
const cityList = () => import(/* webpackChunkName: "selectAddress" */ '@/views/address/cityList')
const searchAddress = () => import(/* webpackChunkName: "selectAddress" */ '@/views/address/searchAddress')

export default [
  { path: 'address/index.html', component: index, name: 'addressIndex' },
  { path: 'address/addAddress.html', component: addAddress, name: 'addAddress', meta: { keepAlive: true }},
  { path: 'address/selectAddress.html', component: selectAddress, name: 'selectAddress' },
  { path: 'address/cityList.html', component: cityList, name: 'cityList' },
  { path: 'address/searchAddress.html', component: searchAddress, name: 'searchAddress' }
]

