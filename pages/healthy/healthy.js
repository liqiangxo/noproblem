//life.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '健康',
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    title: '123',
    array: [
      {
        text: '薛之谦',
        mode: 'aspectFit',
        src: 'https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000'
      },
      {
        text: '迈克尔·杰克逊',
        mode: 'aspectFit',
        src: 'https://y.gtimg.cn/music/photo_new/T001R300x300M000001Y2Gbc2Xt1hU.jpg?max_age=2592000'
      },
      {
        text: '大冰',
        mode: 'aspectFit',
        src: 'https://y.gtimg.cn/music/photo_new/T001R300x300M0000013LgfK0D2JA5.jpg?max_age=2592000'
      }
    ],
    src: '../res/icon.png'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
  },
  bindViewTap1: function(e) {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  bindViewTap2: function(e) {
    wx.navigateTo({
      url: '../life/life'
    })
  }
})
