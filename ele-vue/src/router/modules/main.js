/*
 * @Descripttion: 首页路由
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditors  : 笑佛弥勒
 * @LastEditTime : 2020-02-09 18:39:41
 */
const index = () => import(/* webpackChunkName: "mainIndex" */ '@/views/main/index')
const searchSource = () => import(/* webpackChunkName: "searchSource" */ '@/views/main/searchSource')

export default [
  { path: 'main/index.html', component: index, name: 'mainIndex', meta: { keepAlive: true }},
  { path: 'main/searchSource.html', component: searchSource, name: 'searchSource', meta: { keepAlive: true }}
]
