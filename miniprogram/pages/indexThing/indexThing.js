// index.js
// 获取应用实例
const app = getApp()


var header=wx.createSelectorQuery(header);

Page({
  data: {
    
    lose:"",
    pick:'',
    losecolor:'',
    pickcolor:''
  },
  
  onLoad(){
    this.onpick()
  },


  onpick:function(){
    this.setData({
      pick:'block',
      lose:'none',
      losecolor:'',
      pickcolor:'#0ccb82'
    })
  },


  onlose:function(){
    this.setData({
      pick:'none',
      lose:'block',
      losecolor:'#0ccb82',
      pickcolor:''
    })
  },

  onli:function(){
    wx.navigateTo({
      url: '../detailThing/detailThing',
    })
  },


  onjiahao:function(){
   
    wx.navigateTo({
      url: '../raiseThing/raiseThing',
    })
   
  },

  

  
  
  
  
})

