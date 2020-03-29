/*
 * @Descripttion: 路由配置
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-29 22:35:15
 */
import App from '../App'
import main from './modules/main'
import shopDetail from './modules/shopDetail'
import login from './modules/login'
import my from './modules/my'
import order from './modules/order'
import address from './modules/address'

export default [
  {
    path: '/vue',
    component: App, // 顶层路由，对应index.html
    children: [
      ...main,
      ...shopDetail,
      ...login,
      ...my,
      ...order,
      ...address
    ]
  }
]
