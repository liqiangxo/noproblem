//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '～   欢  迎 光  临   ～',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../myself/myself'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    }),
    this.setData({
      title: 'hello',
    })
  },
  bindViewTap1: function(e) {
    wx.navigateTo({
      url: '../healthy/healthy'
    })
  },
  bindViewTap2: function(e) {
    wx.navigateTo({
      url: '../life/life'
    })
  },
  onShareAppMessage: function () {
    return {
      title: '分享到',
      path: '../life/life'
    }
  }
})
