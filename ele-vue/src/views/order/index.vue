<template>
  <div class="order-wrapper">
    <section class="no-data">
      <img src="./images/noOrderData.png" alt="">
      <p>暂无订单</p>
    </section>
    <section class="item-wrapper">
      <Item v-for="(item, index) in 10" :key="index" class="item" />
    </section>
    <section class="loading">
      <cube-loading :size="28" />
    </section>
  </div>
</template>

<script>
import Item from './components/orderItem'
export default {
  components: {
    Item
  }
}

</script>
<style lang="scss" scoped>
  .order-wrapper {
    .item-wrapper {
      .item {
        margin-bottom: 10px;
      }
    }
    .no-data {
      text-align: center;
      padding: 20px 0;
      img {
        max-width: 180px;
        height: auto;
      }
      p {
        color: #6a6a6a;
        font-size: 16px;
      }
    }
    .loading {
      text-align: center；
    }
    .loading /deep/ .cube-loading-spinners {
      display: inline-block;
    }
  }
</style>
