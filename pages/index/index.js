//index.js

Page({
  data: {
    /*里面主要用于默认的数值*/
   num:"",
  },
  //事件处理函数

  onLoad: function () {
    console.log("hello word !!");
    this.getNow(); 
  },
  onPullDownRefresh: function () {
    console.log("refresh execute1d!");
    this.getNow();


  },
  getNow(){
      wx.request({

        url: 'https://test-miniprogram.com/api/news/list',
        data: 
            {
          type: 'gj' //新闻类型，值为gn、gj、cj、yl、js、ty和other其中之一
            },
        header: 
            {
          'content-type': 'application/json' // 默认值,

            },

        success: res => {
          //获得相应的信息进行查询操作
          let result = res.data.result;
          console.log(res.data);
          console.log(res.data.code);
          let lenth1 = result.length;
          console.log(res.data.result.length);

          //在wx.request获得的结果通过this.setData函数进行配置相应的参数操作。
          this.setData({
            //  num：res.data.code,
            num: lenth1
          }) 
        },            
      })
     

     


  },

  
  

})
