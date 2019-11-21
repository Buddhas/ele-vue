<template>
  <div class="search-source">
    <div class="top flex">
      <ul class="categories flex">
        <li v-for="(item, index) in labels" :key="index" class="item" :class="[index == selectindex ? 'active' : '']" @click="selectindex=index">{{ item }}</li>
      </ul>
      <div class="btn"></div>
    </div>
    <div class="operator"></div>
    <StoreListHead :needFixTop="false" offsetTop="40" ref="storeList"/>
    <div class="shop-list">
      <ShopList v-for="(item, index) in 10" :key="index" />
    </div>
  </div>
</template>

<script>
import StoreListHead from 'components/storeListHead'
import ShopList from 'components/shopList'
export default {
  components: {
    StoreListHead,
    ShopList
  },
  data() {
    return {
      current: '快车',
      selectindex: 0,
      labels: [
        '快车',
        '小巴',
        '专车',
        '顺风车',
        '代驾',
        '公交',
        '自驾租车',
        '豪华车',
        '二手车',
        '出租车'
      ]
    }
  },
  mounted() {
    this.setFixTop()
  },
  methods: {
    changeHandler(cur) {
      this.current = cur
    },
    setFixTop() {
      this.$refs.storeList.setFixTop(true)
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-source {
    
  }
  .top {
    background-image: linear-gradient(90deg,#0af,#0085ff);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    .categories {
      flex: 1;
      display: block;
      height: 1.066667rem;
      padding-left: .4rem;
      padding-bottom: .133333rem;
      overflow-x: scroll;
      white-space: nowrap;
      .item {
        display: inline-block;
        margin-right: .746667rem;
        padding: .346667rem 0 .16rem;
        font-size: .373333rem;
        line-height: 1;
        color: #fff;
        opacity: .7;
      }
      .active {
          color: #fff;
          opacity: 1;
          border-bottom: .053333rem solid #fff;
        }
      &::-webkit-scrollbar {display:none}
    }
    .btn {
      width: 1.2rem;
      height: 1.066667rem;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px -6px 6px 2px rgba(0,0,0,0.1);
    }
  }
  .operator {
    width: 100%;
    height: 40px;
  }
</style>

<style lang="scss">
  .top {
    .cube-scroll-wrapper {
      background-image: linear-gradient(90deg,#0af,#0085ff);
      .cube-scroll-nav-bar-item {
        padding: 0 0.4rem;
        line-height: 40px;
        color: #fff;
        opacity: .7;
      }
      .cube-scroll-nav-bar-item_active {
        color: #fff;
        opacity: 1;
        span {
          padding-top: 2px;
          border-bottom: .053333rem solid #fff;
        }
      }
    }
  }
</style>
