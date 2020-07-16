// pages/my/change.js
const userUrl=require('../../config.js').userUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeholder:'',
    value:'',
    userinfo: wx.getStorageSync('userinfo'),
    infoArray:{
      name:'姓名',
      tel:'手机号',
      school:'学校',
      num:'学号',
      enter_year:'入学年份'
    },
    tmp:'',
    changeWhat:''

  },

  valuechange:function(res){
    this.setData({
      tmp:res.detail.value
    })

  },

  submit:function(){
    if(this.data.tmp ==''){
      wx.showToast({
        title: this.data.infoArray[this.data.changeWhat]+'不能为空',
        icon: 'none'
      })
      return
    }
    if(this.data.tmp == this.data.userinfo[this.data.changeWhat]){
      wx.navigateBack()
    }else{
    wx.request({
      url:userUrl+'updateInfo' ,
      data:{
        openid:wx.getStorageSync('test_openid'),
        change:this.data.changeWhat,
        value:this.data.tmp
      },
      success: res =>{
        console.log('ok?')
        if(res.data.success){
          this.data.userinfo[this.data.changeWhat] = this.data.tmp,
          wx.setStorageSync('userinfo', this.data.userinfo),
          wx.navigateBack()
        }else{
          wx.showToast({
            title: '修改失败',
            icon:'none'
          })
          wx.navigateBack()
        }
      }
    })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.changewhat)
    this.data.userinfo = wx.getStorageSync('userinfo'),
    console.log(options)
    this.setData({
      placeholder:'请输入'+ this.data.infoArray[options.changewhat],
      value: this.data.userinfo[options.changewhat],
      changeWhat:options.changewhat
    })
    console.log('this.data.changewhat',this.data.changeWhat)
    wx.setNavigationBarTitle({
      title: '修改' + this.data.infoArray[options.changewhat],
    })
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