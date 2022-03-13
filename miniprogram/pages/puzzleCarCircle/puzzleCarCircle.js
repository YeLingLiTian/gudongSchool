// pages/puzzleCarCircle/puzzleCarCircle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'chose':1,
    "passages": [{
      'from':'中北大学一道门',
      'to':'柳巷',
      'content': '去柳巷还有两个位置 有需求DD',
      'time': '2021-12-12 20:25',
      'number':4,
      'class':'车找人',
    }, {
      'from':'中北大学五道门',
      'to':'万达',
      'content': '20一位 多付返现',
      'time': '2021-12-13 17:25',
      'number':2,
      'class':'车找人'
    }, {
      'from':'一点五道门',
      'to':'太原站',
      'content': '无备注',
      'time': '2021-12-12 20:25',
      'number':0,
      'class':'人找车'
    }, ]

  },
callNumber:function(e){
  var id = e.currentTarget.dataset.num
  var number
  console.log(id)
  if(id==1){
    number=11111111
  }
  else if(id==2){
    number=222222222
  }
  else if(id==2){
    number:33333333
  }
  wx.makePhoneCall({
    phoneNumber:String(number)
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.chose=options.chose
    if(this.data.chose==1){
      this.setData({
        "passages": [
          {
            'from':'新建路西',
            'to':'太原市政府',
            'content': '123',
            'time': '2021-12-26 00:00',
            'number':3,
            'class':'车找人',
          },{
          'from':'中北大学一道门',
          'to':'柳巷',
          'content': '去柳巷还有两个位置 有需求DD',
          'time': '2021-12-12 20:25',
          'number':4,
          'class':'车找人',
        }, {
          'from':'中北大学五道门',
          'to':'万达',
          'content': '20一位 多付返现',
          'time': '2021-12-13 17:25',
          'number':2,
          'class':'车找人'
        }, {
          'from':'一点五道门',
          'to':'太原站',
          'content': '无备注',
          'time': '2021-12-12 20:25',
          'number':0,
          'class':'人找车'
        }, ]
      }) 
  }
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
  goToPublishMsg:function(){
    wx.navigateTo({
      url: '../pubMsgOfDriver/pubMsgOfDriver',
    })
  },
  goTopubMsgOfDriver:function(){
    wx.navigateTo({
      url: '../publishMsg/publishMsg',
    })
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