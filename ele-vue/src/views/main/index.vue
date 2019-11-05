<template>
  <div class="main-wrapper">
    <Head />
    <ScrollFoodCategory />
    <div class="store-list">
      <p class="title flex align_center justify_center">推荐商家</p>
      <StoreListHead />
    </div>
  </div>
</template>

<script>
import Head from './components/head'
import ScrollFoodCategory from './components/scrollFoodCategory'
import StoreListHead from 'components/storeListHead'
export default {
  components: {
    Head,
    ScrollFoodCategory,
    StoreListHead
  }
}
</script>

<style lang="scss" scoped>
  .store-list {
    background-color: #fff;
    .title {
      font-size: 16px;
      color: black;
      line-height: 40px;
      padding-top: 20px;
      padding-bottom: 20px;
      text-align: center;
      padding: 0 5px;
      &::before {
        display: block;
        margin-right: .135135rem;
        content: "";
        width: .533333rem;
        height: .026667rem;
        background-color:#999;
      }
      &::after {
        display: block;
        margin-left: .135135rem;
        content: "";
        width: .533333rem;
        height: .026667rem;
        background-color:#999;
      }
    }
  }
</style>
