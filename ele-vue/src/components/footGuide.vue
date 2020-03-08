<!--
 * @Descripttion: 
 * @version: 
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-08 15:09:08
 -->
<template>
  <section class="foot-guide flex align_center">
    <div
      v-for="(item, index) in guideLists"
      :key="index"
      class="item"
      :class="{ active: guideIndex == index }"
      @click="toGuide(index)"
    >
      <span class="iconfont" v-html="item.icon"></span>
      <p class="text">{{ item.name }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    guideIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      guideLists: [
        {
          icon: '&#xe612;',
          name: '首页'
        },
        {
          icon: '&#xe60a;',
          name: '搜索'
        },
        {
          icon: '&#xe76d;',
          name: '订单'
        },
        {
          icon: '&#xe651;',
          name: '我的'
        }
      ]
    }
  },
  methods: {
    toGuide(index) {
      switch (index) {
        case 0:
          this.$router.push('../main/index.html')
          break
        case 1:
          this.$router.push('../main/search.html')
          break
        case 2:
          this.$createDialog({
            title: '温馨提示',
            content: '正在开发中...'
          }).show()
          break
        case 3:
          this.$router.push('../my/index.html')
          break
      }
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
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
  .item {
    flex: 1;
    text-align: center;
    .text {
      margin-top: 5px;
    }
    &.active {
      color: #0089dc;
    }
  }
}
</style>
