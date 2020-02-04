/*
 * @Descripttion: 加载更多Mixins
 * @version: 1.0
 * @Author: 笑佛弥勒
 * @Date: 2020-01-26 15:39:12
 * @LastEditors  : 笑佛弥勒
 * @LastEditTime : 2020-02-03 15:59:20
 */
export default {
  data() {
    return {
      page: 1,
      pageSize: 20,
      finallyFlag: true,
      totalPage: 1,
      allLoaded: false
    }
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const windowHeight = document.documentElement.clientHeight
      const scrollTop = document.documentElement.scrollTop
      const bodyHeight = document.body.scrollHeight
      const totalHeight = parseFloat(windowHeight + scrollTop, 10)
      // 考虑不同浏览器的交互，可能顶部条隐藏之类的，导致页面高度变高
      const browserOffset = 60
      if (bodyHeight <= totalHeight + browserOffset && this.page < this.totalPage && this.finallyFlag) {
        this.page++
        this.finallyFlag = false
        if (this.page > this.totalPage) {
          this.allLoaded = true
        } else {
          this.loadingMore()
        }
      }
    }
  }
}
