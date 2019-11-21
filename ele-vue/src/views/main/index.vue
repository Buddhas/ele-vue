<template>
  <div class="main-wrapper">
    <Head />
    <ScrollFoodCategory />
    <div class="store-list">
      <p class="title flex align_center justify_center">推荐商家</p>
      <StoreListHead />
      <div class="shop-list">
        <ShopList v-for="(item, index) in 10" :key="index" />
      </div>
    </div>
    <FootGuide />
  </div>
</template>

<script>
import Head from './components/head'
import ScrollFoodCategory from './components/scrollFoodCategory'
import StoreListHead from 'components/storeListHead'
import ShopList from 'components/shopList'
import FootGuide from 'components/footGuide'
export default {
  components: {
    Head,
    ScrollFoodCategory,
    StoreListHead,
    ShopList,
    FootGuide
  }
}
</script>

<style lang="scss" scoped>
  .store-list {
    background-color: #fff;
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
