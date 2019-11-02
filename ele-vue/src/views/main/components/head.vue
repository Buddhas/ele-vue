<template>
  <div class="head">
    <div class="address">
      <span class="iconfont">&#xe734;</span>
      <span class="address-info">中国工商银行(市民中心支行)</span>
      <span class="iconfont">&#xe615;</span>
    </div>
    <div class="search">
      <div class="search-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head'
}
</script>

<style lang="scss" scoped>
  .head {
    width: 100%;
    padding: 0 15px 15px 15px;
    overflow: hidden;
    background-image: linear-gradient(90deg,#0af,#0085ff);
  }
  .address {
    display: flex;
    padding: 10px 0;
    font-size: 18px;
    color: #ffffff;
    .address-info {
      display: inline-block;
      width: 60%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .search {
    .search-box {
      width: 100%;
      height: 36px;
      background-color: #ffffff;
    }
  }
</style>
