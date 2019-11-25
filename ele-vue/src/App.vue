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
@import './common/style/reset.scss';
@import './common/style/common.scss';
@import './common/style/icon.css';
#app {
  width: 100%;
  height: 100%;
}
</style>
