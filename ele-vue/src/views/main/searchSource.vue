<template>
  <section class="search-source">
    <div class="top flex">
      <ul class="categories flex">
        <li v-for="(item, index) in labels" :key="index" class="item" :class="[index == selectindex ? 'active' : '']" @click="selectindex=index">{{ item }}</li>
      </ul>
      <div class="btn" @click="menuFlag=true"></div>
    </div>
    <div class="operator"></div>
    <StoreListHead ref="storeList" :needFixTop="false" offsetTop="40" />
    <div class="shop-list">
      <ShopList v-for="(item, index) in 10" :key="index" />
    </div>
    <section v-if="menuFlag" class="filter-category">
      <div class="filter-top flex justify_between">
        <span class="text">请选择分类</span>
        <span class="iconfont" @click="menuFlag=false">&#xe734;</span>
      </div>
      <div class="filter-scroller flex">
        <ul class="main-menu">
          <li v-for="(item, index) in 10" :key="index" class="item flex justify_between" :class="[index == 2 ? 'active' : '']">
            <span class="name">美食美食</span>
            <span class="num">1389</span>
          </li>
        </ul>
        <ul class="submenu">
          <li v-for="(item, index) in 5" :key="index" class="item flex justify_between" :class="[index == 2 ? 'active' : '']">
            <div class="name flex align_center">
              <img src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed">
              <span>全部</span>
            </div>
            <div class="num">1389</div>
          </li>
        </ul>
      </div>
    </section>
    <div v-if="menuFlag" class="mask"></div>
  </section>
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
      ],
      menuFlag: false
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
  .filter-category {
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
    background-color: #fff;
    .filter-top {
      height: 40px;
      align-items: center;
      padding: 0 15px;
      background-color: #F9F9F9;
      .text {
        font-size: 14px;
        font-weight: bold;
        color: #333;
      }
    }
    .filter-scroller {
      width: 100%;
      height: 400px;
      .main-menu {
        width: 130px;
        background-color: #F9F9F9;
        overflow-y: scroll;
        .item {
          height: 48px;
          align-items: center;
          .name {
            padding-left: 20px;
            color: #666666;
            font-size: 14px;
          }
          .num {
            padding-right: 10px;
            color: #999;
            font-size: 10px;
          }
        }
        .active {
          background-color: #fff;
        }
      }
      .submenu {
        flex: 1;
        background-color: #fff;
        overflow-y: scroll;
        padding: 22px 15px;
        .item {
          height: 48px;
          align-items: center;
          .name {
            img {
              width: 37px;
              height: 37px;
              margin-right: 13px;
              max-width: 100%;
            }
            .span {
              
              color: #666666;
              font-size: 14px;
            }
          }
          .num {
            padding: 1px 2px;
            background-color: #fff;
            border: 1px solid #eee;
            border-radius: 5px;
          }
        }
      }
    }
  }
  .mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 998;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(.133333rem);
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
