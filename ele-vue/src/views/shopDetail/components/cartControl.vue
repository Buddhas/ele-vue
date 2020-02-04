<template>
  <div class="cartcontrol">
    <transition name="move">
      <div v-show="food.count > 0" class="cart-decrease" @click.stop="decrease">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div v-show="food.count > 0" class="cart-count">{{ food.count }}</div>
    <div class="cart-add icon-add_circle" @click.stop="add"></div>
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
      color: blue;
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
    font-size: 10px;
    color: #666;
  }
  .cart-add {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: blue;
  }
}
</style>
