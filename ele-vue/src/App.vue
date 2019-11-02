<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './style/normalize.scss';
@import './style/reset.scss';
@import './style/common.scss';
@import '~@/assets/iconfont/iconfont.css';
#app {
  font-size: $font-size-base;
  color: $color-common;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'SF UI Text',
    'Helvetica Neue', STHeiti, 'Microsoft Yahei', Tahoma, Simsun, sans-serif;
}
</style>
