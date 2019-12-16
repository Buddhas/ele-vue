<template>
  <div class="tab">
    <cube-tab-bar
      ref="tabBar"
      v-model="selectedLabel"
      :use-transition="false"
      :show-slider="true"
      :data="tabs"
      class="border-bottom-1px"
    />
    <div class="slide-wrapper">
      <cube-slide
        ref="slide"
        :loop="false"
        :auto-play="false"
        :show-dots="false"
        :initial-index="index"
        :options="slideOptions"
        @scroll="onScroll"
        @change="onChange"
      >
        <cube-slide-item v-for="(tab, tabIndex) in tabs" :key="tabIndex">
          <component :is="tab.component" ref="component" :data="tab.data" />
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      index: this.initialIndex,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      }
    }
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label
      },
      set(newVal) {
        this.index = this.tabs.findIndex(value => {
          return value.label === newVal
        })
      }
    }
  },
  mounted() {
    this.onChange(this.index)
  },
  methods: {
    // 导航页滚动
    onScroll(pos) {
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const transform = (-pos.x / slideWidth) * tabBarWidth
      this.$refs.tabBar.setSliderTransform(transform)
    },
    onChange(current) {
      this.index = current
      const instance = this.$refs.component[current]
      if (instance && instance.fetch) {
        instance.fetch()
      }
    }
  }
}
</script>

<style lang="css" scoped>
.tab {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.tab /deep/ .cube-tab-bar {
  background-color: #ffffff;
}
.tab /deep/.cube-tab {
  font-size: 20px;
  padding: 10px 0;
}
.tab /deep/ .slide-wrapper {
  flex: 1;
  overflow: hidden;
}
.tab /deep/ .cube-tab_active {
  color: #f01414;
}
.tab /deep/ .cube-tab-bar-slider {
  background-color: #f01414;
}
</style>
