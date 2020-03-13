import Vue from 'vue'
import Router from 'vue-router'
import routes from '../router/index'
import store from '../store/index'
// api请求
import { login as api } from '@/api/index'
Vue.use(Router)

const base = `${process.env.BASE_URL}` // 动态获取二级目录

const router = new Router({
  mode: 'history',
  base: base,
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

router.beforeEach(async(to, from, next) => {
  // 做些什么，通常权限控制就在这里做哦
  // 必须写next()哦，不然你的页面就会白白的，而且不报错，俗称"代码下毒"
  if (to.meta.needLogin) {
    const res = await api.isLogin()
    if (!res.data) {
      router.push({
        path: '/vue/login/index.html',
        query: { redirect: to.path.split('/vue')[1] }
      })
    }
    store.commit('common/SETUSERINFO', res.data || {})
  }
  next()
})

export default router
