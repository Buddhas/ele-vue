<template>
  <div class="item-wrapper flex justify_between" @click="jump">
    <div class="left">
      <span v-html="iconf" />
      <span style="margin-left:10px">{{ text }}</span>
    </div>
    <div class="right">
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
    iconf: {
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
  }
</style>
