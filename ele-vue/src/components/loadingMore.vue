<!--
 * @Descripttion: 
 * @version: 
 * @Author: 笑佛弥勒
 * @Date: 2020-01-26 16:35:38
 * @LastEditors  : 笑佛弥勒
 * @LastEditTime : 2020-02-10 23:13:16
 -->
<template>
  <div class="loading-more">
    <cube-loading v-if="!finallyFlag" :size="24" />
    <div v-else class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    finallyFlag: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '没有更多了~'
    }
  }
}
</script>

<style lang="scss" scoped>
  .loading-more {
    text-align: center;
    .text {
      display: inline-block;
      padding: 10px 0;
      font-size: 16px;
    }
  }
  .loading-more /deep/ .cube-loading-spinners {
    display: inline-block;
  }
</style>
