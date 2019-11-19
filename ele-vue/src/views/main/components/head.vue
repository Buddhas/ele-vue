<template>
  <div class="head">
    <div class="address">
      <span class="iconfont">&#xe734;</span>
      <span class="address-info">中国工商银行(市民中心支行)</span>
      <span class="iconfont">&#xe615;</span>
    </div>
    <div id="head">
      <div class="search" :class="{ fixed: fixTop }">
        <div class="search-box">搜索饿了么商家、商品名称</div>
      </div>
      <div class="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 是否需要吸顶
    needFixTop: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      fixTop: false,
      container: null
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      if (this.needFixTop) {
        this.container = document.getElementById('head')
        document.addEventListener('scroll', this.handleCheck)
      }
    },
    handleCheck() {
      this.checkFix(this.container)
    },
    checkFix(container) {
      const { top, y } = container.getBoundingClientRect()
      const distance = top || y || 0
      if (distance >= 0) {
        this.fixTop = false
      } else {
        this.fixTop = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .head {
    width: 100%;
    position: relative;
  }
  .text {
    display: block;
    position: relative;
    width: 100%;
    height: 66px;
  }
  .address {
    width: 100%;
    padding: 15px 15px 0 15px;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display: flex;
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
    width: 100%;
    padding: 15px 15px 15px 15px;
    position: absolute;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    .search-box {
      width: 100%;
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      text-align: center;
      color: #999;
      background-color: #ffffff;
    }
  }
  .fixed {
    width: 100%;
    height: 66px;
    position: fixed;
    z-index: 250;
    top: 0px;
  }
</style>
