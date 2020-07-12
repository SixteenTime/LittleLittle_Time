// pages/page2/page2.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:0,
    resultDatil:"unKnow"
  },

  resultAboult:function(){
    if(this.data.resul<=4){
      return "自律能力很差"
    }
    else if(this.data.result<=9&&this.data>=5){
      return "自律能力较差"
    }
    else if(this.data.result<=14){
      return "自律能力一般"
    }
    else {
     return "自律能力强"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      result:options.a-0,
      resultDatil:this.resultAboult()
    })
    console.log(this.resultAboult())
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