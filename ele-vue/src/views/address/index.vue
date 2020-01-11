<template>
  <div class="address-index-wrapper">
    <Header />
    <div class="item-wrapper">
      <Item v-for="(item, index) in 10" :key="index" />
    </div>
    <div class="bottom">
      新增地址
    </div>
  </div>
</template>

<script>
import Item from './components/item'
import Header from '@/components/header'
export default {
  components: {
    Item,
    Header
  }
}
</script>
<style lang="scss" scoped>
  .address-index-wrapper {
    width: 100%;
    background-color: #fff;
    .item-wrapper {
      padding-bottom: 60px;
    }
    .bottom {
      width: 100%;
      z-index: 10;
      position: fixed;
      height: 50px;
      border-top: 1px solid #ddd;
      line-height: 50px;
      background: #fff;
      bottom: 0px;
      text-align: center;
      font-size: 18px;
      color: #3190e8;
    }
  }
</style>
