<!--
 * @Descripttion: 商家首页
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditors  : 笑佛弥勒
 * @LastEditTime : 2020-02-02 16:07:26
 -->
<template>
  <div class="shop-detail">
    <Header :merchant-detail="merchantDetail" />
    <div class="tab-wrapper">
      <tab :tabs="tabs" />
    </div>
  </div>
</template>

<script>
// 业务组件
import Header from './components/vHeader'
import Goods from './components/goods'
import Ratings from './components/ratings'
import Seller from './components/seller'
import Tab from './components/tab'

// api请求
import { shopDetail as api } from '@/api/index'

export default {
  data() {
    return {
      merchantId: this.$route.query.merchantId,
      merchantDetail: {}
    }
  },
  /* eslint-disable */
  components: {
    Header,
    Goods,
    Ratings,
    Seller,
    Tab
  },
  /* eslint-enable */
  computed: {
    tabs() {
      return [
        {
          label: '商品',
          component: Goods,
          data: {
            seller: this.seller
          }
        },
        {
          label: '评论',
          component: Ratings,
          data: {
            seller: this.seller
          }
        },
        {
          label: '商家',
          component: Seller,
          data: {
            seller: this.seller
          }
        }
      ]
    }
  },
  created() {
    this._getMerchantsById()
  },
  methods: {
    _getMerchantsById() {
      const params = {
        id: this.merchantId
      }
      api.getMerchantsById(params).then((res) => {
        this.merchantDetail = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-detail {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .tab-wrapper {
    position: fixed;
    top: 136px;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
