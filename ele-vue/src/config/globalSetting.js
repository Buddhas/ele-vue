/*
 * @Descripttion: 全局变量配置
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-03-27 23:15:07
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-29 15:20:53
 */
const GlobalSetting = {
  IMAGESDOMAIN: process.env.NODE_ENV === 'development' ? ' http://127.0.0.1:7001/static/' : 'http://120.79.131.113:7001/static/'
}

export default GlobalSetting
