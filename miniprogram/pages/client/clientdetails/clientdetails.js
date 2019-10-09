// pages/client/clientdetails/clientdetails.js
Page({
    data: {
        tabs: 0,
        // 上拉加载
        loading: false,
        loadingTest: false,
        //json
        json: ["1"],
        //layer
        layer: false
    },
    onLoad: function (options) {

    },
    onReady: function () {

    },
    onShow: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    },
    tabs: function(e){
        this.setData({
            tabs: e.currentTarget.dataset.index
        })
    },
    openLayer: function(){
        this.setData({
            layer: true
        })
    },
    closeLayer: function(){
        this.setData({
            layer: false
        })
    }
})