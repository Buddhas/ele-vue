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
@import './style/reset.scss';
@import './style/common.scss';
@import './style/icon.css';
#app {
  width: 100%;
  height: 100%;
}
</style>
