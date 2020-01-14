// 高德地图定位
export const AMapService = {
  data() {
    return {
      mapObj: '',
      longitude: '', // 经度
      latitude: '', // 纬度
      currentCity: 'shenzhen', // 当前城市
      searchRes: [] // 搜索结果
    }
  },
  methods: {
    initAMap() {
      this.mapObj = new AMap.Map('iCenter')
    },
    // 定位
    geoLocation() {
      const that = this
      this.initAMap()
      this.mapObj.plugin('AMap.Geolocation', function() {
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, // 是否使用高精度定位，默认:true
          timeout: 5000, // 超过5秒后停止定位，默认：无穷大
          noIpLocate: 0
        })
        geolocation.getCurrentPosition((status, result) => {
          if (status === 'complete') {
            that.longitude = result.position.lng
            that.latitude = result.position.lat
          } else {
            that.$message.error('定位失败，请刷新浏览器重试')
          }
        })
      })
    },
    // 高德地图搜索服务
    searchPosition(keyword) {
      const that = this
      AMap.plugin('AMap.Autocomplete', function() {
        // 实例化Autocomplete
        var autoOptions = {
          // city 限定城市，默认全国
          city: that.currentCity || '全国',
          citylimit: true
        }
        var autoComplete = new AMap.Autocomplete(autoOptions)
        autoComplete.search(keyword, function(status, result) {
          // 搜索成功时，result即是对应的匹配数据
          if (status === 'complete' && result.info === 'OK') {
            that.$nextTick(() => {
              that.searchRes = []
              that.searchRes = result.tips
            })
          }
        })
      })
    }
  }
}
