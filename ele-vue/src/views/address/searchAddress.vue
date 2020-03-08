<!--
 * @Descripttion: 
 * @version: 
 * @Author: 笑佛弥勒
 * @Date: 2020-03-07 10:57:45
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-08 17:58:55
 -->
<template>
  <div class="search-wrapper">
    <Header :title="title" />
    <section class="top">
      <div class="right">
        <div class="input-wrapper flex">
          <span class="iconfont icon">&#xe60a;</span>
          <input v-model="keyword" type="text" placeholder="请输入地址" />
        </div>
      </div>
    </section>
    <section class="select-items">
      <AddItem
        v-for="(item, index) in searchRes"
        :key="index"
        :keyword="keyword"
        :address-item="item"
        @selectItem="selectSearch"
      />
      <div v-if="searchRes.length == 0" class="no-data">暂无数据</div>
    </section>
  </div>
</template>

<script>
// 业务组件
import Header from '@/components/header'
import AddItem from './components/addItem'
// mixins
import { AMapService } from '@/common/mixins/AMap'
// VUEX
import { mapMutations } from 'vuex'
export default {
  name: 'SearchAddress',
  mixins: [AMapService],
  components: {
    Header,
    AddItem
  },
  data() {
    return {
      title: '搜索地址',
      keyword: ''
    }
  },
  methods: {
    ...mapMutations('address', ['SEARCHADDRESS']),
    selectSearch(item) {
      this.SEARCHADDRESS(item.name)
      this.$router.go(-1)
    }
  },
  watch: {
    keyword(val) {
      this.searchPosition(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-wrapper {
  .top {
    background-color: #ffffff;
    padding: 10px 15px;
    .right {
      flex: 1;
      margin-left: 10px;
      .input-wrapper {
        position: relative;
        width: 100%;
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
  .select-items {
      .no-data {
        font-size: 14px;
        text-align: center;
      }
    }
}
</style>
