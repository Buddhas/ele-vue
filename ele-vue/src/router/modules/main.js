/*
 * @Descripttion: 首页路由
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-07 20:43:40
 */
const index = () => import(/* webpackChunkName: "mainIndex" */ '@/views/main/index')
const searchSource = () => import(/* webpackChunkName: "searchSource" */ '@/views/main/searchSource')
const search = () => import(/* webpackChunkName: "searchSource" */ '@/views/main/search')

export default [
  { path: 'main/index.html', component: index, name: 'mainIndex' },
  { path: 'main/searchSource.html', component: searchSource, name: 'searchSource' },
  { path: 'main/search.html', component: search, name: 'search', meta: { keepAlive: true }}
]
