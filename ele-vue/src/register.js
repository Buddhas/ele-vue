/*
 * @Author: your name
 * @Date: 2020-01-05 15:47:10
 * @LastEditTime : 2020-02-05 00:30:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ele-vue\ele-vue\src\register.js
 */
import { createAPI } from 'cube-ui'
import Vue from 'vue'

import HeaderDetail from '@/views/shopDetail/components/headerDetail'
import Food from '@/views/shopDetail/components/food'
import ShopCartSticky from '@/views/shopDetail/components/shopCartSticky'
import ShopCartList from '@/views/shopDetail/components/shopCartList'

createAPI(Vue, HeaderDetail)
createAPI(Vue, Food)
createAPI(Vue, ShopCartSticky)
createAPI(Vue, ShopCartList)
