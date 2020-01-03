<template>
  <div class="my-wrapper">
    <section class="header">
      <div class="user-info flex align_center">
        <img src="./image/avatar.png" alt="">
        <div class="info">
          <div>
            <p class="part-1">登录/注册</p>
            <p class="part-2">登录后享受更多特权</p>
          </div>
        </div>
        <span>></span>
      </div>
    </section>
    <section class="package flex">
      <div class="part-1 flex flex_column justify_center">
        <p style="font-size:24px;font-weight:700">
          <span style="font-size:24px">0</span>
          <span style="font-size:12px">个</span>
        </p>
        <span style="margin-top:5px">红包</span>
      </div>
      <div class="part-2 flex flex_column justify_center">
        <p style="font-weight:700;color:rgb(106, 194, 11);">
          <span style="font-size:24px;">0</span>
          <span style="font-size:12px">个</span>
        </p>
        <span style="margin-top:5px">金币</span>
      </div>
    </section>
    <section>
      <section class="item-part">
        <Item />
      </section>
      <section class="item-part">
        <Item v-for="(item, index) in 2" :key="index" />
      </section>
      <section class="item-part">
        <Item v-for="(item, index) in 3" :key="index" />
      </section>
    </section>
    <section class="bottom">
      <a href="https://h5.ele.me/service/agreement/#HEAEDER_SHOW=1&initTitle=%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96&key=ruleQue50">隐私政策</a>
    </section>
  </div>
</template>

<script>
import Item from './components/item'
export default {
  components: {
    Item
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .my-wrapper {
    width: 100%;
    min-height: 100%;
    background-color: #F5F5F5;
    .header {
      padding: 25px 15px;
      background-image: linear-gradient(90deg,#0af,#0085ff);
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      .info {
        flex-grow: 1;
        margin-left: 20px;
        .part-1 {
          font-size: 18px;
          font-weight: bold;
          color: #fff;
        }
        .part-2 {
          margin-top: 10px;
          font-size: 12px;
          color: #fff;
        }
      }
    }
    .package {
      width: 100%;
      height: 83px;
      background-color: #fff;
      align-items: center;
      .part-1 {
        flex: 1;
        text-align: center;
        height: 100%;
        color: rgb(255, 95, 62);
        border-right: 1px solid #f5f5f5;
        font-size: 12px;
      }
      .part-2 {
        flex: 1;
        height: 100%;
        text-align: center;
        color: #666;
        font-size: 12px;
      }
    }
    .item-part {
      margin-top: 10px;
    }
    .bottom {
      width: 100%;
      text-align: center;
      font-size: 14px;
      padding: 20px 0px;
      a {
        color: #4da6f0;
      }
    }
  }
</style>
