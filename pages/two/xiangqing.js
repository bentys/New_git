// pages/two/xiangqing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    readCount:"",
    date:'',
    source:'',
    text:[]
  
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
      
        let result_da= res.data.result
        let source = result_da.source

        console.log(result_da);

        this.setData({
          readCount: ' 阅读 ' + result_da.readCount,
          title: result_da.title,
          date: new Date(result_da.date).getHours() + ":" + new Date    (result_da.date).getMinutes(),
          source: "默认",
          text: result_da.content[0].text

          
        })
        //新闻来源默认值
         
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