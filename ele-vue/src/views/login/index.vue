<template>
  <div class="login-wrapper">
    <div class="logo">
      <img src="./image/logo.ba876fd.png" alt="图片">
    </div>
    <div class="message-wrapper">
      <section class="tel-input input-wrapper">
        <input v-model="email" placeholder="邮箱">
        <span v-if="!getCodeFlag" class="code-btn" :style="{color: correntEmialFlag ? '#2395ff' : '#ccc'}" @click="getCode">获取验证码</span>
        <span v-else class="code-btn" style="color:#ccc">已发送({{remainTime}}s)</span>
      </section>
      <section class="code-input input-wrapper">
        <input v-model="code" type="number" maxlength="4" placeholder="验证码">
      </section>
      <section class="explain">
        新用户登录即自动注册，并表示已同意
        <a href="https://h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&key=ruleQue18">《用户服务协议》</a>
        和
        <a href="http://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201903051859_43484.html">《饿了么隐私权政策》</a>
      </section>
      <section class="login-btn" @click="login">
        登录
      </section>
      <section class="about">关于我们</section>
    </div>
  </div>
</template>
<script>
// api请求
import { login as api } from '@/api/index'
export default {
  data() {
    return {
      email: '',
      code: '',
      getCodeFlag: false,
      remainTime: 300,
      txt: '请输入正确手机号',
      toast: this.$createToast({
        time: 2000,
        type: 'txt',
        txt: this.txt
      }),
      reg: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
    }
  },
  computed: {
    correntEmialFlag() {
      return this.reg.test(this.email)
    }
  },
  methods: {
    getCode() {
      if (this.correntEmialFlag) {
        const params = {
          email: this.email
        }
        api.sendEmail(params).then((res) => {
          if (res.status == 200) {
            this.getCodeFlag = true
            this.$createDialog({
              title: '验证码',
              content: `您的验证码是：${res.data}`
            }).show()
            setInterval(() => {
              if (this.remainTime == 1) {
                this.getCodeFlag = false
              } else {
                this.remainTime--
              }
            }, 1000)
          } else {
            this.$createDialog({
              title: '验证码',
              content: res.message
            }).show()
          }
        })
      }
    },
    checkoutParams() {
      if (!this.correntEmialFlag) {
        this.txt = '请输入正确邮箱'
        return false
      } else if (this.code.length == 0 || !Number(this.code)) {
        this.txt = '请输入正确验证码'
      }
      return true
    },
    login() {
      if (this.checkoutParams()) {
        const params = {
          email: this.email,
          code: this.code
        }
        api.login(params).then((res) => {
          if (res.status == 200) {
            if (this.$route.query.redirect) {
              this.$router.replace({ path: '/vue' + this.$route.query.redirect })
            } else {
              this.$router.replace({ path: '../main/index.html' })
            }
          } else {
            this.$createToast({
              time: 2000,
              type: 'txt',
              txt: '登陆失败'
            }).show()
          }
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .login-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #fff;
    .logo {
      margin-top: 40px;
      text-align: center;
      img {
        max-width: 100%;
        height: 45px;
      }
    }
    .message-wrapper {
      margin-top: 15px;
      width: 300px;
      margin: 0 auto;
      .input-wrapper {
        position: relative;
        margin-bottom: 16px;
        margin-top: .4rem;
        height: 48px;
        font-size: 14px;
        background: #fff;
        input {
          width: 100%;
          height: 100%;
          left: 0;
          padding-left: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          color: #333;
        }
        .code-btn {
          display: inline-block;
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
        }
      }
      .explain {
        margin-top: 12px;
        color: #999;
        font-size: 14px;
        line-height: 20px;
        a {
          color: #2395ff;
        }
      }
      .login-btn {
        width: 100%;
        height: 42px;
        font-size:16px;
        line-height: 42px;
        text-align: center;
        margin-top: 30px;
        border-radius: 4px;
        color: #fff;
        background-color: #4cd96f;
      }
      .about {
        font-size: 12px;
        margin-top: 20px;
        text-align: center;
        color: #999;
      }
    }
  }
</style>
