<template>
  <header class="header-wrapper">
    <div class="header flex align_center justify_center" :style="{backgroundColor:bgColor}">
      <span class="icon">1</span>
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
        font-size: 18px;
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
