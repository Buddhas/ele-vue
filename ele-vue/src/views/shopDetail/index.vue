<template>
  <div class="shop-detail">
    <Header />
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
export default {
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
  }
}
</script>

<style lang="scss" scoped>
.shop-detail {
  .tab-wrapper {
    position: fixed;
    top: 136px;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
