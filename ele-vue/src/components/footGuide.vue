<template>
  <section class="foot-guide flex align_center">
    <div v-for="(item, index) in guideLists" :key="index" class="item">
      <span class="iconfont" v-html="item.icon"></span>
      <p class="text">{{ item.name }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      guideLists: [
        {
          icon: '&#xe734;',
          name: '首页'
        }, {
          icon: '&#xe734;',
          name: '搜索'
        }, {
          icon: '&#xe734;',
          name: '订单'
        }, {
          icon: '&#xe734;',
          name: '我的'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .foot-guide {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0px;
    z-index: 50;
    background-color: #ffffff;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    .item {
      flex: 1;
      text-align: center;
      .text {
        margin-top: 5px;
      }
    }
  }
</style>
