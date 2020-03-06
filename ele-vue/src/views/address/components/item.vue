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
      <span style="color: #333;font-weight: 700;margin-right:5px">{{ address.user_name }}</span><span style="margin-right:5px">{{ address.sex == 1 ? '先生' : '女士' }}</span><span>{{ address.mobile }}</span>
    </div>
    <div class="flex bottom">
      <div class="message flex align_center">
        <span :class="[address.label == 1 ? 'home' : address.label == 2 ? 'school' : 'company']">{{ address.label == 1 ? '家' : address.label == 2 ? '学校' : '公司' }}</span>
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
      this.$router.push({ path: './addAddress.html', query: { addressId: this.address.id, isEdit: 1 }})
    },
    _deleteAddress() {
      this.$createDialog({
        type: 'confirm',
        icon: 'cubeic-alert',
        title: '温馨提示',
        content: '确定删除地址？',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          const params = {
            id: this.address.id
          }
          api.deleteAddress(params).then((res) => {
            this.$emit('deleteAddress')
          })
        }
      }).show()
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
