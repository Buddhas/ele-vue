const index = () => import(/* webpackChunkName: "loginIndex" */ '@/views/login/index')

export default [
  { path: 'login/index.html', component: index, name: 'loginIndex' }
]