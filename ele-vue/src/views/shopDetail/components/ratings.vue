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


