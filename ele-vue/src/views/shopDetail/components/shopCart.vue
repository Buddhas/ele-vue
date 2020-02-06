<template>
  <div>
    <div class="shopcart">
      <div class="content flex" @click="toggleList">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{ highlight: totalCount > 0 }">
              <i
                class="icon-shopping_cart iconfont"
                :class="{ highlight: totalCount > 0 }"
              >&#xe613;</i>
            </div>
            <div v-show="totalCount > 0" class="num">
              <bubble :num="totalCount" />
            </div>
          </div>
          <div class="price" :class="{ highlight: totalPrice > 0 }">
            ￥{{ totalPrice }}
          </div>
          <div v-if="deliveryPrice" class="desc">另需配送费￥{{ deliveryPrice }}元</div>
        </div>
        <div class="content-right" @click="pay">
          <div class="pay" :class="payClass">
            {{ payDesc }}
          </div>
        </div>
      </div>
      <div class="ball-container">
        <div v-for="(ball, index) in balls" :key="index">
          <transition
            @before-enter="beforeDrop"
            @enter="dropping"
            @after-enter="afterDrop"
          >
            <div v-show="ball.show" class="ball">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bubble from './bubble'

const BALL_LEN = 10
const innerClsHook = 'inner-hook'

function createBalls() {
  const balls = []
  for (let i = 0; i < BALL_LEN; i++) {
    balls.push({ show: false })
  }
  return balls
}
export default {
  name: 'ShopCart',
  components: { Bubble },
  props: {
    selectFoods: {
      type: Array,
      default: () => {}
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    },
    sticky: {
      type: Boolean,
      default: false
    },
    fold: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      balls: createBalls(),
      dropBalls: [],
      listFold: this.fold
    }
  },
  computed: {
    totalPrice() {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    totalCount() {
      let count = 0
      this.selectFoods.forEach((food) => {
        count += food.count
      })
      return count
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice) {
        const diff = this.minPrice - this.totalPrice
        return `还差￥${diff}元起送`
      } else {
        return '去结算'
      }
    },
    payClass() {
      if (!this.totalCount || this.totalPrice < this.minPrice) {
        return 'not-enough'
      } else {
        return 'enough'
      }
    }
  },
  methods: {
    toggleList() {
      if (this.listFold) {
        if (!this.totalCount) {
          return
        }
        this.listFold = false
        this._showShopCartList()
        this._showShopCartSticky()
      } else {
        this.listFold = true
        this._hideShopCartList()
      }
    },
    pay(e) {
      if (this.totalPrice < this.minPrice) {
        return
      }
      this.$createDialog({
        title: '支付',
        content: `您需要支付${this.totalPrice}元`
      }).show()
      e.stopPropagation() // 阻止事件冒泡
    },
    drop(el) {
      for (let i = 0; i < this.balls.length; i++) {
        const ball = this.balls[i]
        if (!ball.show) {
          ball.show = true
          ball.el = el
          this.dropBalls.push(ball)
          return
        }
      }
    },
    beforeDrop(el) {
      const ball = this.dropBalls[this.dropBalls.length - 1]
      const rect = ball.el.getBoundingClientRect()
      const x = rect.left - 32
      const y = -(window.innerHeight - rect.top - 22)
      el.style.display = ''
      el.style.transform = el.style.webkitTransform = `translate3d(0,${y}px,0)`
      const inner = el.getElementsByClassName(innerClsHook)[0]
      inner.style.transform = inner.style.webkitTransform = `translate3d(${x}px,0,0)`
    },
    dropping(el, done) {
      el.style.transform = el.style.webkitTransform = `translate3d(0,0,0)`
      el.style.transform = el.style.webkitTransform = `translate3d(0,0,0)`
      const inner = el.getElementsByClassName(innerClsHook)[0]
      inner.style.transform = inner.style.webkitTransform = `translate3d(0,0,0)`
      el.addEventListener('transitionend', done) // ?? 有啥用
    },
    afterDrop(el) {
      const ball = this.dropBalls.shift()
      if (ball) {
        ball.show = false
        el.style.display = 'none'
      }
    },
    _showShopCartList() {
      this.shopCartListComp = this.shopCartListComp || this.$createShopCartList({
        $props: {
          selectFoods: 'selectFoods'
        },
        $events: {
          leave: () => {
            this._hideShopCartSticky()
          },
          hide: () => {
            this.listFold = true
          },
          add: (el) => {
            this.shopCartStickyComp.drop(el)
          }
        }
      })
      this.shopCartListComp.show()
    },
    _showShopCartSticky() {
      this.shopCartStickyComp = this.shopCartStickyComp || this.$createShopCartSticky({
        $props: {
          selectFoods: 'selectFoods',
          deliveryPrice: 'deliveryPrice',
          minPrice: 'minPrice',
          fold: 'listFold',
          list: this.shopCartListComp
        }
      })
      this.shopCartStickyComp.show()
    },
    _hideShopCartList() {
      const list = this.sticky ? this.$parent.list : this.shopCartListComp
      list.hide && list.hide()
    },
    _hideShopCartSticky() {
      this.shopCartStickyComp.hide()
    }
  },
  watch: {
    fold(newVal) {
      this.listFold = newVal
    },
    totalCount(count) {
      if (!this.fold && count === 0) {
        this._hideShopCartList()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .shopcart {
    height: 100%;
    .content {
      display: flex;
      background: #07111b;
      font-size: 0;
      color: #999;
      .content-left {
        flex: 1;
        .logo-wrapper {
          display: inline-block;
          vertical-align: top;
          position: relative;
          top: -10px;
          margin: 0 12px;
          padding: 6px;
          width: 56px;
          height: 56px;
          box-sizing: border-box;
          border-radius: 50%;
          background: #07111b;
          .logo {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            text-align: center;
            background: #07111b;
            &.highlight {
              background: #00a0dc;
            }
            .icon-shopping_cart {
              line-height: 44px;
              font-size: 24px;
              color: #999;
              &.highlight {
                color: #fff
              }
            }
          }
          .num {
            position: absolute;
            top: 0;
            right: 0;
          }
        }
        .price {
          display: inline-block;
          vertical-align: top;
          margin-top: 12px;
          line-height: 24px;
          padding-right: 12px;
          box-sizing: border-box;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          font-weight: 700;
          font-size: 16px;
          &.highlight {
            color: #00a0dc;
          }
        }
        .desc {
          display: inline-block;
          vertical-align: top;
          margin: 12px 0 0 12px;
          line-height: 24px;
          font-size: 10px;
        }
      }
      .content-right {
        flex: 0 0 105px;
        width: 105px;
        .pay {
          height: 48px;
          line-height: 48px;
          text-align: center;
          font-weight: 700;
          font-size: 12px;
          &.not-enough {
            background: #333;
          }
          &.enough {
            background: #00b43c;
            color: #fff;
          }
        }
      }
    }
    .ball-container {
      .ball {
        position: fixed;
        left: 32px;
        bottom: 22px;
        z-index: 200;
        transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
        .inner {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #00a0dc;
          transition: all 0.4s linear;
        }
      }
    }
  }
</style>
