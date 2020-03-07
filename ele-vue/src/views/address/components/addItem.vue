<!--
 * @Descripttion: 地址组件
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-20 20:41:57
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-07 11:37:04
 -->
<template>
  <section class="address-item-wrapper flex" @click="selectItem">
    <div class="left">
      <!-- eslint-disable -->
      <p class="part-1" v-html="$options.filters.format(addressItem.name, stress, keyword)"></p>
      <p class="part-2">{{ addressItem.district }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    addressItem: {
      type: Object,
      default: () => {}
    },
    // 是否需要强调文字
    stress: {
      type: Boolean,
      default: true
    },
    keyword: {
      type: String,
      default: ''
    }
  },
  filters: {
    format(text, stress, keyword) {
      if (stress) {
        const reg = new RegExp(keyword, 'ig')
        return text.replace(reg, item => {
          return `<span style="color:#666">${item}</span>`
        })
      } else {
        return text
      }
    }
  },
  methods: {
    selectItem() {
      this.$emit('selectItem', this.addressItem)
    }
  }
}
</script>
<style lang="scss" scoped>
.address-item-wrapper {
  padding: 10px 15px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  .left {
    flex: 1;
    .part-1 {
      font-size: 16px;
      font-weight: 700;
      color: #333;
    }
    .part-2 {
      font-size: 12px;
      color: #333;
      margin-top: 5px;
    }
  }
  .right {
    width: 50px;
    color: #2a2a2a;
    font-size: 12px;
  }
}
</style>
