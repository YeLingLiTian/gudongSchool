Page({
  data: {
    userName: '',
    userPwd:""
  },

  onLoad: function () {
    
  },
  userNameInput:function(e)
  {
    this.setData({
      userName: e.detail.value
    })
  },
  passWdInput:function(e)
  {
    this.setData({
      userPwd: e.detail.value
    })},

login:function(e){
  if(this.data.userName=='admin'&&this.data.userPwd=='123456'){
    wx.navigateTo({
      url: '../puzzleCarCircle/puzzleCarCircle',
    })
    wx.showToast({
      title: '成功',    //显示的标题
      icon: 'success',  //显示的图标
      duration: 2000    //显示的时间2s
    })
  }
},
  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      //授权成功后,跳转页面
      wx.switchTab({
        url: '/pages/publishMsg/publishMsg',    //这里填入要跳转目的页面的url
        success: (result) => {
          console.log("跳转到首页");
        },
        fail: () => {}
      });
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您拒绝了授权，将无法进入小程序，请授权之后再进入!',
        showCancel: false,
        confirmText: '返回',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回”');
          }
        }
      });
    }
  }
})