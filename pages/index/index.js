const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [
      { date: '2019-02-18 星期一', name: '红烧狮子球、油闷茄子' },
      { date: '2019-02-18 星期二', name: '红烧狮子球、油闷茄子' },
      { date: '2019-02-18 星期三', name: '红烧狮子球、油闷茄子' },
      { date: '2019-02-18 星期四', name: '红烧狮子球、油闷茄子、韭菜虾米、鱼香肉丝' },
      { date: '2019-02-18 星期五', name: '红烧狮子球、油闷茄子' },
      { date: '2019-02-18 星期五', name: '红烧狮子球、油闷茄子' },
      { date: '2019-02-18 星期五', name: '红烧狮子球、油闷茄子' },
      { date: '2019-02-18 星期五', name: '红烧狮子球、油闷茄子' },
      { date: '2019-02-18 星期五', name: '红烧狮子球、油闷茄子' },
      { date: '2019-02-18 星期五', name: '红烧狮子球、油闷茄子' },
    ],
    menu_height: 0,
    showQr:false,
    showOrder:false,
    number:1,
    price:12
  },
  orderHandle: function () {
    this.setData({
      showOrder: true
    })
  },
  qrHandle: function () {
    this.setData({
      showQr: true
    })
  },
  colseModal:function(){
    this.setData({
      showQr: false,
      showOrder: false
    })
  },
  onChange:function(e){
    this.setData({
      number: e.detail,
      price:12*e.detail
    });
  },
  // 禁止屏幕滚动
  preventTouchMove: function () {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          menu_height: res.windowHeight * 750 / res.windowWidth - 420
        });
      }
    });
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