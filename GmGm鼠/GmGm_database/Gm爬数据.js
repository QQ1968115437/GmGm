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

// 单页获取
// **************************
let Gm={
    "yx_id":1,
    "Game_name":z.title,
    "Number_of_Installers":10970,
    "Number_of_concerned":51871,
    "is_test":0,
    "grade":1,
    "sm_img":z.src,
    "lg_img":[],
    "brief_introduction":"",
    "detailed_information":["1.71GB","1.9.17","2020年12月25日",0,0,"腾讯"],
    "label":[],
    "compatibility":[1,1,1,0],
    "manufacturer":""
};
Gm.yx_id=1;
Gm.Game_name=document.querySelectorAll(".show-main-header img").title;
Gm.Number_of_Installers=document.querySelectorAll(".description>span")[0].innerText;
Gm.Number_of_concerned=document.querySelectorAll(".description>span")[1].innerText;
Gm.is_test=document.querySelectorAll(".text-download-text>span")[0].innerText=="游戏性测试"||"不删档测试"?1:0;
Gm.grade=document.querySelectorAll(".app-rating-score")[0].innerText;
Gm.sm_img=document.querySelectorAll(".show-main-header img").src;

Gm.lg_img=document.querySelectorAll("");
Gm.brief_introduction=document.querySelectorAll("");
Gm.detailed_information=document.querySelectorAll("");
Gm.label=document.querySelectorAll("");
Gm.compatibility=document.querySelectorAll("");
Gm.manufacturer=document.querySelectorAll("");

console.log(Gm);
