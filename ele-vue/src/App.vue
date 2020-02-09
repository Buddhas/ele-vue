<!--
 * @Descripttion: App 组件
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditors  : 笑佛弥勒
 * @LastEditTime : 2020-02-09 18:40:37
 -->
<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
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
