<template>
  <div class="login-wrapper">
    <div class="logo">
      <img src="./image/logo.ba876fd.png" alt="图片">
    </div>
    <div class="message-wrapper">
      <section class="tel-input input-wrapper">
        <input type="tel" maxlength="11" placeholder="手机号">
        <span class="code-btn">获取验证码</span>
      </section>
      <section class="code-input input-wrapper">
        <input type="number" maxlength="4" placeholder="验证码">
      </section>
      <section class="explain">
        新用户登录即自动注册，并表示已同意
        <a href="https://h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&key=ruleQue18">《用户服务协议》</a>
        和
        <a href="http://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201903051859_43484.html">《饿了么隐私权政策》</a>
      </section>
    </div>
  </div>
</template>

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
    }
  }
</style>
