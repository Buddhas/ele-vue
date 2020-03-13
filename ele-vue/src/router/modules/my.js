const index = () => import(/* webpackChunkName: "mainIndex" */ '@/views/my/index')

export default [
  { path: 'my/index.html', component: index, name: 'myIndex', meta: { needLogin: true }}
]
