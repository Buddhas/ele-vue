<!--
 * @Descripttion: 首页顶部轮播组件
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditors  : 笑佛弥勒
 * @LastEditTime : 2020-02-09 17:05:59
 -->
<template>
  <div class="scroll-food-category">
    <cube-slide ref="slide" :data="categories" :auto-play="false" @change="changePage">
      <cube-slide-item
        v-for="(item, index) in categories"
        :key="index"
      >
        <section class="food-category flex wrap">
          <div v-for="(childItem, childIndex) in item" :key="childIndex" class="food-category-item" @click="clickHandler(childItem)">
            <img src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed">
            <span class="title">{{ childItem.name }}</span>
          </div>
        </section>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      this.$router.push({ path: './searchSource.html', query: { categoryId: item.id }})
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-food-category {
  height: 160px;
  overflow: hidden;
  background-color: #fff;
}
.food-category {
  font-size: 12px;
  img {
    width: 45px;
    height: 45px;
    max-width: 100%;
  }
  .title {
    display: block;
    color: #999;
  }
}
.food-category-item {
  width: 20%;
  margin-top: 10px;
  text-align: center;
}
</style>
