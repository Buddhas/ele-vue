<!--
 * @Descripttion: 
 * @version: 
 * @Author: 笑佛弥勒
 * @Date: 2020-01-20 20:41:57
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-05 22:45:02
 -->
<template>
  <header class="header-wrapper">
    <div class="header flex align_center justify_center" :style="{backgroundColor:bgColor}" @click="goBack">
      <span class="iconfont icon">&#xe670;</span>
      <div class="text flex align_center justify_center">
        <h1 class="elli">{{ title }}</h1>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: '我的地址'
    },
    bgColor: {
      type: String,
      default: '#00A0FF'
    },
    defaultJump: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goBack() {
      if (this.defaultJump) {
        this.$router.go(-1)
      } else {
        this.$emit('customJump')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-wrapper {
    width: 100%;
    height: 46px;
    .header {
      width: 100%;
      height: 46px;
      position: fixed;
      color: #fff;
      .icon {
        position: absolute;
        left: 20px;
        font-size: 16px;
      }
      .text {
        width: 100%;
        font-size: 20px;
        h1 {
          width: 60%;
          text-align: center;
        }
      }
    }
  }
</style>
