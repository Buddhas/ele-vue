<template>
  <div class="my-wrapper">
    <section class="header">
      <div class="user-info flex align_center">
        <img src="./image/avatar.png" alt />
        <div class="info">
          <div>
            <p class="part-1 elli">{{ getUserInfo.user_name }}</p>
            <p class="part-2">开通会员享受更多特权</p>
          </div>
        </div>
        <span class="iconfont" style="color:#fff">&#xe60b;</span>
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
        <Item
          :used-flag="true"
          text="我的地址"
          icon="&#xe734;"
          icon-color="#4AA5F0"
          link="../address/index.html"
        />
      </section>
      <section class="item-part">
        <Item
          v-for="(item, index) in itemPartOne"
          :key="index"
          :icon="item.icon"
          :used-flag="item.usedFlag"
          :text="item.value"
          :icon-color="item.iconColor"
        />
      </section>
      <section class="item-part">
        <Item
          v-for="(item, index) in itemPartTwo"
          :key="index"
          :icon="item.icon"
          :used-flag="item.usedFlag"
          :text="item.value"
          :icon-color="item.iconColor"
        />
      </section>
    </section>
    <section class="bottom">
      <a
        href="https://h5.ele.me/service/agreement/#HEAEDER_SHOW=1&initTitle=%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96&key=ruleQue50"
      >隐私政策</a>
    </section>
    <FootGuide :guide-index="3" />
  </div>
</template>

<script>
import Item from './components/item'
import FootGuide from 'components/footGuide'
import { mapGetters } from 'vuex'
export default {
  components: {
    Item,
    FootGuide
  },
  data() {
    return {
      itemPartOne: [
        {
          value: '金币商城',
          icon: '&#xe620;',
          iconColor: '#94D94A',
          usedFlag: false
        },
        {
          value: '分享拿20现金',
          icon: '&#xe617;',
          iconColor: '#FD9C7D',
          usedFlag: false
        }
      ],
      itemPartTwo: [
        {
          value: '我的客服',
          icon: '&#xe65a;',
          iconColor: '#4DA6F0',
          usedFlag: false
        },
        {
          value: '下载饿了么app',
          icon: '&#xe639;',
          iconColor: '#6DC0FF',
          usedFlag: false
        },
        {
          value: '规则中心',
          icon: '&#xe60e;',
          iconColor: '#4DA6F0',
          usedFlag: false
        }
      ]
    }
  },
  computed: {
    ...mapGetters('common', ['getUserInfo'])
  }
}
</script>

<style lang="scss" scoped>
.my-wrapper {
  width: 100%;
  min-height: 100%;
  background-color: #f5f5f5;
  .header {
    padding: 25px 15px;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .info {
      flex-grow: 1;
      margin-left: 20px;
      .part-1 {
        max-width: 180px;
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
