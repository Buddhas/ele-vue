const index = () => import(/* webpackChunkName: "mainIndex" */ '@/views/main/index')

export default [
  { path: 'main/index.html', component: index, name: 'mainIndex' }
]
