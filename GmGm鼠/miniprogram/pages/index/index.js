// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        top_nav:1,
        Top_Carousel:[// 顶部轮播数据
            {bg_src:"https://img.tapimg.com/market/images/2757bd82ee5fd01da9d4da2814339d93.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",text:"版本更新"},
            {bg_src:"https://img.tapimg.com/market/images/c980dffe0cea5d759349a7ad4fadcf39.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",text:"版本更新"},
            {bg_src:"https://img.tapimg.com/market/images/8dba754c80e5d5828059591571d97a4e.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",text:"版本更新"},
            {bg_src:"https://img.tapimg.com/market/images/e19bab4d0a6f42eb7cbda7015de080bb.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",text:"版本更新"},
            {bg_src:"https://img.tapimg.com/market/images/e25f9cb48a2b591cb079abc354a0e857.png?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",text:"版本更新"}
        ], 
        Amway_wall:[// 安利墙数据
            {to:"",src:"https://upload-images.jianshu.io/upload_images/4872563-77d88d91276d180e?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"},
            {to:"",src:"https://upload-images.jianshu.io/upload_images/23488806-68c495f951d38f67.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"},
            {to:"",src:"https://upload-images.jianshu.io/upload_images/19533664-643b39a85894d5f1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"},
            {to:"",src:"https://upload-images.jianshu.io/upload_images/2259045-8a83b45fd5d46086?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"},
            {to:"",src:"https://upload-images.jianshu.io/upload_images/19533664-643b39a85894d5f1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"},
            {to:"",src:"https://upload-images.jianshu.io/upload_images/11427072-fbbe59e8811f3c3f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"},
            {to:"",src:"https://upload-images.jianshu.io/upload_images/11606025-4fee4d496f45928e.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"},
            {to:"",src:"https://upload-images.jianshu.io/upload_images/23488806-8ebae730d29122c4.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"}
        ],
    },
    Top_nav_actv(){
        let a=this.data.top_nav;
        a==1?this.setData({top_nav:0}):this.setData({top_nav:1});
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