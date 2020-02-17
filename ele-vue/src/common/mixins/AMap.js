/*
 * @Descripttion: 
 * @version: 
 * @Author: 笑佛弥勒
 * @Date: 2020-01-20 20:41:57
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2020-02-16 16:27:54
 */
import { mapGetters } from 'vuex'
// 高德地图定位
export const AMapService = {
  data() {
    return {
      mapObj: '',
      positionFinallyFlag: false,
      currentPosition: '正在定位...', // 当前地址
      locationFlag: false, // 定位结果
      longitude: '', // 经度
      latitude: '', // 纬度
      searchRes: [] // 搜索结果
    }
  },
  computed: {
    // 当前城市
    currentCity() {
      return this.getCurrentCity()
    }
  },
  methods: {
    ...mapGetters('address', ['getCurrentCity']),
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
            that.currentPosition = result.formattedAddress
            that.locationFlag = true
          } else {
            that.locationFlag = false
            that.currentPosition = '定位失败'
            const toast = that.$createToast({
              time: 2000,
              type: 'txt',
              txt: '定位失败'
            })
            toast.show()
          }
          this.positionFinallyFlag = true
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
          city: that.currentCity || '深圳',
          citylimit: false
        }
        var autoComplete = new AMap.Autocomplete(autoOptions)
        autoComplete.search(keyword, function(status, result) {
          // 搜索成功时，result即是对应的匹配数据
          if (status === 'complete' && result.info === 'OK') {
            that.$nextTick(() => {
              that.searchRes = []
              that.searchRes = result.tips
              console.log(that.searchRes)
            })
          }
        })
      })
    }
  }
}
