<template>
  <div class="scroll-food-category">
    <cube-slide ref="slide" :data="categories" :auto-play="false" @change="changePage">
      <cube-slide-item
        v-for="(item, index) in categories"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <section class="food-category flex wrap">
          <div v-for="(childItem, childIndex) in item" :key="childIndex" class="food-category-item">
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
      console.log(item, index)
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
