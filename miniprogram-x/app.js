//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({//返回和用户对应的唯一的openid
      success:res=>{//参数success：如果成功则返回res
        console.log('res',res)//在日志上打印出res的信息
        wx.request({//向后台发起请求
          url: 'https://zjgsujiaoxue.applinzi.com/index.php/Api/Weixin/code_to_openidv2',//浙江工商大学提供的后台
          data:{//这里的作用是把信息赋值给后台对应数据库里具体项的信息，‘code','from'是固定的，只能从后端变更，且一个也不能少。
            'code':res.code,
            'from':'wxf721e37fc9199f11'
          },
          success:function(res){//如果请求成功则执行函数
            console.log('openid',res.data)
            wx.setStorageSync('test1_openid', res.data.openid)//将openid的值存入缓存当中
            wx.request({
              url: 'https://zjgsujiaoxue.applinzi.com/index.php/Api/User/getInfo',
              data:{
                'openid':res.data.openid
              },
              success:function(res1){
                wx.setStorageSync('userInfo',res1.data.data )
              }
            })
            if(!res.data.is_resgiter){
               wx.showModal({//现实模态弹窗
                title:'提示',
                content:'请先注册',
                //showCancel:false,
                success:function(res){//如果按下确定则跳转页面
                  wx.navigateTo({
                    url: '/pages/register/userlogin',
                  })
                }
              })
            }
             
              console.log('rrr',res)
          },
          fail:function(res){
            console.log('res'+res)
          }
        })
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
userInfo: null
}
})