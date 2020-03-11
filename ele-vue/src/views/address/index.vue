<!--
 * @Descripttion: 我的地址列表
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-20 20:41:57
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-11 22:18:24
 -->
<template>
  <div class="address-index-wrapper">
    <Header :default-jump="false" @customJump="toAddressIndex" />
    <div class="item-wrapper">
      <Item v-for="(item, index) in allAddressList" :key="index" :address="item" @deleteAddress="_getAddressList" />
    </div>
    <div class="bottom" @click="toAddAddress">
      <span class="iconfont" style="margin-right:5px">&#xe61c;</span>新增地址
    </div>
  </div>
</template>

<script>
// 业务组件
import Item from './components/item'
import Header from '@/components/header'
// api请求
import { address as api } from '@/api/index'
// VUEX
import { mapMutations } from 'vuex'
export default {
  name: 'AddressIndex',
  components: {
    Item,
    Header
  },
  data() {
    return {
      allAddressList: []
    }
  },
  created() {
    this._getAddressList()
    this.ADDCACHE('AddressIndex')
  },
  activated() {
    this._getAddressList()
  },
  methods: {
    ...mapMutations('common', ['ADDCACHE']),
    toAddressIndex() {
      this.$router.push({ path: '../my/index.html' })
    },
    _getAddressList() {
      api.getAddressList().then((res) => {
        this.allAddressList = res.data
      })
    },
    toAddAddress() {
      this.$router.push({ path: './addAddress.html' })
    }
  }
}
</script>
<style lang="scss" scoped>
  .address-index-wrapper {
    width: 100%;
    .item-wrapper {
      padding-bottom: 60px;
    }
    .bottom {
      width: 100%;
      z-index: 10;
      position: fixed;
      height: 50px;
      border-top: 1px solid #ddd;
      line-height: 50px;
      background: #fff;
      bottom: 0px;
      text-align: center;
      font-size: 18px;
      color: #3190e8;
    }
  }
</style>
