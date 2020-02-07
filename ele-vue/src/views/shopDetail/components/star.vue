<!--
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditTime : 2020-02-07 15:45:28
 * @LastEditors  : 笑佛弥勒
 * @Description: In User Settings Edit
 * @FilePath: \github\ele-vue\ele-vue\src\views\shopDetail\components\star.vue
 -->
<template>
  <div class="star flex align_center justify_center" :class="starType">
    <span
      v-for="(itemClass, index) in itemClasses"
      :key="index"
      :class="itemClass"
      class="star-item"
    ></span>
  </div>
</template>

<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default {
  props: {
    size: {
      type: Number,
      default: 48
    },
    score: {
      type: [Number, String],
      default: 4
    }
  },
  computed: {
    starType() {
      return 'star-' + this.size
    },
    itemClasses() {
      const result = []
      const score = Math.floor(this.score * 2) / 2 // 0.5以下按整数算，0.5以上按一半算
      const hasDecimal = score % 1 !== 0
      const integer = Math.floor(score)
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON)
      }
      if (hasDecimal) {
        result.push(CLS_HALF)
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.star {
  .star-item {
    background-repeat: no-repeat;
  }
  &.star-48 {
    .star-item {
      width: 16px;
      height: 16px;
      margin-right: 5px;
      background-size: 16px 16px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        background-image: url('../image/star48_on.png');
      }
      &.half {
        background-image: url('../image/star48_half.png');
      }
      &.off {
        background-image: url('../image/star48_off.png');
      }
    }
  }
  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        background-image: url('../image/star48_on.png');
      }
      &.half {
        background-image: url('../image/star48_half.png');
      }
      &.off {
        background-image: url('../image/star48_off.png');
      }
    }
  }
}
</style>
