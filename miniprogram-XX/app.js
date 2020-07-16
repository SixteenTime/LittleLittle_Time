//app.js
const wxUrl=require('./config.js').wxUrl
const userUrl=require('./config.js').userUrl
const appID=require('./config').appID

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {  //res是wx.login返回的结果,里面储存了code,errNsg
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('res',res)
        wx.request({
          url: wxUrl+'code_to_openidv2',
          data:{
            'code':res.code,
            'from':appID
          },
          success:function(res1){
            console.log('res1',res1)
            wx.setStorageSync('test_openid', res1.data.openid)//将openid存入缓存，key为test_openid
            wx.request({//再次请求是为了获得该用户在后台中的信息，根据openid获得具体信息
              url: userUrl+'getInfo',
              data:{
                'openid':res1.data.openid
              },
              success:function(res2){
                console.log('res2',res2)
               wx.setStorageSync('userinfo', res2.data.data)
              },
              fail:function(){
                console.log('error and res11',res1)
              }
            })
            if(!res1.data.is_register){//如果没有注册过
              wx.showModal({//跳出模态弹窗
                title:'提示',
                content:'请先注册',
                confirmText:'确定',
                success:function(){
                  wx.navigateTo({//跳入授权页面
                    url: '/pages/register/userlogin',
                  })
                }
              })
            }
            else{
              // wx.navigateTo({//跳入授权页面
              //   url: '/pages/register/userlogin',
              // })
            }
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