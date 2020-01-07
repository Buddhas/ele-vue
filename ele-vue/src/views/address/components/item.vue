<template>
  <section class="address-item">
    <div class="user-info">
      <span style="color: #333;font-weight: 700;margin-right:5px">陈斌</span><span style="margin-right:5px">先生</span><span>17688702092</span>
    </div>
    <div class="flex bottom">
      <div class="message flex align_center">
        <span class="home">家</span>
        <span class="detail">德力西大厦十二楼德力西大厦十二楼德力西大</span>
      </div>
      <div class="icon-wrapper">
        <span>1</span>
        <span>2</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .address-item {
    padding: 15px 10px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    .user-info {
      font-size: 18px;
      color: #666;
    }
    .bottom {
      margin-top: 8px;
      .message {
        flex: 1;
        .detail {
          margin-left: 3px;
          font-size: 16px;
          color: #666;
        }
        .home {
          color: #ff5722;
          border: 1px solid #ff5722;
          font-size: 10px;
          display: inline-block;
          padding: 1px 2px;
        }
        .company  {
          color: #3190e8;
          border: 1px solid #3190e8;
          font-size: 10px;
          display: inline-block;
          padding: 1px 2px;
        }
        .school {
          color: #00d762;
          border: 1px solid #00d762;
          font-size: 10px;
          display: inline-block;
          padding: 1px 2px;
        }
      }
      .icon-wrapper {
        width: 40px;
      }
    }
  }
</style>
