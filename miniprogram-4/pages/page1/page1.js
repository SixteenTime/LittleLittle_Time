// pages/page1/page1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     index:0,
     questionHead:app.globalData.questions[0],
     ye:"是",
     no:"否",
     a:0

     //questionHead:app.globalData.que
  },

  chickYes:function(){
    
    this.setData({
      index:this.data.index+1,
      questionHead:app.globalData.questions[this.data.index],
      a:this.data.a+1,
      //flagList:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }
    );
    if(this.data.index==19){
      Document.ElementById("submit").style.display="block";
    }
    if(this.data.index>=20){
      wx.navigateTo({
        url: '../page2/page2?a='+this.data.a,
      })
    }
  },
  setList:function(){
    var newList=new List[20];
    newList[index]=1;
    this.setData({
      flagList:newList,
    })
  },
  chickNo:function(){
    this.setData({
      index:this.data.index+1,
      questionHead:app.globalData.questions[this.data.index],
    }
    );
    if(this.data.index>=19){
      wx.navigateTo({
        url: '../page2/page2?a='+this.data.a,
      })
    }
  },
  chickLastnum:function(){
    //wx.navigateBack;
    this.setData({
      index:this.data.index-1,
      questionHead:this.data.questions[this.data.index]
    });
    if(flagList[this.data.index]==1){
      this.setData({
        a:this.data.a-1,
      })
    }
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