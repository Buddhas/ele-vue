const index = () => import(/* webpackChunkName: "mainIndex" */ '@/views/address/index')

export default [
  { path: 'address/index.html', component: index, name: 'addressIndex' }
]
