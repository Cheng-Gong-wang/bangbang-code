Page({

  data:{
    
    sortList:[],
  },

    /**
     * 页面的初始数据
     */
  

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.request({
            url: "https://www.wumeili.top/w/website/bannerList",
            method: "GET",
            data: {},
            success: res=>{
                console.log(res);
                this.setData({datalist:res.data.data})
            }
        })
        const ctx = wx.createCanvasContext('Canvas');
        ctx.beginPath()
        ctx.arc(210, 100, 50, 0, 2 * Math.PI)
        ctx.setStrokeStyle('#000')
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(190, 80, 10, 0, 2 * Math.PI)
        ctx.setStrokeStyle('#000')
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(230, 80, 10, 0, 2 * Math.PI)
        ctx.setStrokeStyle('#000')
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(210, 100, 35, 0, 1 * Math.PI)
        ctx.setStrokeStyle('#000')
        ctx.stroke()

        ctx.setStrokeStyle('#000')
        ctx.strokeRect(150, 40, 120, 120)
        ctx.draw()


        wx.request({
          url: "https://www.wumeili.top/w/website/findGoodsTypeList",
          method: "GET",
          success: res=> {
            console.log(res);
            this.setData({
              sortList:res.data.data
            })

          }
        })
        
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