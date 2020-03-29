<!--
 * @Author: your name
 * @Date: 2020-01-05 15:47:10
 * @LastEditTime: 2020-03-29 16:57:01
 * @LastEditors: 笑佛弥勒
 * @Description: In User Settings Edit
 * @FilePath: \ele-vue\ele-vue\src\views\shopDetail\components\goods.vue
 -->
<template>
  <div class="goods-wrapper">
    <div class="scroll-nav-wrapper">
      <cube-scroll-nav
        v-if="goods.length"
        :side="true"
        :data="goods"
        :options="scrollOptions"
      >
        <!-- <template slot="bar" slot-scope="props">
          <cube-scroll-nav-bar
            direction="vertical"
            :labels="props.labels"
            :txts="barTxts"
            :current="props.current"
          >
            <template slot-scope="props">
              <div class="text">
                <support-ico
                  v-if="props.txt.type >= 1"
                  :size="3"
                  :type="props.txt.type"
                />
                <span>{{ props.txt.name }}</span>
                <span v-if="props.txt.count" class="num">
                  <bubble :num="props.txt.count" />
                </span>
              </div>
            </template>
          </cube-scroll-nav-bar>
        </template> -->
        <cube-scroll-nav-panel
          v-for="good in goods"
          :key="good.name"
          :label="good.name"
          :title="good.name"
        >
          <ul>
            <li
              v-for="food in good.foods"
              :key="food.id"
              class="food-item"
              @click="selectFood(food)"
            >
              <div class="icon">
                <img width="57" height="57" :src="IMAGESDOMAIN + food.image" />
              </div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p class="desc">{{ food.introduce }}</p>
                <div class="extra">
                  <span class="count">月售{{ food.mon_sale }}份</span>
                  <span>好评率{{ food.rate }}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{ food.price }}</span>
                </div>
                <div class="cart-control-wrapper">
                  <cart-control :food="food" @add="onAdd" />
                </div>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
    <div class="shop-cart-wrapper">
      <shop-cart
        ref="shopCart"
        :select-foods="selectFoods"
        :delivery-price="merchantDetail.deliveryPrice"
        :min-price="merchantDetail.top_up"
      />
    </div>
  </div>
</template>

<script>
// 业务组件
import Bubble from './bubble'
import SupportIco from './supportIco'
import ShopCart from './shopCart'
import CartControl from './cartControl'

// api请求
import { shopDetail as api } from '@/api/index'

// VUEX
import { mapGetters } from 'vuex'

export default {
  name: 'Goods',
  components: {
    ShopCart,
    CartControl
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
      merchantId: this.$route.query.merchantId,
      goods: [],
      selectedFood: {},
      scrollOptions: {
        click: false,
        directionLockThreshold: 0
      }
    }
  },
  computed: {
    merchantDetail() {
      return this.getMerchantDetail()
    },
    selectFoods() {
      let foods = []
      this.goods.forEach(good => {
        good.foods.forEach(food => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    },
    barTxts() {
      let ret = []
      this.goods.forEach(good => {
        const { type, name, foods } = good
        let count = 0
        foods.forEach(food => {
          count += food.count || 0
        })
        ret.push({
          type,
          name,
          count
        })
      })
      return ret
    }
  },
  created() {
    this._getFoodByMerId()
  },
  methods: {
    ...mapGetters('shopDetail', ['getMerchantDetail']),
    // 获取食品
    _getFoodByMerId() {
      const params = {
        id: this.merchantId
      }
      api.getFoodByMerId(params).then((res) => {
        this.goods = res.data
      })
    },
    fetch() {
      // if (!this.fetched) {
      //   this.fetched = true
      //   getGoods({
      //     id: this.merchantDetail.id
      //   }).then(goods => {
      //     this.goods = goods
      //   })
      // }
    },
    selectFood(food) {
      this.selectedFood = food
      this._showFood()
      this._showShopCartSticky()
    },
    onAdd(target) {
      this.$refs.shopCart.drop(target)
    },
    _showFood() {
      this.foodComp =
        this.foodComp ||
        this.$createFood({
          $props: {
            food: 'selectedFood'
          },
          $events: {
            add: target => {
              this.shopCartStickyComp.drop(target)
            },
            leave: () => {
              this._hideShopCartSticky()
            }
          }
        })
      this.foodComp.show()
    },
    _showShopCartSticky() {
      this.shopCartStickyComp =
        this.shopCartStickyComp ||
        this.$createShopCartSticky({
          $props: {
            selectFoods: 'selectFoods',
            deliveryPrice: this.merchantDetail.deliveryPrice,
            minPrice: this.merchantDetail.top_up,
            fold: true
          }
        })
      this.shopCartStickyComp.show()
    },
    _hideShopCartSticky() {
      this.shopCartStickyComp.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-wrapper {
  position: relative;
  text-align: left;
  height: 100%;
  .scroll-nav-wrapper {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 48px;
  }
  .food-item {
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    position: relative;
    &:last-child {
      border: 0px;
      margin-bottom: 0;
    }
    .icon {
      flex: 0 0 57px;
      margin-right: 10px;
    }
    .content {
      flex: 1;
      .name {
        margin: 2px 0 8px 0;
        height: 14px;
        line-height: 14px;
        font-size: 16px;
        color: #333;
      }
      .desc,
      .extra {
        line-height: 10px;
        font-size: 8px;
        color: #999;
      }
      .desc {
        line-height: 12px;
        margin-bottom: 8px;
      }
      .extra {
        .count {
          margin-right: 12px;
        }
      }
      .price {
        font-weight: 700;
        line-height: 24px;
        .now {
          margin-right: 8px;
          font-size: 14px;
          color: red;
        }
        .old {
          text-decoration: line-through;
          font-size: 10px;
          color: #999;
        }
      }
    }
    .cart-control-wrapper {
      position: absolute;
      right: 0;
      bottom: 12px;
    }
  }
  .shop-cart-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
  }
}
.goods-wrapper .scroll-nav-wrapper /deep/ .cube-scroll-nav-bar {
  width: 80px;
  white-space: normal;
  overflow: hidden;
}
.goods-wrapper /deep/ .cube-scroll-wrapper {
  width: 100%;
}
.goods-wrapper .scroll-nav-wrapper /deep/ .cube-scroll-nav-bar-item {
  padding: 0 10px;
  display: flex;
  align-items: center;
  height: 56px;
  line-height: 14px;
  font-size: 12px;
  background: #f3f5f7;
  .text {
    flex: 1;
    position: relative;
  }
  .num {
    position: absolute;
    right: -8px;
    top: -10px;
  }
  .support-ico {
    display: inline-block;
    vertical-align: top;
    margin-right: 4px;
  }
}
.goods-wrapper .scroll-nav-wrapper /deep/ .cube-scroll-nav-bar-item_active {
  background: #fff;
  color: #333;
}
.goods-wrapper .scroll-nav-wrapper /deep/ .cube-scroll-nav-panel-title {
  padding-left: 14px;
  height: 26px;
  line-height: 26px;
  border-left: 2px solid #d9dde1;
  font-size: 12px;
  color: #666;
  background: #f3f5f7;
}
</style>
