<!--
 * @Descripttion: 
 * @version: 
 * @Author: 笑佛弥勒
 * @Date: 2020-01-20 20:41:57
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-05 23:31:28
 -->
<template>
  <section class="address-item" @click="toEditAddress">
    <div class="user-info">
      <span style="color: #333;font-weight: 700;margin-right:5px">{{ address.user_name }}</span><span style="margin-right:5px">{{ address.sex == 0 ? '先生' : '女士' }}</span><span>{{ address.mobile }}</span>
    </div>
    <div class="flex bottom">
      <div class="message flex align_center">
        <span :class="[address.label == 0 ? 'home' : address.label == 1 ? 'school' : 'company']">{{ address.label == 0 ? '家' : address.label == 1 ? '学校' : '公司' }}</span>
        <span class="detail">{{ address.address }} {{address.detail}}</span>
      </div>
      <div class="icon-wrapper">
        <span class="iconfont" @click.stop="_deleteAddress">&#xe609;</span>
      </div>
    </div>
  </section>
</template>

<script>
// api请求
import { address as api } from '@/api/index'
export default {
  props: {
    address: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    toEditAddress() {
      this.$router.push({ path: './addAddress.html', query: { id: this.address.id }})
    },
    _deleteAddress() {
      const params = {
        id: this.address.id
      }
      api.deleteAddress(params).then((res) => {
        this.$emit('deleteAddress')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .address-item {
    padding: 15px 10px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    .user-info {
      font-size: 18px;
      color: #666;
    }
    .bottom {
      margin-top: 8px;
      .message {
        flex: 1;
        .detail {
          margin-left: 3px;
          font-size: 16px;
          color: #666;
        }
        .home {
          width: 20px;
          color: #ff5722;
          border: 1px solid #ff5722;
          font-size: 10px;
          display: inline-block;
          padding: 1px 2px;
        }
        .company  {
          width: 30px;
          color: #3190e8;
          border: 1px solid #3190e8;
          font-size: 10px;
          display: inline-block;
          padding: 1px 2px;
        }
        .school {
          width: 30px;
          color: #00d762;
          border: 1px solid #00d762;
          font-size: 10px;
          display: inline-block;
          padding: 1px 2px;
        }
      }
      .icon-wrapper {
        width: 40px;
      }
    }
  }
</style>
