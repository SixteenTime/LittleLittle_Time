//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    questions:[
      "当你因为娱乐耽误了计划好的重要工作，你会不会后悔？",
      "当被人要求做一件事情，并且你知道这件事情有很大的难度时，你是否会认为这是一项有趣的挑战？",
      "如果某项工作应当在当月5日完成，但你知道即使6日完成也没有人批评你，你会在5日完成吗？",
      "你经常仔细地计划你的资金吗？",
      "你通常能准时缴付各种账单吗？ ",
      "你是否善于记录、存放各种资料？",
      "如果你需要用某一证件，你能否自己在一两分钟内找到它？ ",
      "如果你需要赶一项任务，你能否一连数天都每天工作12小时以上？",
      "你是否经常主动做一些份外工作？",
      "你能长时间自动自发地工作吗？ ",
      "你是否在没有人要求下，为自己设定工作目标及完成截止日期？ ",
      "你是否经常计划如何使用你的时间？",
      "你今天是否做了时间支配计划？",
      "如果某件事你不乐意做，但有上司要求你做，你会拒绝吗？",
      "你总是能专注地工作，而不会受外界干扰吗？",
      "如果某项工作很重要，即使没有人强迫你，你也会自发地做好它吗？ ",
      "有一项重要的工作需加班，而这天晚上恰有你非常喜爱的球赛，你会选择加班吗？",
      "碰上棘手的难题时，你总是首先想办法自己解决吗？ ",
      "你需要一些资料却无法得到，你会立即找人提供帮助吗？",
      "你不存在多次决心做某件事却最终因为主观原因没有做成的情形，对吗？"
    ]
  }
})