<!--
 * @Descripttion: 城市列表组件
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-02-16 16:38:34
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-02-16 16:38:34
 -->

<template>
  <div class="city-list-wrapper">
    <Header title="城市选择" />
    <cube-index-list
      :data="cityList"
      :title="title"
      @select="selectItem"
      @title-click="clickTitle"
    />
  </div>
</template>

<script>
// 业务组件
import Header from '@/components/header'
// api请求
import { address as api } from '@/api/index'
// VUEX
import { mapMutations, mapGetters } from 'vuex'
export default {
  components: {
    Header
  },
  data() {
    return {
      cityList: []
    }
  },
  computed: {
    title() {
      return `当前城市：${this.getCurrentCity().name}`
    }
  },
  created() {
    this._getAllCity()
  },
  methods: {
    ...mapGetters('address', ['getCurrentCity']),
    ...mapMutations('address', ['MERCHANTCATEGORY']),
    _getAllCity() {
      // 把结果缓存一下
      if (localStorage.getItem('CITYLIST')) {
        this.cityList = JSON.parse(localStorage.getItem('CITYLIST')) 
      } else {
        api.getAllCity().then(res => {
          this.cityList = res.data
          localStorage.setItem('CITYLIST', JSON.stringify(res.data))
        })
      }
    },
    selectItem(item) {
      this.MERCHANTCATEGORY(item)
      this.$router.go(-1)
    },
    clickTitle() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .city-list-wrapper {
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    overflow: hidden;
    background-color: #fff;
  }
</style>
