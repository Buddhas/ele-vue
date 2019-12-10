<template>
  <span class="support-ico decrease" :class="iconCls"></span>
</template>

<script>
export default {
  props: {
    type: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    iconCls() {
      const classMap = [
        'decrease',
        'discount',
        'special',
        'invoice',
        'guarantee'
      ]
      return `icon-1 ${classMap[this.type]}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .support-ico {
    display: inline-block;
    background-repeat: no-repeat;
    &.icon-1 {
      width: 12px;
      height: 12px;
      background-size: 12px 12px;
    }
    &.decrease {
      background-image: url('../image/decrease.png')
    }
  }
</style>
