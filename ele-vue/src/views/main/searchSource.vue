<template>
  <section class="search-source">
    <!-- 顶部 -->
    <div class="top flex">
      <ul class="categories flex">
        <li
          v-for="(item, index) in categories"
          :key="index"
          class="item"
          :class="[item.id == selectindex.id ? 'active' : '']"
          @click="selectCategory(item)"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="btn iconfont" @click="menuFlag = true">&#xe615;</div>
    </div>
    <div class="operator"></div>
    <StoreListHead ref="storeList" :need-fix-top="false" offset-top="40" @selectOrderType="selectOrderType" />
    <div class="shop-list">
      <ShopList v-for="(item, index) in merchants" :key="index" :merchant="item" />
      <LoadingMore :finally-flag="allLoaded" />
    </div>
    <section v-if="menuFlag" class="filter-category">
      <div class="filter-top flex justify_between">
        <span class="text">请选择分类</span>
        <span class="iconfont" @click="menuFlag = false">&#xe867;</span>
      </div>
      <div class="filter-scroller">
        <cube-scroll-nav
          v-if="allCategory.length"
          :side="true"
          :data="allCategory"
          :options="scrollOptions"
        >
          <cube-scroll-nav-panel
            v-for="category in allCategory"
            :key="category.id"
            :label="category.name"
            :title="category.name"
          >
            <ul class="submenu">
              <li
                v-for="child in category.child"
                :key="child.id"
                class="item flex justify_between"
                @touchstart="selectFilterItem(category, child)"
              >
                <div class="name flex align_center">
                  <img
                    src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
                  />
                  <span>{{ child.name }}</span>
                </div>
                <div class="num">1389</div>
              </li>
            </ul>
          </cube-scroll-nav-panel>
        </cube-scroll-nav>
      </div>
    </section>
    <div v-if="menuFlag" class="mask"></div>
  </section>
</template>

<script>
// 业务组件
import StoreListHead from 'components/storeListHead'
import ShopList from 'components/shopList'
// 公共组件
import LoadingMore from '@/components/loadingMore'
// mixins
import LoadingMoreMixin from '@/common/mixins/loadingMore'
// api请求
import { main as api } from '@/api/index'
// VUEX
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'SearchSource',
  mixins: [LoadingMoreMixin],
  components: {
    StoreListHead,
    ShopList,
    LoadingMore
  },
  data() {
    return {
      selectindex: { id: this.$route.query.categoryId, pid: -1 },
      categories: [],
      allCategory: [],
      merchants: [],
      menuFlag: false,
      orderType: 0,
      scrollOptions: {
        click: false,
        directionLockThreshold: 0
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if ((to.name == 'shopIndex')) {
      this.ADDCACHE('SearchSource')
    } else {
      this.DELCACHE('SearchSource')
    }
    next()
  },
  created() {
    this._getSecLevelCategory()
    this._getMerByCategory()
    this._getShopCategory()
  },
  mounted() {
    this.setFixTop()
  },
  methods: {
    ...mapMutations('common', ['ADDCACHE', 'DELCACHE']),
    ...mapGetters('main', ['getMerchantCategory']),
    changeHandler(cur) {
      this.current = cur
    },
    selectOrderType(type) {
      this.orderType = type
      this.page = 1
      this.allLoaded = false
      this.merchants = []
      this._getMerByCategory()
    },
    selectFilterItem(category, item) {
      const tempCate = []
      const first = { id: category.id, name: category.name, pid: -1 }
      tempCate.push(first)
      tempCate.push(...category.child)
      this.categories = tempCate
      this.menuFlag = false
      this.selectCategory(item)
    },
    selectCategory(item) {
      this.selectindex = item
      this.page = 1
      this.allLoaded = false
      this.merchants = []
      this._getMerByCategory()
    },
    // 获取商铺二级分类
    _getSecLevelCategory() {
      api.getSecLevelCategory({ id: this.$route.query.categoryId }).then((res) => {
        this.categories = res.data
      })
    },
    // 获取商铺
    _getMerByCategory() {
      const params = {
        page: this.page,
        pageSize: this.pageSize,
        type: this.selectindex.pid == -1 ? 0 : 1,
        orderType: this.orderType,
        id: this.selectindex.id
      }
      api.getMerByCategory(params).then((res) => {
        this.totalPage = Math.ceil(res.data.count / this.pageSize)
        if (this.page >= this.totalPage) {
          this.allLoaded = true
        }
        this.merchants.push(...res.data.rows)
        this.requireFinallyFlag = true
      })
    },
    // 获取所有商铺分类
    _getShopCategory() {
      api.getShopCategory().then((res) => {
        this.allCategory = res.data
      })
    },
    // 加载更多
    loadingMore() {
      this._getMerByCategory()
    },
    setFixTop() {
      this.$refs.storeList.setFixTop(true)
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  .categories {
    flex: 1;
    display: block;
    height: 1.066667rem;
    padding-left: 0.4rem;
    padding-bottom: 0.133333rem;
    overflow-x: scroll;
    white-space: nowrap;
    .item {
      display: inline-block;
      margin-right: 0.746667rem;
      padding: 0.346667rem 0 0.16rem;
      font-size: 0.373333rem;
      line-height: 1;
      color: #fff;
      opacity: 0.7;
    }
    .active {
      color: #fff;
      opacity: 1;
      border-bottom: 0.053333rem solid #fff;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .btn {
    width: 1.2rem;
    height: 1.066667rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    box-shadow: 0px -6px 6px 2px rgba(0, 0, 0, 0.1);
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
    background-color: #f9f9f9;
    .text {
      font-size: 14px;
      font-weight: bold;
      color: #333;
    }
  }
  .filter-scroller {
    width: 100%;
    height: 400px;
    margin-top: -10px;
    .main-menu {
      width: 130px;
      background-color: #f9f9f9;
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
  backdrop-filter: blur(0.133333rem);
}
.search-source .filter-category /deep/ .cube-scroll-nav-panel-title {
  padding-left: 14px;
  height: 26px;
  line-height: 26px;
  border-left: 2px solid #d9dde1;
  font-size: 12px;
  color: #666;
  background: #f3f5f7;
}
</style>
