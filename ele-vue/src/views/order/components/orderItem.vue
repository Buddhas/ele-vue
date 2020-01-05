<template>
  <section class="order-item-wrapper flex">
    <div class="left">
      <img src="http://img5.imgtn.bdimg.com/it/u=601831375,2652856306&fm=26&gp=0.jpg" alt="商铺图片">
    </div>
    <div class="right flex flex_column justify_between">
      <div class="top flex">
        <div class="left">
          <p class="elli name">小公式●秋冬季热沙拉(福田店)</p>
          <span class="time">2019-08-09 17:57</span>
        </div>
        <div class="right">
          订单超时未支付
        </div>
      </div>
      <div class="bottom flex">
        <div class="left elli">
          <span>巴黎水(玻璃瓶装）</span>
          <span>等3件商品</span>
        </div>
        <div class="right">
          ¥36.50
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>
  .order-item-wrapper {
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fff;
    .left {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      img {
        max-width: 40px;
        height: 40px;
      }
    }
    .right {
      flex: 1;
      .top {
        width: 100%;
        .left {
          flex: 1;
          .name {
            max-width: 200px;
            margin-bottom: 5px;
            font-size: 16px;
            color: #333;
          }
          .time {
            margin-top: 8xp;
            font-size: 12px;
            color:#999;
          }
        }
        .right {
          width: 100px;
          font-size: 14px;
          color: #333;
          text-align: right;
        }
      }
      .bottom {
        height: 20px;
        line-height: 20px;
        .left {
          flex: 1;
          font-size: 14px;
          color: #666;
        }
        .right {
          width: 100px;
          text-align: right;
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }
</style>
