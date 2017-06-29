//life.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '关于我自己\n李强\n\n',
    text: "非主流游戏开发人员，cocos2dx前端开发\n\n全视道\n单机游戏项目 \n移动射击单机游戏\n使用语言c++\n使用Mac Xcode编程环境\n涉及资源分帧加载图片处理分场景加入资源等等内存优化技术\n涉及状态机移动攻击被攻击等待等状态\n2d渲染3d效果\n熟悉cocos2dx引擎怪物a星寻路算法\n\n环球互联项目 \n海岛战争 题材\n网络游戏\n使用cocos2djs开发\n使用Mac Xcode开发环境\nsdk接入ios android打包发布\n自己封装ui管理器 编辑\n优化以及卡牌式战斗，\n以及世界地图异步加载等等技术\nSvn多人分布式开发项目\n对网络开发网络协议有初步认识\n能合作开发网络游戏\n\n麦博公司\n学习多线程网络编程\nskynet服务器入门\ngbc服务器入门\n正在学习\nc++编译原理\n还需学习\nOpenGL\naction script",
    userInfo: {}, poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    current: {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    },
    audioAction: {
      method: 'pause'
    }

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
      url: '../healthy/healthy'
    })
  },
  bindViewTap2: function(e) {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {
    hi: 'MINA'
  }, 
  
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46')
    this.audioCtx.play()
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})