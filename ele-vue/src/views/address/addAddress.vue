<template>
  <div class="address-wrapper">
    <Header :title="title" :default-jump="false" @customJump="toAddressIndex" />
    <section class="user-info">
      <!-- 联系人 -->
      <section class="flex section-1 section">
        <div class="left">
          联系人
        </div>
        <div class="right">
          <div class="input-wrapper">
            <input v-model="address.user_name" type="text" placeholder="姓名" />
          </div>
          <div class="label-wrapper flex">
            <div
              class="label-item"
              :class="{ active: address.sex == 1 }"
              @click="address.sex = 1"
            >
              先生
            </div>
            <div
              class="label-item"
              :class="{ active: address.sex == 2 }"
              @click="address.sex = 2"
            >
              女士
            </div>
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
            <input
              v-model="address.mobile"
              type="text"
              placeholder="手机号码"
            />
          </div>
        </div>
      </section>
      <!-- 地址 -->
      <section class="flex section">
        <div class="left">
          地址
        </div>
        <div class="right" @click="toSearchAddress">
          <div class="input-wrapper flex justify_between">
            <input
              v-model="address.address"
              type="text"
              placeholder="小区/写字楼/学校等"
            />
            <span class="iconfont">&#xe60b;</span>
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
            <input
              v-model="address.detail"
              type="text"
              placeholder="10号楼5层501室222"
            />
          </div>
        </div>
      </section>
      <section class="section-4 flex">
        <div class="left">
          标签
        </div>
        <div class="right">
          <div class="label-wrapper flex">
            <div
              class="label-item"
              :class="{ active: address.label == 1 }"
              @click="address.label = 1"
            >
              家
            </div>
            <div
              class="label-item"
              :class="{ active: address.label == 2 }"
              @click="address.label = 2"
            >
              学校
            </div>
            <div
              class="label-item"
              :class="{ active: address.label == 3 }"
              @click="address.label = 3"
            >
              公司
            </div>
          </div>
        </div>
      </section>
    </section>
    <div class="submit" @click="submit">
      确定
    </div>
  </div>
</template>

<script>
// 业务组件
import Header from '@/components/header'
// api请求
import { address as api } from '@/api/index'

export default {
  components: {
    Header
  },
  data() {
    return {
      title: '新增地址',
      sex: -1,
      addressLabel: -1,
      txt: '',
      isEdit: this.$route.query.isEdit || 0,
      toast: this.$createToast({
        time: 2000,
        type: 'txt',
        txt: this.txt
      }),
      address: {
        user_name: '',
        sex: 1,
        mobile: '',
        address: '',
        detail: '',
        label: 1
      }
    }
  },
  created() {
    if (this.isEdit) {
      this._getAddressById()
    }
  },
  methods: {
    toAddressIndex() {
      this.$router.push({ path: './index.html' })
    },
    toSearchAddress() {
      this.$router.push({ path: './searchAddress.html' })
    },
    selectSex(val) {
      this.address.sex = val
    },
    settingToast(txt) {
      this.txt = txt
      this.toast.show()
    },
    checkParams() {
      const reg = /0?(13|14|15|17|18|19)[0-9]{9}/
      if (this.address.user_name.trim().length === 0) {
        this.settingToast('请填写用户姓名')
        return false
      } else if (!reg.test(this.address.mobile)) {
        this.settingToast('请填写联系方式')
        return false
      } else if (this.address.address.trim().length === 0) {
        this.settingToast('请填写用户地址')
        return false
      } else if (this.address.detail.trim().length === 0) {
        this.settingToast('请填写详细地址')
        return false
      }
      return true
    },
    // 获取地址
    _getAddressById() {
      api.getAddressById({ id: this.$route.query.addressId }).then((res) => {
        this.address = res.data
      })
    },
    // 新增地址
    _createdAddress() {
      if (this.checkParams()) {
        api.createdAddress(this.address).then((res) => {
          if (res.status == 200) {
            this.settingToast('添加成功')
            this.$router.push({ path: './index.html' })
          } else {
            this.settingToast('添加失败')
          }
        })
      }
    },
    // 更新地址
    _updatedAddress() {
      if (this.checkParams(this.address)) {
        return api.updatedAddress(this.address).then((res) => {
          if (res.status == 200) {
            this.settingToast('更新成功')
            this.$router.push({ path: './index.html' })
          } else {
            this.settingToast('更新失败')
          }
        })
      }
    },
    submit() {
      if (this.isEdit) {
        this._updatedAddress()
      } else {
        this._createdAddress()
      }
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
          padding: 15px 20px 15px 0px;
          border-bottom: 1px solid #f9f9f9;
          input {
            line-height: 16px;
            font-size: 16px;
            color: #666;
            padding-right: 0.4rem;
            &::-webkit-input-placeh {
              color: #cccccc;
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
          border-color: rgba(35, 149, 255, 0.18);
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
            border-color: rgba(35, 149, 255, 0.18);
          }
        }
      }
    }
  }
  .submit {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    background-color: #00d762;
    color: white;
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
