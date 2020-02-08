<template>
  <cube-scroll class="seller" :options="sellerScrollOptions">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{ seller.name }}</h1>
        <div class="desc border-bottom-1px">
          <star :size="48" :score="seller.score" />
          <span class="text">(4)</span>
          <span class="text">月售{{ seller.mon_sale }}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送</h2>
            <div class="content">
              <span class="stress">{{ seller.send_price }}</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{ seller.top_up }}</span>元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{ seller.need_time }}</span>分钟
            </div>
          </li>
        </ul>
        <div class="favorite" @click="toggleFavorite">
          <span class="icon-favorite iconfont" :class="{ active: favorite }">&#xe60d;</span>
          <span class="text">{{ favoriteText }}</span>
        </div>
      </div>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-bottom-1px">
          <p class="content">{{ seller.synopsis }}</p>
        </div>
        <ul v-if="seller.supports" class="supports">
          <li
            v-for="(item, index) in seller.supports"
            :key="index"
            class="support-item border-bottom-1px"
          >
            <support-ico
              :size="4"
              :type="seller.supports[index].type"
            />
            <span class="text">{{ seller.supports[index].description }}</span>
          </li>
        </ul>
      </div>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <cube-scroll class="pic-wrapper" :options="picScrollOptions">
          <ul class="pic-list">
            <li
              v-for="(pic, index) in 3"
              :key="index"
              class="pic-item"
            >
              <img :src="seller.shop_environment ? seller.shop_environment : 'http://img4.imgtn.bdimg.com/it/u=1581577444,144697650&fm=26&gp=0.jpg'" width="120" height="90" />
            </li>
          </ul>
        </cube-scroll>
      </div>
      <div class="info">
        <h1 class="title border-bottom-1px">商家信息</h1>
        <ul>
          <li class="info-item border-bottom-1px">该商家支持发票,请下单写好发票抬头</li>
          <li
            v-for="(info, index) in infos"
            :key="index"
            class="info-item border-bottom-1px"
          >
            {{ info }}
          </li>
        </ul>
      </div>
    </div>
  </cube-scroll>
</template>

<script>
// 业务组件
import Star from './star'
import SupportIco from './supportIco'

// VUEX
import { mapGetters } from 'vuex'

export default {
  name: 'Seller',
  components: {
    SupportIco,
    Star
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      favorite: false,
      sellerScrollOptions: {
        directionLockThreshold: 0,
        click: false
      },
      picScrollOptions: {
        scrollX: true,
        stopPropagation: true,
        directionLockThreshold: 0
      }
    }
  },
  computed: {
    seller() {
      return this.getMerchantDetail() || {}
    },
    infos() {
      const infos = []
      let categoryString = ''
      const merDetail = this.getMerchantDetail() || { categorys: [] }
      if (merDetail.categorys) {
        categoryString = merDetail.categorys.reduce((pre, next) => {
          return `${pre},${next}`
        })
      }
      infos.push(`种类：${categoryString}`)
      infos.push(merDetail.address)
      infos.push(`营业时间：${merDetail.start_time}-${merDetail.end_time}`)
      return infos
    },
    favoriteText() {
      return this.favorite ? '已收藏' : '收藏'
    }
  },
  methods: {
    ...mapGetters('shopDetail', ['getMerchantDetail']),
    toggleFavorite() {
      this.favorite = !this.favorite
      // saveToLocal(this.seller.id, 'favorite', this.favorite)
    }
  }
}
</script>

<style lang="scss" scoped>
  .seller {
    height: 100%;
    text-align: left;
    .overview {
      position: relative;
      padding: 18px;
      .title {
        margin-bottom: 8px;
        line-height: 14px;
        font-size: 14px;
        color: #333;
      }
      .desc {
        display: flex;
        align-items: center;
        padding-bottom: 18px;
        .star {
          margin-right: 8px
        }
        .text {
          margin-right: 12px;
          line-height: 18px;
          font-size: 10px;
          color: #666;
        }
      }
      .remark {
        display: flex;
        padding-top: 18px;
        .block {
          flex: 1;
          text-align: center;
          border-right: 1px solid #d9dde1;
          &:last-child {
            border: none
          }
          h2 {
            margin-bottom: 4px;
            line-height: 10px;
            font-size: 10px;
            color: #999;
          }
          .content {
            line-height: 24px;
            font-size: 10px;
            color: #333;
            .stress {
              font-size: 24px;
            }
          }
        }
      }
      .favorite {
        position: absolute;
        width: 50px;
        right: 11px;
        top: 18px;
        text-align: center;
        .icon-favorite {
          display: block;
          margin-bottom: 4px;
          line-height: 24px;
          font-size: 24px;
          color: #d9dde1;
          &.active {
            color: #f01414;
          }
        }
        .text {
          line-height: 10px;
          font-size: 10px;
          color: #666;
        }
      }
    }
    .bulletin {
      padding: 18px 18px 0 18px;
      white-space: normal;
      .title {
        margin-bottom: 8px;
        line-height: 14px;
        color: #333;
        font-size: 14px;
      }
      .content-wrapper {
        padding: 0 12px 16px 12px;
        .content {
          line-height: 24px;
          font-size: 12px;
          color: #f01414;
        }
      }
      .supports {
        .support-item {
          display: flex;
          align-items: center;
          padding: 16px 12px;
          &:last-child {
            border: 0px;
          }
        }
        .support-ico {
          margin-right: 6px;
        }
        .text {
          line-height: 16px;
          font-size: 12px;
          color: #333;
        }
      }
    }
    .pics {
      padding: 18px;
      .title {
        margin-bottom: 12px;
        line-height: 14px;
        color: #333;
        font-size: 14px;
      }
      .pic-wrapper {
        display: flex;
        align-items: center;
        .pic-list {
          .pic-item {
            display: inline-block;
            margin-right: 6px;
            width: 120px;
            height: 90px;
            &:last-child {
               margin: 0
            }
          }
        }
      }
    }
    .info {
      padding: 18px 18px 0 18px;
      color: #333;
      .title {
        padding-bottom: 12px;
        line-height: 14px;
        font-size: 14px;
      }
      .info-item {
        padding: 16px 12px;
        line-height: 16px;
        font-size: 12px;
        &:last-child {
          border: 0px;
        }
      }
    }
  }
</style>
