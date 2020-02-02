<template>
  <div class="header">
    <div class="contain-wrapper flex">
      <div class="avatar">
        <img width="64" height="64" :src="seller.image" />
      </div>
      <div class="content flex flex_column justify_between elli">
        <div class="name">{{ merchantDetail.name }}</div>
        <div class="description">蜂鸟专送/38分钟送达</div>
        <div class="support">在线支付满{{ merchantDetail.top_up}}减{{ merchantDetail.minus }}</div>
      </div>
      <div class="support-count flex align_center">
        <span class="count">5个</span>
        <i class="iconfont">&#xe734;</i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text elli">{{ merchantDetail.synopsis }}</span>
      <i class="iconfont icon">&#xe60b;</i>
    </div>
    <!-- 阴影部分 -->
    <div class="background">
      <img :src="seller.image" width="100%" height="100%" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object,
      default() {
        return {
          image:
            'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg'
        }
      }
    },
    merchantDetail: {
      type: Object,
      default() {
      }
    }
  },
  methods: {
    showDetail() {
      this.headerDetailComp = this.headerDetailComp || this.$createHeaderDetail({
        $props: {
          seller: 'seller'
        }
      })
      this.headerDetailComp.show()
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
    overflow: hidden;
    color: #fff;
  }
  .contain-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    background: rgba(7,17,27,0.5);
    z-index: 1;
    .avatar {
      flex: 0 0 64px;
      width: 64px;
      margin-right: 16px;
    }
    .content {
      flex: 1;
      .name {
        margin-left: 6px;
        margin-top: 5px;
        font-size: 16px;
        font-weight: bold;
      }
      .description {
        line-height: 12px;
        font-size: 12px;
      }
      .support{
        line-height: 12px;
        font-size: 10px;
      }
    }
    .support-count {
      position: absolute;
      right: 12px;
      bottom: 14px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: 14px;
      background: rgba(7,17,27,0.2);
    }
  }
  .bulletin-wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    background: rgba(7,17,27,0.7);
    .icon {
      position: absolute;
      right: 3px;
      font-size: 12px;
    }
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    filter: blur(10px);
  }
</style>
