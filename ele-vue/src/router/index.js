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
