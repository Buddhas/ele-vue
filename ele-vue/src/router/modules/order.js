const index = () => import(/* webpackChunkName: "mainIndex" */ '@/views/order/index')

export default [
  { path: 'order/index.html', component: index, name: 'orderIndex' }
]
