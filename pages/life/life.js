//life.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '生活',
    userInfo: {},

  },
  //事件处理函数
  onLoad: function () {
    console.log('onLoad')
  },
//   bindViewTap1: function(e) {
//     wx.getLocation({
//   type: 'gcj02', //返回可以用于wx.openLocation的经纬度
//   success: function(res) {
//     var latitude = res.latitude
//     var longitude = res.longitude
//     wx.openLocation({
//       latitude: latitude,
//       longitude: longitude,
//       scale: 28
//     })
//   }
// })
//   },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文 
    this.mapCtx = wx.createMapContext('myMap')
  },
  // getCenterLocation: function () {
  //   this.mapCtx.getCenterLocation({
  //     success: function(res){
  //       console.log(res.longitude)
  //       console.log(res.latitude)
  //     }
  //   })
  // },
  moveToLocation: function () {
    wx.navigateTo({
      url: '../game/programmer'
    })
  },
  accelerometer: function () {
    wx.navigateTo({
      url: '../on-accelerometer-change/on-accelerometer-change'
    })
  },
  // imageError: function (e) {
  //   console.log('image3发生error事件，携带值为', e.detail.errMsg)
  // }
}
)
