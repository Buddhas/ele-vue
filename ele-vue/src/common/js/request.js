import axios from 'axios'
import env from '@/config/env'
import Vue from 'vue'

/**
 * 自定义Axios实例
 */
const AJAX = axios.create({
  baseURL: env.baseUrl,
  timeout: 30000,
  withCredentials: env.credential
})

// 添加请求拦截器
AJAX.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    if (process.env.NODE_ENV === 'development') {
      config.url = `http://${location.host}` + config.url // 自定义反向代理
    }
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
AJAX.interceptors.response.use(
  function(response) {
    const status = [10001, 10002, 10003]
    if (status.includes(response.data.status)) {
    } else {
      return response.data
    }
  },
  function(error) {
    // 对响应错误做点什么，比如400、401、402等等
    if (error && error.response) {
      console.log(error.response)
    }
    return Promise.reject(error)
  }
)

// 定义对外Get、Post、File请求

export const get = (url, param = {}, headers = {}) => {
  return AJAX.get(url, {
    params: param,
    headers
  })
}

export const post = (url, param = {}, headers = {}) => {
  return AJAX.post(url, param, {
    headers
  })
}
