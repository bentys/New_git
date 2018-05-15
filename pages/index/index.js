// pages/index/index.js
/**
   * 添加相应的字典,类别对应的首页分类显示
   */
const weatherColorMap = {
  'gn': '国内',
  'gj': '国际',
  'cj': '财经',
  'yl': '娱乐',
  'js': '军事',
  'ty': '体育',
  'other':'其他'
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    fl_list: ['gn','gj','cj','yl','js','ty','other'],
    fl_leibian:[1,2,3,4,5,6,7],
    fl: ['国内',
      '国际',
      '财经',
      '娱乐',
      '军事',
      '体育',
      '其他']
  },

  /**
   * 获取相应的接口的数据内容，除了首页内容
   * 
   */
  getNOWList(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data:{
        type:'gn',

      },
      header:{
        'content-type': 'application/json' // 默认值
      },
      success:  (res)=> {
        console.log(res.data)
      }

    })


  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNOWList()
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
    wx.getBackgroundAudioManager()
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