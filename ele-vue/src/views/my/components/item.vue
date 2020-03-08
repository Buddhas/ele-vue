<!--
 * @Descripttion: item
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-08 16:11:11
 -->
<template>
  <div class="item-wrapper flex justify_between" @click="jump">
    <div class="left">
      <span class="iconfont" :style="{color:iconColor}" v-html="icon"></span>
      <span style="margin-left:5px">{{ text }}</span>
    </div>
    <div class="right iconfont">
      &#xe60b;
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '我的地址'
    },
    icon: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
  methods: {
    jump() {
      if (this.link) {
        this.$router.push({ path: this.link })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .item-wrapper {
    padding: 0 15px;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #f5f5f5;
    font-size: 18px;
    color: #333;
    .right {
      color: #333;
      font-size: 12px;
    }
  }
</style>
