<template>
  <div class="select-wrapper">
    <Header :title="title" />
    <section class="top flex">
      <div class="left flex justify_between align_center">
        <span class="elli name">深圳</span>
        <span class="iconfont" style="font-size:10px;">&#xe626;</span>
      </div>
      <div class="right">
        <div class="input-wrapper flex">
          <span class="iconfont icon">&#xe60a;</span>
          <input type="text" placeholder="请输入地址" />
        </div>
      </div>
    </section>
    <section class="current">
      <div class="title">当前地址</div>
      <div class="current-address flex">
        <span class="text">东华理工大学</span>
        <div class="icon">
          <span class="iconfont ">&#xe624;</span> 
          <span style="margin-left:5px">重新加载</span>
        </div>
      </div>
    </section>
    <section class="my-address">
      <div class="title">收货地址</div>
      <div class="item">
        <div class="part-1 elli">
          <span class="name">陈斌</span>
          <span class="sex">先生</span>
          <span class="phone">17688702092</span>
        </div>
        <div class="part-2 elli">港龙舞蹈罗湖火车站校区</div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  components: {
    Header
  },
  data() {
    return {
      title: '选择收货地址'
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
      width: 40px;
      line-height: 30px;
      .name {
        max-width: 30px;
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
</style>
