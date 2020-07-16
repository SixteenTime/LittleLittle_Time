// pages/register/register.js
const app=getApp()
const userUrl=require('../../config.js').userUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    userTel:'',
    userSch:'',
    userSNo:'',
    userEYear:''
  },

  changeName:function(e){
    this.setData({
      userName:e.detail.value
    })
  },
  changeTel:function(e){
    this.setData({
      userTel:e.detail.value
    })
  },
  changeSch:function(e){
    this.setData({
      userSch:e.detail.value
    })
  },
  changeSNo:function(e){
    this.setData({
      userSNo:e.detail.value
    })
  },
  changeEYear:function(e){
    this.setData({
      userEYear:e.detail.value
    })
  },
  tabSubmit:function(){
    if(!this.data.userName){
      wx.showToast({
        title: '姓名不能为空',
        icon:"none"
      })
      return
    }
    else if(!this.data.userTel){
      wx.showToast({
        title: '手机号不能为空',
        icon:"none"
      })
      return
    }
    else if(!this.data.userSch){
      wx.showToast({
        title: '学校不能为空',
        icon:"none"
      })
      return
    }
    else if(!this.data.userSNo){
      wx.showToast({
        title: '学号不能为空',
        icon:"none"
      })
      return
    }
    else if(!this.data.userEYear){
      wx.showToast({
        title: '入学年份不能为空',
        icon:"none"
      })
      return
    }
    wx.request({
      url: userUrl+'register_by_openid',
      data:{
        openid:wx.getStorageSync('test_openid'),
        globalData:JSON.stringify(app.globalData.userInfo),
        name:this.data.userName,
        tel:this.data.userTel,
        school:this.data.userSch,
        num:this.data.userSNo,
        enter_year:this.data.userEYear
      },
      success:function(res){
        console.log('ree',res)
        if(res.data.is_register){
          wx.switchTab({
            url: '../index/index',
          })
        }
        else{
          wx.switchTab({
            url: '../index/index',
          })
        }
      },
      fail:function(){
        console.log('error !!')
        wx.switchTab({
          url: '../index/index',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})