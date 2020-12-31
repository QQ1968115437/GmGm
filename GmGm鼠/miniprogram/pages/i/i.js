// pages/i/i.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isRegister:0,account_number:0,password:0,again_password:0,isPrompt:1,After_login:0,
        if_password:"",if_account_number:"",account_number_s:"",password_s:""
    },
    // *******************************
    // 输入框状态颜色有待优化封装
    // 框状态颜色
    clear(a,b){
        a==1&&b==0?this.setData({account_number:0}):a==1&&b==1?this.setData({account_number:1}):a==1?this.setData({account_number:2}):'';
        a==2&&b==0?this.setData({password:0}):a==2&&b==1?this.setData({password:1}):a==2?this.setData({password:2}):'';
        a==3&&b==0?this.setData({again_password:0}):a==3&&b==1?this.setData({again_password:1}):a==3?this.setData({again_password:2}):'';
    },
    // 输入框为空时蓝色
    click_Register(){
        if(this.data.isRegister==0){
            this.setData({isRegister:1,isPrompt:1});
            this.clear(1,0);
            this.clear(2,0);
            setTimeout(()=>{this.setData({isPrompt:0})},5000);
        }else {
            this.setData({isRegister:0});
            this.clear(1,0);
            this.clear(2,0);
            this.clear(3,0);
        }
    },
    // 账号框状态颜色
    account_number(e){
        if(e.detail.value==""){
            this.clear(1,0);
        }else{
            let user=/^[A-Za-z0-9]{3,}$/;
            user=user.test(e.detail.value);
            if(user){this.clear(1,1);this.setData({if_account_number:e.detail.value})
            }else{this.clear(1,2)};
        };
    },
    // 密码框状态颜色
    password(e){
        if(e.detail.value==""){
            this.clear(2,0);
        }else{
            let password=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
            password=password.test(e.detail.value);
            if(password){this.clear(2,1);this.setData({if_password:e.detail.value})
            }else{this.clear(2,2)};
        };
    },
    // 确认密码框状态颜色
    again_password(e){
        if(e.detail.value==""){
            this.clear(3,0);
        }else{
            if(e.detail.value==this.data.if_password){this.clear(3,1);}else{this.clear(3,2)};
        };
    },
    // *******************************
    // 立即注册
    register(){
        let a=this.data.isRegister!=0,b=this.data.account_number==1,c=this.data.password==1,d=this.data.again_password==1;
        if(a&&b&&c&&d){
            const db = wx.cloud.database();
            db.collection('users').where({
                Uaccount_number:this.data.if_account_number
            }).get({
                success: (res)=>{
                    if(res.data.length==0){
                        wx.showToast({title:"注册成功",icon: "none",duration: 1800});
                        this.setData({
                            isRegister:0,
                            account_number_s:this.data.if_account_number,
                            password_s:this.data.if_password
                        });
                    }else{wx.showToast({title:"已被注册,换个账号试试！",icon: "none",duration: 2000})}
                }
            })
        }else{
            wx.showToast({title:"请填写完整的账号信息",icon: "none",duration: 2000})
        }
    },
    // 立即登录
    log_on(){
        let a=this.data.isRegister==0,b=this.data.account_number==1,c=this.data.password==1;
        let m=this.data.account_number_s!="",n=this.data.password_s!="";
        if((a&&b&&c)||(m&&n)){
            const db = wx.cloud.database();
            db.collection('users').where({
                Uaccount_number:this.data.if_account_number,
                Upasswored:this.data.if_password
            }).get({
                success (res) {
                    if(res.data.length==0){
                        wx.showToast({title:"请确认账号或密码是否正确！",icon: "none",duration: 2000})
                    }else{
                        wx.showToast({title:"登陆成功",icon: "none",duration: 2000});
                    }
                }
            })
        }else{
            this.setData({After_login:1});
            wx.showToast({title:"请填写完整的账号信息",icon: "none",duration: 2000})
        }
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