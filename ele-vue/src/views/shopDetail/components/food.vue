<template>
  <transition name="move" @after-leave="afterLeave">
    <div v-show="visible" class="food">
      <cube-scroll ref="scroll">
        <div class="food-content">
          <div class="image-header">
            <img :src="'http://img4.imgtn.bdimg.com/it/u=1581577444,144697650&fm=26&gp=0.jpg'" />
            <div class="back" @click="hide">
              <i class="icon-arrow_lift iconfont">&#xe670;</i>
            </div>
          </div>
          <div class="content">
            <h1 class="title">{{ food.name }}</h1>
            <div class="detail">
              <span class="sell-count">月售{{ food.mon_sale }}份</span>
              <span class="rating">好评率{{ food.rate }}%</span>
            </div>
            <div class="price">
              <span class="now">￥{{ food.price }}</span>
            </div>
            <div class="cart-control-wrapper">
              <cart-control :food="food" @add="addFood" />
            </div>
            <transition name="fade">
              <div v-show="!food.count" class="buy" @click="addFirst">
                加入购物车
              </div>
            </transition>
          </div>
          <split v-show="food.info" />
          <div v-show="food.introduce" class="info">
            <h1 class="title">商品信息</h1>
            <p class="text">{{ food.introduce }}</p>
          </div>
          <split />
          <div class="rating">
            <h1 class="title">商品评价</h1>
            <rating-select
              :select-type="selectType"
              :only-content="onlyContent"
              :desc="desc"
              :ratings="ratings"
              @select="onSelect"
              @toggle="onToggle"
            />
            <div class="rating-wrapper">
              <ul v-show="computedRatings && computedRatings.length">
                <li
                  v-for="(rating,index) in computedRatings"
                  :key="index"
                  class="rating-item border-bottom-1px"
                >
                  <div class="user">
                    <span class="name">{{rating.username}}</span>
                    <img class="avatar" width="12" height="12" :src="rating.avatar">
                  </div>
                  <div class="time">{{format(rating.rateTime)}}</div>
                  <p class="text">
                    <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>{{rating.text}}
                  </p>
                </li>
              </ul>
              <div v-show="!computedRatings || !computedRatings.length" class="no-rating">暂无评价</div>
            </div>
          </div>
        </div>
      </cube-scroll>
    </div>
  </transition>
</template>

<script>
// 工具类
import moment from 'moment'
import ratingMixin from '@/common/mixins/rating'
import popupMixin from '@/common/mixins/popup'

// 业务组件
import CartControl from './cartControl'
import RatingSelect from './ratingSelect'
import Split from './split'
const EVENT_SHOW = 'show'
const EVENT_ADD = 'add'
const EVENT_LEAVE = 'leave'

export default {
  name: 'Food',
  mixins: [ratingMixin, popupMixin],
  components: {
    CartControl,
    RatingSelect,
    Split
  },
  props: {
    food: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      },
      tempRatings: [
        {
          username: '3******c',
          rateTime: 1469281964000,
          rateType: 0,
          text: '很喜欢的粥',
          avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
        },
        {
          username: '3******c',
          rateTime: 1469281964000,
          rateType: 1,
          text: '很喜欢的粥',
          avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
        },
        {
          username: '3******c',
          rateTime: 1469281964000,
          rateType: 2,
          text: '很喜欢的粥',
          avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
        }
      ]
    }
  },
  computed: {
    ratings() {
      // return this.food.rate
      return this.tempRatings
    }
  },
  created() {
    this.$on(EVENT_SHOW, () => {
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    })
  },
  methods: {
    afterLeave() {
      this.$emit(EVENT_LEAVE)
    },
    addFirst(event) {
      this.$set(this.food, 'count', 1)
      this.$emit(EVENT_ADD, event.target)
    },
    addFood(target) {
      this.$emit(EVENT_ADD, target)
    },
    format(time) {
      return moment(time).format('YYYY-MM-DD hh:mm')
    }
  }
}
</script>
<style lang="scss" scoped>
.food {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 48px;
  z-index: 30;
  width: 100%;
  background: #fff;
  &.move-enter-active,
  &.move-leave-active {
    transition: all 0.3s linear;
  }
  &.move-enter,
  &.move-leave-active {
    transform: translate3d(100%, 0, 0);
  }
  .image-header {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .back {
      position: absolute;
      top: 10px;
      left: 0;
      .icon-arrow_lift {
        display: block;
        padding: 10px;
        font-size: 20px;
        color:#fff;
      }
    }
  }
  .content {
    position: relative;
    padding: 18px;
    .title {
      line-height: 14px;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
    .detail {
      margin-bottom: 18px;
      line-height: 10px;
      height: 10px;
      .sell-count,
      .rating {
        font-size: 10px;
        color: #999;
      }
      .sell-count {
        margin-right: 12px;
      }
    }
    .price {
      line-height: 24px;
      font-weight: 700;
      .now {
        margin-right: 8px;
        font-size: 14px;
        color: #f01414;
      }
      .old {
        text-decoration: line-through;
        font-size: 10px;
        color: #999;
      }
    }
    .cart-control-wrapper {
      position: absolute;
      right: 12px;
      bottom: 12px;
    }
    .buy {
      position: absolute;
      right: 18px;
      bottom: 18px;
      z-index: 10;
      height: 24px;
      line-height: 24px;
      padding: 0 12px;
      box-sizing: border-box;
      border-radius: 12px;
      font-size: 10px;
      color: #fff;
      background: #00a0dc;
      opacity: 1;
      &.fade-enter-active,
      &.fade-leave-active {
        transition: all 0.3s;
      }
      &.fade-enter,
      &.fade-leave-active {
        opacity: 0;
        z-index: -1;
      }
    }
  }
  .info {
    padding: 18px;
    .title {
      line-height: 14px;
      margin-bottom: 6px;
      font-size: 14px;
      color: #333;
    }
    .text {
      line-height: 24px;
      padding: 0 8px;
      font-size: 12px;
      color: #666;
    }
  }
  .rating {
    padding-top: 18px;
    .title {
      line-height: 14px;
      margin-left: 18px;
      font-size: 14px;
      color: #333;
    }
    .rating-wrapper {
      padding: 0 18px;
      .rating-item {
        position: relative;
        padding: 16px 0;
        &:last-child {
          border: 0px;
        }
        .user {
          position: absolute;
          right: 0;
          top: 16px;
          display: flex;
          align-items: center;
          line-height: 12px;
          .name {
            margin-right: 6px;
            font-size: 10px;
            color: #999;
          }
          .avatar {
            border-radius: 50%;
          }
        }
        .time {
          margin-bottom: 6px;
          line-height: 12px;
          font-size: 10px;
          color: #999;
        }
        .text {
          line-height: 16px;
          font-size: 12px;
          color: #333;
          .icon-thumb_up,
          .icon-thumb_down {
            margin-right: 4px;
            line-height: 16px;
            font-size: 12px;
          }
          .icon-thumb_up {
            color: blue;
          }
          .icon-thumb_down {
            color: #999;
          }
        }
      }
      .no-rating {
        padding: 16px 0;
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
