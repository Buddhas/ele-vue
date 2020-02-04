<!--
 * @Author: 添加图标
 * @Date: 2020-01-05 15:47:10
 * @LastEditTime : 2020-02-05 00:20:54
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ele-vue\ele-vue\src\views\shopDetail\components\supportIco.vue
 -->
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
    &.guarantee {
      background-image: url('../image/guarantee.png')
    }
    &.invoic {
      background-image: url('../image/invoic.png')
    }
  }
</style>
