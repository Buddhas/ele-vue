const index = () => import(/* webpackChunkName: "mainIndex" */ '@/views/address/index')
const addAddress = () => import(/* webpackChunkName: "mainIndex" */ '@/views/address/addAddress')

export default [
  { path: 'address/index.html', component: index, name: 'addressIndex' },
  { path: 'address/addAddress.html', component: addAddress, name: 'addAddress' }
]
