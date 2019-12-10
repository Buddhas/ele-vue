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
      type: Number,
      default: 4
    }
  },
  computed: {
    starType() {
      return 'star-' + this.size
    },
    itemClasses() {
      const result = []
      const score = Math.floor(this.score * 2) / 2
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
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;
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
