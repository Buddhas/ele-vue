/*
 * @Descripttion: 登录页api
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-02-24 22:59:56
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-29 11:32:44
 */
import { get, post } from '@/common/js/request'

// 发送邮件
const sendEmail = (params) => {
  return post('/api/user/sendEmail', params)
}

// 登陆
const login = (params) => {
  return post('/api/user/login', params)
}

// 检验用户是否登录
const isLogin = (params) => {
  return get('/api/user/isLogin', params)
}
export default {
  sendEmail,
  login,
  isLogin
}
