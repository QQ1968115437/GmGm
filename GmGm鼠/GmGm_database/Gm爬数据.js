// ***********************************************
// 单页获取
// 01 游戏id,02 游戏名称,03 安装人数,04 关注人数,05 是否测试,06 评分,07 小图片,08 宣传大图,09 简介,10 详细信息,11 标签,12 兼容性,13 厂商,14 所属相关专题,15 用户评价
// **************************
let Gm={"yx_id":1,"Game_name":"","Number_of_Installers":0,"Number_of_concerned":0,"is_test":0,"grade":0,"sm_img":"","lg_img":[],"brief_introduction":"","detailed_information":[],"label":[],"compatibility":[],"manufacturer":[],"special":"","evaluate":[]};
document.querySelectorAll("#imageShots").length!=0?setInterval(function () {document.querySelectorAll("#imageShots")[0].scrollLeft=document.querySelectorAll("#imageShots")[0].scrollLeft+20},1):'';
document.querySelectorAll("#videoShots").length!=0?setInterval(function () {document.querySelectorAll("#videoShots")[0].scrollLeft=document.querySelectorAll("#videoShots")[0].scrollLeft+20},1):'';
Gm.yx_id=Number(document.querySelectorAll(".show-main-header img")[0].baseURI.slice(27,));
Gm.Game_name=document.querySelectorAll(".show-main-header img")[0].title;
Gm.Number_of_Installers=document.querySelectorAll(".description>span")[0].innerText;
document.querySelectorAll(".description>span").length==2?Gm.Number_of_concerned=document.querySelectorAll(".description>span")[0].innerText:"";
document.querySelectorAll(".text-download-text .text-hints").length!=0?Gm.is_test=document.querySelectorAll(".text-download-text .text-hints")[0].innerText:0;
Gm.grade=document.querySelectorAll(".app-rating-score")[0].innerText;
Gm.sm_img=document.querySelectorAll(".show-main-header img")[0].src;
document.querySelectorAll(".main-body-common.main-body-images img").forEach(function(z,i){Gm.lg_img[i]=z.src});
document.querySelectorAll("#description").length!=0?Gm.brief_introduction=document.querySelectorAll("#description")[0].innerText:"";
document.querySelectorAll(".list-unstyled.body-info-list>li>.info-item-title").forEach(function(z){let a={title:"",content:""};a.title=z.innerText;Gm.detailed_information.push(a)});
document.querySelectorAll(".list-unstyled.body-info-list>li>.info-item-content").forEach(function(z,i){Gm.detailed_information[i].content=z.innerText});
document.querySelectorAll("#appTag>li>a").forEach(function(z,i){Gm.label[i]=z.innerText});
document.querySelectorAll(".main-body-common.list-unstyled.main-body-additional>li>span").forEach(function(z,i){Gm.compatibility[i]=z.innerText});
document.querySelectorAll(".header-text-author>a").forEach(function(z,i){Gm.manufacturer[i]=z.innerText});
document.querySelectorAll(".show-side-event h3").length!=0?Gm.special=document.querySelectorAll(".show-side-event h3")[0].innerText:"";
document.querySelectorAll("#review-label-list a").forEach(function(z,i){Gm.evaluate[i]=z.innerText});
console.log(Gm);
// ***************************
// ************************************************

// 多获取
// *********
let Gm=[];
let sm_img=document.querySelectorAll(".card-left-image>img");
let brief_introduction=document.querySelectorAll(".card-middle-description");
let label=document.querySelectorAll(".card-middle-description+.card-tags");
let label2=document.querySelectorAll(".card-middle-description+.card-tags+.card-middle-category>a");
let grade=document.querySelectorAll(".middle-footer-rating>span");
let manufacturer=document.querySelectorAll(".card-middle-author>a");
let lg_img=document.querySelectorAll(".top-card-right");

function label0(a,m,i){
    m.label[a]=label[i].children[a].innerText;
};
sm_img.forEach(function(z,i){
    let A={
        "yx_id":i+151,// Pa
        "Game_name":z.title,// Pa
        "Number_of_Installers":10970,
        "Number_of_concerned":51871,
        "is_test":0,
        "grade":1,// Pa
        "sm_img":z.src,// Pa
        "lg_img":[],
        "brief_introduction":"",// Pa
        "detailed_information":["1.71GB","1.9.17","2020年12月25日",0,0,"腾讯"],
        "label":[],// Pa
        "compatibility":[1,1,1,0],
        "manufacturer":""// Pa
    };
    Gm.push(A);
})
Gm.forEach(function(m,i){
    m.brief_introduction=brief_introduction[i].innerText;
    if(label[i].children.length==1){
        label0(0,m,i);
    }else if(label[i].children.length==2){
        label0(0,m,i);label0(1,m,i)
    }else{
        label0(0,m,i);label0(1,m,i);label0(2,m,i);
    }
    m.label[3]=label2[i].innerText;

    m.grade=grade[i].innerText;

    m.manufacturer=manufacturer[i].innerText;

    if(lg_img[i].querySelectorAll("img").length==1){
        m.lg_img[0]=lg_img[i].querySelectorAll("img")[0].src;
    }else if(lg_img[i].querySelectorAll("img").length==3){
        m.lg_img[0]=lg_img[i].querySelectorAll("img")[0].src;
        m.lg_img[1]=lg_img[i].querySelectorAll("img")[1].src;
        m.lg_img[2]=lg_img[i].querySelectorAll("img")[2].src;
    };
})
console.log(Gm);