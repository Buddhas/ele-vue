const index = () => import(/* webpackChunkName: "shopIndex" */ '@/views/shopDetail/index')

export default [
  { path: 'shop/index.html', component: index, name: 'shopIndex' }
]
