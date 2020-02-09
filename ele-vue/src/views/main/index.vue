<!--
 * @Descripttion: 首页组件
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditors  : 笑佛弥勒
 * @LastEditTime : 2020-02-09 17:37:42
 -->
<template>
  <div class="main-wrapper">
    <Head />
    <ScrollFoodCategory :categories="categories" />
    <div class="store-list">
      <p class="title flex align_center justify_center">推荐商家</p>
      <StoreListHead offset-top="66" />
      <div class="shop-list">
        <ShopList v-for="(item, index) in merchants" :key="index" :merchant="item" />
        <LoadingMore :finally-flag="allLoaded" />
      </div>
    </div>
    <FootGuide />
  </div>
</template>

<script>
// 业务组件
import Head from './components/head'
import ScrollFoodCategory from './components/scrollFoodCategory'
import StoreListHead from 'components/storeListHead'
import ShopList from 'components/shopList'
import FootGuide from 'components/footGuide'
// 公共组件
import LoadingMore from '@/components/loadingMore'
// api请求
import { main as api } from '@/api/index'

// mixins
import LoadingMoreMixin from '@/common/mixins/loadingMore'
// VUEX
import { mapMutations } from 'vuex'
export default {
  mixins: [LoadingMoreMixin],
  components: {
    Head,
    ScrollFoodCategory,
    StoreListHead,
    ShopList,
    FootGuide,
    LoadingMore
  },
  data() {
    return {
      categories: [],
      merchants: []
    }
  },
  created() {
    this._getShopCategory()
    this._getMerchantsByPage()
  },
  methods: {
    ...mapMutations('main', ['MERCHANTCATEGORY']),
    // 获取商铺分类
    _getShopCategory() {
      api.getShopCategory().then((res) => {
        this.MERCHANTCATEGORY(res.data)
        this.categories.push(res.data.map((item, index) => {
          return {
            id: item.id,
            name: item.name,
            image: item.image
          }
        }))
      })
    },
    // 获取商铺
    _getMerchantsByPage() {
      const params = {
        page: this.page,
        pageSize: this.pageSize
      }
      api.getMerchantsByPage(params).then((res) => {
        this.totalPage = Math.ceil(res.data.count / this.pageSize)
        this.merchants.push(...res.data.rows)
      })
    },
    // 加载更多
    loadingMore() {
      this._getMerchantsByPage()
    }
  }
}
</script>

<style lang="scss" scoped>
  .store-list {
    background-color: #fff;
    padding-bottom: 55px;
    .title {
      font-size: 14px;
      color: #000;
      line-height: 40px;
      padding-top: 20px;
      padding-bottom: 20px;
      text-align: center;
      padding: 0 5px;
      &::before {
        display: block;
        margin-right: .213333rem;
        content: "";
        width: .533333rem;
        height: .026667rem;
        background-color:#999;
      }
      &::after {
        display: block;
        margin-left: .213333rem;
        content: "";
        width: .533333rem;
        height: .026667rem;
        background-color:#999;
      }
    }
  }
</style>
