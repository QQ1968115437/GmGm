// [i]打开类型
let XXX=[];
document.querySelectorAll(".taptap-app-card>a").forEach(function(z,i){XXX.push(z.href)});
let D=setInterval(()=>{
    if(document.querySelectorAll(".taptap-app-card>a").length<=2000 && document.querySelectorAll(".taptap-button-more.load-more button").length!=0){
        document.querySelectorAll(".taptap-button-more.load-more button")[0].click();
    }else{clearInterval(D)};
},100);

setTimeout(()=>{document.querySelectorAll(".taptap-app-card>a")[0].click()},1000);
setTimeout(()=>{window.history.back(1)},8000);



// 单页获取
// **************************

let Gm={
    "yx_id":1,// <!-- 01 游戏id -->
    "Main_type":"单机",// <!-- 02 游戏主类型 -->

    "Game_name":"",// <!-- 03 游戏名称 -->
    "Number_of_Installers":0,// <!-- 04 安装人数 -->
    "Number_of_concerned":0,// <!-- 05 关注人数 -->
    "is_test":0,// <!-- 06 是否测试 -->
    "grade":0,// <!-- 07 评分 -->
    "sm_img":"",// <!-- 08 小图片 -->
    "lg_img":[],// <!-- 09 宣传大图 -->
    "brief_introduction":"",// <!-- 10 简介 -->
    "detailed_information":[],// <!-- 11 详细信息 -->
    "label":[],// <!-- 12 标签 -->
    "compatibility":[],// <!-- 13 兼容性_图 -->
    "manufacturer":[],// <!-- 14 厂商 -->
    "special":""// <!-- 15 所属相关专题 -->
};
document.querySelectorAll("#imageShots").length!=0?setInterval(function () {document.querySelectorAll("#imageShots")[0].scrollLeft=document.querySelectorAll("#imageShots")[0].scrollLeft+20},1):'';
document.querySelectorAll("#videoShots").length!=0?setInterval(function () {document.querySelectorAll("#videoShots")[0].scrollLeft=document.querySelectorAll("#videoShots")[0].scrollLeft+20},1):'';


Gm.Game_name=document.querySelectorAll(".show-main-header img")[0].title;
Gm.Number_of_Installers=document.querySelectorAll(".description>span")[0].innerText;
document.querySelectorAll(".description>span").length==2?Gm.Number_of_concerned=document.querySelectorAll(".description>span")[0].innerText:"";
document.querySelectorAll(".text-download-text .text-hints").length!=0?Gm.is_test=document.querySelectorAll(".text-download-text .text-hints")[0].innerText:0;
Gm.grade=document.querySelectorAll(".app-rating-score")[0].innerText;
Gm.sm_img=document.querySelectorAll(".show-main-header img")[0].src;
document.querySelectorAll(".main-body-common.main-body-images img").forEach(function(z,i){Gm.lg_img[i]=z.src});
Gm.brief_introduction=document.querySelectorAll("#description")[0].innerText;
document.querySelectorAll(".list-unstyled.body-info-list>li>.info-item-title").forEach(function(z){let a={title:"",content:""};a.title=z.innerText;Gm.detailed_information.push(a)});
document.querySelectorAll(".list-unstyled.body-info-list>li>.info-item-content").forEach(function(z,i){Gm.detailed_information[i].content=z.innerText});
document.querySelectorAll("#appTag>li>a").forEach(function(z,i){Gm.label[i]=z.innerText});
document.querySelectorAll(".main-body-common.list-unstyled.main-body-additional>li>span").forEach(function(z,i){Gm.compatibility[i]=z.innerText});
document.querySelectorAll(".header-text-author>a").forEach(function(z,i){Gm.manufacturer[i]=z.innerText});
document.querySelectorAll(".show-side-event h3").length!=0?Gm.special=document.querySelectorAll(".show-side-event h3")[0].innerText:"";


console.log(Gm);