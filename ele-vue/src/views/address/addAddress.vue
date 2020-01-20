<template>
  <div class="address-wrapper">
    <Header :title="title" />
    <section class="user-info">
      <!-- 联系人 -->
      <section class="flex section-1 section">
        <div class="left">
          联系人
        </div>
        <div class="right">
          <div class="input-wrapper">
            <input type="text" placeholder="姓名">
          </div>
          <div class="label-wrapper flex">
            <div class="label-item" :class="{'active' : sex == 0}" @click="sex=0">先生</div>
            <div class="label-item" :class="{'active' : sex == 1}" @click="sex=1">女士</div>
          </div>
        </div>
      </section>
      <!-- 联系电话 -->
      <section class="flex section">
        <div class="left">
          电话
        </div>
        <div class="right">
          <div class="input-wrapper">
            <input type="text" placeholder="手机号码">
          </div>
        </div>
      </section>
      <!-- 地址 -->
      <section class="flex section">
        <div class="left">
          地址
        </div>
        <div class="right">
          <div class="input-wrapper">
            <input type="text" placeholder="小区/写字楼/学校等">
          </div>
        </div>
      </section>
      <!-- 门牌号 -->
      <section class="flex section">
        <div class="left">
          门牌号
        </div>
        <div class="right">
          <div class="input-wrapper">
            <input type="text" placeholder="10号楼5层501室222">
          </div>
        </div>
      </section>
      <section class="section-4 flex">
        <div class="left">
          标签
        </div>
        <div class="right">
          <div class="label-wrapper flex">
            <div class="label-item" :class="{'active' : addressLabel == 0}" @click="addressLabel=0">家</div>
            <div class="label-item" :class="{'active' : addressLabel == 1}" @click="addressLabel=1">学校</div>
            <div class="label-item" :class="{'active' : addressLabel == 2}" @click="addressLabel=2">公司</div>
          </div>
        </div>
      </section>
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
      title: '新增地址',
      sex: -1,
      addressLabel: -1
    }
  },
  methods: {
    selectSex(val) {
      this.sex = val
    }
  }
}
</script>

<style lang="scss" scoped>
  .address-wrapper {
    .user-info {
      background-color: #fff;
      padding-left: 15px;
      .section {
        border-bottom: 1px solid #f9f9f9;
        .left {
          width: 65px;
          padding: 15px 0px;
          text-align: left;
          font-size: 16px;
          color: black;
          font-weight: bold;

        }
        .right {
          flex: 1;
          .input-wrapper {
            padding: 14px 0px;
            border-bottom: 1px solid #f9f9f9;
            input {
              line-height: 16px;
              font-size: 16px;
              color: #666;
              padding-right: .4rem;
              &::-webkit-input-placeh {
                color: #CCCCCC;
              }
            }
          }
        }
      }
      .section-1 {
        .label-wrapper {
          padding: 10px 0;
          .label-item {
            width: 60px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            margin-right: 8px;
            color: #666;
            border: 1px solid #ddd;
            border-radius: 4px;
          }
          .active {
            color: #2395ff;
            background: #eef7ff;
            border-color: rgba(35,149,255,.18);
          }
        }
      }
      .section-4 {
        border-bottom: 1px solid #f9f9f9;
        .left {
          width: 65px;
          padding: 15px 0px;
          text-align: left;
          font-size: 16px;
          color: black;
          font-weight: bold;
        }
        .right {
          flex: 1;
          .label-wrapper {
            padding: 10px 0;
            .label-item {
              width: 60px;
              height: 30px;
              line-height: 30px;
              text-align: center;
              margin-right: 8px;
              color: #666;
              border: 1px solid #ddd;
              border-radius: 4px;
            }
            .active {
              color: #2395ff;
              background: #eef7ff;
              border-color: rgba(35,149,255,.18);
            }
          }
        }
      }
    }
  }
</style>
