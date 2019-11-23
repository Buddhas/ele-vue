import App from '../App'
import main from './modules/main'
import shopDetail from './modules/shopDetail'

export default [
  {
    path: '/vue',
    component: App, // 顶层路由，对应index.html
    children: [
      ...main,
      ...shopDetail
    ]
  }
]
