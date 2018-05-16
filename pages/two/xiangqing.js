// pages/two/xiangqing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 
   * 提交一个公用的函数用于获取详情
   */
  getDetails(callback) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        id: '1523074607642',

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data)
      }

    })


  },
  godetails:function gochenge(){


  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetails();
    
  
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