<template>
  <cube-scroll ref="scroll" class="ratings" :options="scrollOptions">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{ seller.score }}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{ seller.rankRate }}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore" />
            <span class="score">{{ seller.serviceScore }}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore" />
            <span class="score">{{ seller.foodScore }}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{ seller.deliveryTime }}分钟</span>
          </div>
        </div>
      </div>
      <!-- <split /> -->
      <rating-select
        :select-type="selectType"
        :only-content="onlyContent"
        :ratings="ratings"
        @select="onSelect"
        @toggle="onToggle"
      />
      <div class="rating-wrapper">
        <ul>
          <li
            v-for="(rating, indexs) in computedRatings"
            :key="indexs"
            class="rating-item border-bottom-1px"
          >
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar" />
            </div>
            <div class="content">
              <h1 class="name">{{ rating.username }}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score" />
                <span v-show="rating.deliveryTime" class="delivery">{{
                  rating.deliveryTime
                }}</span>
              </div>
              <p class="text">{{ rating.text }}</p>
              <div
                v-show="rating.recommend && rating.recommend.length"
                class="recommend"
              >
                <span class="icon-thumb_up"></span>
                <span
                  v-for="(item, index) in rating.recommend"
                  :key="index"
                  class="item"
                >
                  {{ item }}
                </span>
              </div>
              <div class="time">
                {{ format(rating.rateTime) }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </cube-scroll>
</template>

<script>
import Star from './star'
import RatingSelect from './ratingSelect'
import ratingMixin from '@/common/mixins/rating'
import moment from 'moment'

// VUEX
import { mapGetters } from 'vuex'

export default {
  name: 'Ratings',
  mixins: [ratingMixin],
  components: {
    Star,
    RatingSelect
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      ratings: [],
      scrollOptions: {
        click: false,
        directionLockThreshold: 0
      }
    }
  },
  computed: {
    seller() {
      return this.getMerchantDetail() || {}
    }
  },
  methods: {
    ...mapGetters('shopDetail', ['getMerchantDetail']),
    fetch() {
      if (!this.fetched) {
        this.fetched = true
      }
    },
    format(time) {
      return moment(time).format('YYYY-MM-DD hh:mm')
    }
  },
  watch: {
    selectType() {
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .ratings {
    position: relative;
    text-align: left;
    white-space: normal;
    height: 100%;
    .overview {
      display: flex;
      padding: 18px 0;
      .overview-left {
        flex: 0 0 137px;
        padding: 6px 0;
        width: 137px;
        border-right: 1px solid #d9dde1;
        text-align: center;
        .score {
          margin-bottom: 6px;
          line-height: 28px;
          font-size: 24px;
          color: #fc9153;
        }
        .title {
          margin-bottom: 8px;
          line-height: 12px;
          font-size: 12px;
          color: #333;
        }
        .rank {
          line-height: 10px;
          font-size: 12px-s;
          color: #999;
        }
      }
      .overview-right {
        flex: 1;
        padding: 6px 0 6px 24px;
        .score-wrapper {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          .title {
            line-height: 18px;
            font-size: 12px;
            color: #333;
          }
          .star {
            margin: 0 12px;
          }
          .score {
            line-height: 18px;
            font-size: 12px;
            color: #fc9153;
          }
        }
        .delivery-wrapper {
          display: flex;
          align-items: center;
          .title {
            line-height: 18px;
            font-size: 12px;
            color: #333;
          }
          .delivery {
            margin-left: 12px;
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
    .rating-wrapper {
      padding: 0 18px;
      .rating-item {
        display: flex;
        padding: 18px 0;
        .avatar {
          flex: 0 0 28px;
          width: 28px;
          margin-right: 12px;
          img {
            height: auto;
            border-radius: 50%;
          }
        }
        .content {
          position: relative;
          flex: 1;
          .name {
            margin-bottom: 4px;
            line-height: 12px;
            font-size: 12px-s;
            color: #333;
          }
          .star-wrapper {
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            .star {
              margin-right: 6px
            }
            .delivery {
              font-size: 12px-s;
              color: #999;
            }
          }
          .text {
            margin-bottom: 8px;
            line-height: 18px;
            color: #333;
            font-size: 12px;
          }
          .recommend {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            line-height: 16px;
            .icon-thumb_up, .item {
              margin: 0 8px 4px 0;
              font-size: 12px;
            }
            .icon-thumb_up {
              color: #00a0dc;
            }
            .item {
              padding: 0 6px;
              border: 1px solid rgba(7,17,27,.1);
              border-radius: 1px;
              color: #999;
              background: #fff;
            }
          }
          .time {
            position: absolute;
            top: 0;
            right: 0;
            line-height: 12px;
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
</style>
