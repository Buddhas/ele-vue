<!--
 * @Descripttion: 
 * @version: 
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditors  : 笑佛弥勒
 * @LastEditTime : 2020-02-05 20:20:07
 -->
<template>
  <div class="cartcontrol">
    <transition name="move">
      <div v-show="food.count > 0" class="cart-decrease" @click.stop="decrease">
        <span class="inner icon-remove_circle_outline iconfont">&#xe605;</span>
      </div>
    </transition>
    <div v-show="food.count > 0" class="cart-count">{{ food.count }}</div>
    <div class="cart-add icon-add_circle iconfont" @click.stop="add">&#xe604;</div>
  </div>
</template>

<script>
const EVENT_ADD = 'add'

export default {
  name: 'CartControl',
  props: {
    food: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    add(event) {
      if (!this.food.count) {
        this.$set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit(EVENT_ADD, event.target)
    },
    decrease() {
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cartcontrol {
  display: flex;
  align-items: center;
  .cart-decrease {
    display: inline-block;
    padding: 6px;
    opacity: 1;
    .inner {
      display: inline-block;
      line-height: 24px;
      font-size: 24px;
      color: #00a0dc;
      transition: all 0.4s linear;
      transform: rotate(0);
    }
    &.move-enter-active, &.move-leave-active {
      transition: all 0.4s linear;
    }
    &.move-enter, &.move-leave-active {
      opacity: 0;
      transform: translate3d(24px, 0, 0);
      .inner {
        transform: rotate(180deg)
      }
    }
  }
  .cart-count {
    width: 12px;
    line-height: 24px;
    text-align: center;
    font-size: 14px;
    color: #666;
  }
  .cart-add {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: #00a0dc;
  }
  .icon-add_circle {
    color: #00a0dc;
  }
}
</style>
