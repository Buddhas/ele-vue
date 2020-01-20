const index = () => import(/* webpackChunkName: "addressIndex" */ '@/views/address/index')
const addAddress = () => import(/* webpackChunkName: "addAddress" */ '@/views/address/addAddress')
const selectAddress = () => import(/* webpackChunkName: "selectAddress" */ '@/views/address/selectAddress')

export default [
  { path: 'address/index.html', component: index, name: 'addressIndex' },
  { path: 'address/addAddress.html', component: addAddress, name: 'addAddress' },
  { path: 'address/selectAddress.html', component: selectAddress, name: 'selectAddress' }
]
