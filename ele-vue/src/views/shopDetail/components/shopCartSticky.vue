<template>
  <div v-show="visible" class="shop-cart-sticky">
    <shop-cart
      ref="shopCart"
      :select-foods="selectFoods"
      :delivery-price="deliveryPrice"
      :min-price="minPrice"
      :fold="fold"
      :sticky="true"
    />
  </div>
</template>

<script>
import ShopCart from './shopCart'
import popupMixin from '@/common/mixins/popup'

export default {
  name: 'ShopCartSticky',
  mixins: [popupMixin],
  components: {
    ShopCart
  },
  props: {
    selectFoods: {
      type: Array,
      default() {
        return []
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    },
    fold: {
      type: Boolean,
      default: true
    },
    list: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    drop(el) {
      this.$refs.shopCart.drop(el)
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-cart-sticky {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 48px;
}
</style>
