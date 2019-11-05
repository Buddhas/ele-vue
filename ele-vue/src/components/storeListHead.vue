<template>
  <section class="header">
    <div class="filter-header">
      <a class="filter-nav" @click="showSortFlag=true">综合排序</a>
      <a class="filter-nav">距离最近</a>
      <a class="filter-nav">品质联盟</a>
      <a class="filter-nav">筛选</a>
    </div>
    <section class="sort">
      <ul class="item-list">
        <li v-for="(item, index) in sortItems" :key="index" class="item">{{ item }}</li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showSortFlag: false,
      sortItems: [
        '综合排序',
        '好评优先',
        '好评优先',
        '好评优先',
        '好评优先',
        '好评优先',
        '好评优先',
        '好评优先'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
}
.filter-header {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 4;
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
  .filter-nav {
    flex: 1;
    text-align: center;
    color: #666;
    position: relative;
    font-size: 0.373333rem;
    z-index: 101;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.sort {
  width: 100%;
  background-color: #ffffff;
  position: absolute;
  top: 40px;
  .item {
    font-size: 14px;
    color: black;
    padding-left: 20px;
    line-height: 40px;
  }
}
</style>
