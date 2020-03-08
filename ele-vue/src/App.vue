<!--
 * @Descripttion: App 组件
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-08 23:50:17
 -->
<template>
  <div id="app">
    <keep-alive :include="getcache">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters('common', ['getcache'])
  }
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
