<!--
 * @Descripttion: 搜索组件
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-03-07 10:57:45
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-08 15:13:47
 -->
<template>
  <div class="main-search-wrapper">
    <Header :title="title" />
    <section class="top">
      <div class="wrapper">
        <div class="right">
          <div class="input-wrapper flex">
            <span class="iconfont icon">&#xe60a;</span>
            <input v-model="keyword" type="text" placeholder="请输入商铺名称" />
          </div>
        </div>
      </div>
    </section>
    <section class="select-items">
      <ShopList
        v-for="(item, index) in merchants"
        :key="index"
        :merchant="item"
      />
      <LoadingMore :all-loaded="allLoaded" />
    </section>
    <FootGuide :guide-index="1" />
  </div>
</template>

<script>
// 业务组件
import Header from '@/components/header'
import ShopList from 'components/shopList'
import FootGuide from 'components/footGuide'
// mixins
import LoadingMoreMixin from '@/common/mixins/loadingMore'
// api请求
import { main as api } from '@/api/index'
// 公共组件
import LoadingMore from '@/components/loadingMore'
// VUEX
import { mapMutations } from 'vuex'
export default {
  name: 'SearchShop',
  mixins: [LoadingMoreMixin],
  components: {
    Header,
    ShopList,
    LoadingMore,
    FootGuide
  },
  data() {
    return {
      title: '搜索商铺',
      keyword: '',
      merchants: []
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.name == 'shopIndex') {
      this.ADDCACHE('SearchShop')
    } else {
      this.DELCACHE('SearchShop')
    }
    next()
  },
  created() {
    this.allLoaded = true
  },
  methods: {
    ...mapMutations('common', ['ADDCACHE', 'DELCACHE']),
    selectSearch(item) {
      this.SEARCHADDRESS(item.name)
      this.$router.go(-1)
    },
    // 获取商铺
    _getMerchantsByKeyword() {
      const params = {
        page: this.page,
        pageSize: this.pageSize,
        keyword: this.keyword
      }
      api.getMerByKeyword(params).then(res => {
        this.totalPage = Math.ceil(res.data.count / this.pageSize)
        if (this.page >= this.totalPage) {
          this.allLoaded = true
        }
        this.merchants.push(...res.data.rows)
        this.requireFinallyFlag = true
      })
    },
    // 加载更多
    loadingMore() {
      this._getMerchantsByKeyword()
    }
  },
  watch: {
    keyword(val) {
      this.allLoaded = false
      this.merchants = []
      this._getMerchantsByKeyword()
    }
  }
}
</script>

<style lang="scss" scoped>
.main-search-wrapper {
  padding-bottom: 50px;
  .top {
    background-color: #ffffff;
    width: 100%;
    height: 46px;
    .wrapper {
      position: fixed;
      background-color: #ffffff;
      padding: 10px 15px;
      width: 100%;
      height: 46px;
      .right {
        position: fixed;
        width: 100%;
        flex: 1;
        margin-left: 10px;
        .input-wrapper {
          position: relative;
          width: 86%;
          background-color: #f2f2f2;
          .icon {
            position: absolute;
            top: 50%;
            left: 5px;
            transform: translateY(-50%);
            font-size: 12px;
          }
          input {
            width: 100%;
            height: 30px;
            color: #999;
            border-radius: 0.026667rem;
            padding: 0.24rem 0.48rem 0.24rem 0.666667rem;
            background: #f2f2f2;
          }
        }
      }
    }
  }
  .select-items {
    .no-data {
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
