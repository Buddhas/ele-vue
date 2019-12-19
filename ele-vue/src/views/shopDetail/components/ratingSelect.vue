<template>
  <div class="rating-select">
    <div class="rating-type border-bottom-1px">
      <span
        class="block positive"
        :class="{ active: selectType === 2 }"
        @click="select(2)"
      >
        {{ desc.all }}
        <span class="count">{{ ratings.length }}</span>
      </span>
      <span
        class="block positive"
        :class="{ active: selectType === 0 }"
        @click="select(0)"
      >
        {{ desc.positive }}
        <span class="count">{{ positives.length }}</span>
      </span>
      <span
        class="block negative"
        :class="{ active: selectType === 1 }"
        @click="select(1)"
      >
        {{ desc.negative }}
        <span class="count">{{ negatives.length }}</span>
      </span>
    </div>
    <div class="switch" :class="{ on: onlyContent }" @click="toggleContent">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
const POSITIVE = 0
const NEGATIVE = 1
const ALL = 2

const EVENT_TOGGLE = 'toggle'
const EVENT_SELECT = 'select'

export default {
  props: {
    ratings: {
      type: Array,
      default: () => {}
    },
    selectType: {
      type: Number,
      default: ALL
    },
    onlyContent: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Object,
      default: () => {
        return {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        }
      }
    }
  },
  computed: {
    positives() {
      return this.ratings.filter(rating => {
        return rating.rateType === POSITIVE
      })
    },
    negatives() {
      return this.ratings.filter(rating => {
        return rating.rateType === NEGATIVE
      })
    }
  },
  methods: {
    select(type) {
      this.$emit(EVENT_SELECT, type)
    },
    toggleContent() {
      this.$emit(EVENT_TOGGLE)
    }
  }
}
</script>

<style lang="scss" scoped>
  .rating-select {
    .rating-type {
      padding: 18px 0;
      margin: 0 18px;
      .block {
        display: inline-block;
        padding: 8px 12px;
        margin-right: 8px;
        line-height: 16px;
        border-radius: 1px;
        font-size: 12px;
        color: #666;
      }
      &.active {
        color: #fff
      }
      .count {
        margin-left: 2px
      }
      &.positive {
        background: rgba(0,160,220,.2);
        &.active {
          background: #00a0dc
        }
      }
      &.negative {
        background: #ccc;
        &.active {
          background: #666;
        }
      }
    }
    .switch {
      display: flex;
      align-items: center;
      padding: 12px 18px;
      line-height: 24px;
      border-bottom: 1px solid rgba(7,17,27,.1);
      color: #999;
      &.on {
        .icon-check_circle {
          color: #00b43c
        }
      }
      .icon-check_circle {
        margin-right: 4px;
        font-size: 24px;
      }
      .text {
         font-size: 12px;
      }
    }
  }
</style>
