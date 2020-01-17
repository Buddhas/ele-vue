<template>
  <section class="address-item-wrapper flex">
    <div class="left">
      <p class="part-1">盛世美商城</p>
      <p class="part-2">广东省深圳市罗湖区建设路火车站大楼C区</p>
    </div>
    <div class="right">
      0米
    </div>
  </section>
</template>

<script>
export default {
  
}

</script>
<style lang="scss" scoped>
  .address-item-wrapper {
    padding: 10px 15px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .left {
      flex: 1;
      .part-1 {
        font-size: 16px;
        font-weight: 700;
        color: #333;
      }
      .part-2 {
        font-size: 12px;
        color: #333;
        margin-top: 5px;
      }
    }
    .right {
      width: 50px;
      color: #2a2a2a;
      font-size: 12px;
    }
  }
</style>
