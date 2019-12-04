<template>
  <transition name="fade">
    <div v-show="visible" class="header-detail" @touchmove.stop.prevent>
      <div class="detail-wrapper clear-fix">
        <div class="detail-main">
          <h1 class="name">粥品香坊（回龙观）</h1>

          <div class="star-wrapper">
            <Star :size="48" :score="seller.score" />
          </div>

          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>

          <ul class="supports">
            <li class="support-item">
              <SupportIco type="decrease" />
              <span class="text"></span>
            </li>
          </ul>

          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>

          <div class="bulletin">
            <p class="content"></p>
          </div>
        </div>
      </div>

      <div class="detail-close" @click="hide">
        <i class="icon-close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
// 业务组件
import Star from './star'
import SupportIco from './supportIco'

import popupMixin from '@/common/mixins/popup'
export default {
  mixins: [popupMixin],
  components: {
    Star,
    SupportIco
  }
}
</script>

<style lang="scss" scoped>
    .header-detail {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        backdrop-filter: blur(10px);
        opacity: 1;
        color: #fff;
        background: rgba(7,17,27,.8);
        &.fade-enter-active, &.fade-leave-active {
            transition: all 0.5s;
        }
        &.fade-enter, &.fade-leave-active {
            opacity: 0;
            background: rgba(7, 17, 27, 1)
        }
        .detail-wrapper {
            display: inline-block;
            width: 100%;
            min-height: 100%;
            .detail-main {
                margin-top: 64px;
                padding-bottom: 64px;
                .name {
                    line-height: 16px;
                    text-align: center;
                    font-size: 16px;
                    font-weight: 700;
                }
                .star-wrapper {
                    margin-top: 18px;
                    padding: 2px 0;
                    text-align: center;
                }
                .title {
                    display: flex;
                    width: 80%;
                    margin: 28px auto 24px auto;
                    .line {
                        flex: 1;
                        position: relative;
                        top: -6px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                    }
                    .text {
                        padding: 0 12px;
                        font-weight: 700;
                        font-size: 14px;
                    }
                }
                .supports {
                    width: 80%;
                    margin: 0 auto;
                    .support-item {
                        display: flex;
                        align-items: center;
                        padding: 0 12px;
                        margin-bottom: 12px;
                        &:last-child {
                            margin-bottom: 0
                        }
                        .support-ico {
                            margin-right: 6px
                        }
                        .text {
                            line-height: 16px;
                            font-size: 12px;
                        }
                    }

                }
            }
        }
    }
</style>
