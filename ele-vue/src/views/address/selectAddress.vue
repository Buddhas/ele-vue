<template>
  <div class="select-wrapper">
    <Header :title="title" />
    <section class="top flex">
      <div class="left flex justify_between align_center">
        <span class="elli name" @click="toSelectCity">{{ currentCity.name }}</span>
        <span class="iconfont" style="font-size:10px;">&#xe626;</span>
      </div>
      <div class="right">
        <div class="input-wrapper flex">
          <span class="iconfont icon">&#xe60a;</span>
          <input v-model="keyword" type="text" placeholder="请输入地址" />
        </div>
      </div>
    </section>
    <section v-if="showMyAddressFlag" class="no-select-items">
      <section class="current">
        <div class="title">当前地址</div>
        <div class="current-address flex">
          <span class="text">{{ currentPosition }}</span>
          <div class="icon">
            <span class="iconfont ">&#xe624;</span>
            <span style="margin-left:5px" @click="geoLocation">重新加载</span>
          </div>
        </div>
      </section>
      <section v-if="allAddressList.length > 0" class="my-address">
        <div class="title">收货地址</div>
        <div v-for="(item, index) in allAddressList" :key="index" class="item" @click="selectItem({name:item.address+item.detail})">
          <div class="part-1 elli">
            <span class="name">{{ item.user_name }}</span>
            <span class="sex">{{ item.sex == 1 ? '先生' : '女士' }}</span>
            <span class="phone">{{ item.mobile }}</span>
          </div>
          <div class="part-2 elli">{{ item.address }} {{item.detail}}</div>
        </div>
      </section>
    </section>
    <section v-else class="select-items">
      <AddItem
        v-for="(item, index) in searchRes"
        :key="index"
        :keyword="keyword"
        :address-item="item"
        @selectItem="selectItem"
      />
      <div v-if="searchRes.length == 0">暂无数据</div>
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
// api请求
import { address as api, login as loginApi } from '@/api/index'

export default {
  mixins: [AMapService],
  components: {
    Header,
    AddItem
  },
  data() {
    return {
      title: '选择收货地址',
      keyword: '',
      allAddressList: []
    }
  },
  computed: {
    showMyAddressFlag() {
      return !(this.keyword.length > 0)
    }
  },
  created() {
    this._getAddressList()
  },
  methods: {
    ...mapMutations('address', ['SHIPADDRESS']),
    selectItem(item) {
      this.SHIPADDRESS(item.name)
      this.$router.go(-1)
    },
    _getAddressList() {
      loginApi.isLogin().then((res) => {
        if (res.data) {
          api.getAddressList().then((res) => {
            this.allAddressList = res.data
          })
        }
      })
    },
    toSelectCity() {
      this.$router.push({ path: './cityList.html' })
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
.select-wrapper {
  .top {
    background-color: #ffffff;
    padding: 10px 15px;
    .left {
      width: 50px;
      line-height: 30px;
      .name {
        max-width: 50px;
      }
    }
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
  .no-select-items {
    .current {
      margin-top: 20px;
      .title {
        margin-left: 10px;
        font-size: 14px;
      }
      .current-address {
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding: 0px 10px;
        margin-top: 5px;
        background-color: #ffffff;
        .text {
          width: 80%;
          flex: 1;
          color: black;
          font-size: 14px;
          font-weight: 700;
        }
        .icon {
          color: #2395ff;
        }
      }
    }
    .my-address {
      margin-top: 20px;
      .title {
        margin-left: 10px;
        font-size: 14px;
      }
      .item {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        background-color: #ffffff;
        .part-1 {
          .name {
            font-size: 14px;
            font-weight: 700;
            color: #333;
            margin-right: 3px;
          }
          .sex {
            font-size: 12px;
            color: #666;
            margin-right: 3px;
          }
          .phone {
            font-size: 12px;
            color: #666;
          }
        }
        .part-2 {
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
