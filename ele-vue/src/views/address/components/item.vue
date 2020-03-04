<!--
 * @Descripttion: 
 * @version: 
 * @Author: 笑佛弥勒
 * @Date: 2020-01-20 20:41:57
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-03-04 23:54:14
 -->
<template>
  <section class="address-item">
    <div class="user-info">
      <span style="color: #333;font-weight: 700;margin-right:5px">{{ address.user_name }}</span><span style="margin-right:5px">{{ address.sex == 0 ? '先生' : '女士' }}</span><span>{{ address.mobile }}</span>
    </div>
    <div class="flex bottom">
      <div class="message flex align_center">
        <span class="home">{{ address.label == 0 ? '家' : address.label == 1 ? '学校' : '公司' }}</span>
        <span class="detail">{{ address.address }} {{address.detail}}</span>
      </div>
      <div class="icon-wrapper">
        <span>1</span>
        <span>2</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    address: {
      type: Object,
      default: () => {}
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
          color: #ff5722;
          border: 1px solid #ff5722;
          font-size: 10px;
          display: inline-block;
          padding: 1px 2px;
        }
        .company  {
          color: #3190e8;
          border: 1px solid #3190e8;
          font-size: 10px;
          display: inline-block;
          padding: 1px 2px;
        }
        .school {
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
