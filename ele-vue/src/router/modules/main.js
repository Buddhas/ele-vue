const index = () => import(/* webpackChunkName: "mainIndex" */ '@/views/main/index')
const searchSource = () => import(/* webpackChunkName: "searchSource" */ '@/views/main/searchSource')

export default [
  { path: 'main/index.html', component: index, name: 'mainIndex' },
  { path: 'main/searchSource.html', component: searchSource, name: 'searchSource' }
]
