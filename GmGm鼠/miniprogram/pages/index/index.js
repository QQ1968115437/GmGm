// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        top_nav:0,Total_height:0,
        Top_Carousel:[// 顶部轮播-数据
            {text0:"版本更新",bg_img:"https://img.tapimg.com/market/images/2757bd82ee5fd01da9d4da2814339d93.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/lcs/8a063c4cfcc81a1ac1bb977bfa5fe2d4_360.png?imageMogr2/auto-orient/strip",text1:"使命召唤手游",text2:"迎接使命，纵横战场，《使命召唤手游》12月25日正式上线！点击详情页下载按钮安装，即可登录体验游戏",people:2020,score:8.7},
            {text0:"编辑推荐",bg_img:"https://img.tapimg.com/market/images/2917bbd8fd5c472e6c37e795d8e83678.png?imageView2/2/h/560/w/9999/q/80/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/lcs/ec3eb782198d4426da347854d65f0c7a_360.png?imageMogr2/auto-orient/strip",text1:"Phigros",text2:"Pigeon Games是由初创通过bilibili视频网站发起的、由众多节奏类游戏爱好者组成的完全用爱发电的项目组。我们希望Phigros新颖的游戏模式和精心制作的插画与关卡可以让你感受到节奏类游戏的魅力。",people:2020,score:8.7},
            {text0:"编辑推荐",bg_img:"https://img.tapimg.com/market/images/647bed4c76aae4b14b2a7c00c04a2a9d.jpg?imageView2/2/h/560/w/9999/q/80/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/icons/737c4b4599ee3339f5a2a4a2db78e2dc_360.png?imageMogr2/auto-orient/strip",text1:"剑与远征",text2:"冬天到了，快来游戏内看看领地和野外的新场景吧！异界旅店更新了冬季氛围，游戏的登录图也将焕然一新",people:2020,score:8.7},
            {text0:"编辑推荐",bg_img:"https://img.tapimg.com/market/images/e19bab4d0a6f42eb7cbda7015de080bb.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/lcs/6af3b5eba06fd3256d9b19475f40880e_360.png?imageMogr2/auto-orient/strip",text1:"原神",text2:"在七种元素交汇的大陆——「提瓦特」，每个人都可以成为神。",people:2020,score:8.7},
            {text0:"版本更新",bg_img:"https://img.tapimg.com/market/images/e25f9cb48a2b591cb079abc354a0e857.png?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/icons/1b4226edba3b2341a28ce4aa0090878d_360.png?imageMogr2/auto-orient/strip",text1:"妙连千军",text2:"八大地图，共同构成了独特“套鹿”风格的蠢萌逗比故事线",people:2020,score:8.7}
        ], 
        From_special:[// 来自专题-数据
            {to:"",img:"https://img.tapimg.com/market/images/cf284d4f8d519a51eb2ab1e8d595309e.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1",text:"一月新游预告"},
            {to:"",img:"https://img.tapimg.com/market/images/bb511a6bb4510fd3ebec5c7033dd61f3.jpg?imageView2/1/w/2080/h/800/q/80/format/jpg/interlace/1/ignore-error/1",text:"冬日礼"},
            {to:"",img:"https://img.tapimg.com/market/images/27b9e78943aec38bee2223a99ab7c099.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1",text:"多人联机 趣味无穷"},
            {to:"",img:"https://img.tapimg.com/market/images/20bde539ff96526d9660ed767510b999.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1",text:"开启种田生涯"},
            {to:"",img:"https://img.tapimg.com/market/images/9fb5aa1198341f80104a53d365cc2956.png?imageView2/1/w/1024/h/500/q/50/format/jpg/interlace/1/ignore-error/1",text:"高分游戏 往期推荐"}
        ], 
        Edition_update:[// 版本更新-数据
            {to:"",img:"https://img.tapimg.com/market/images/cf284d4f8d519a51eb2ab1e8d595309e.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/lcs/c1fb0828493e1c5ba43045bd91122f4c_360.png?imageMogr2/auto-orient/strip",text1:"一月新游预告",text2:"在2020年即将结束之际，奇葩战斗家带着新版本来啦gsgdgdf",people:2020,score:8.7},
            {to:"",img:"https://img.tapimg.com/market/images/bb511a6bb4510fd3ebec5c7033dd61f3.jpg?imageView2/1/w/2080/h/800/q/80/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/lcs/c1fb0828493e1c5ba43045bd91122f4c_360.png?imageMogr2/auto-orient/strip",text1:"冬日礼",text2:"在2020年即将结束之际，奇葩战斗家带着新版本来啦gsgdgdf",people:2020,score:8.7},
            {to:"",img:"https://img.tapimg.com/market/images/27b9e78943aec38bee2223a99ab7c099.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/lcs/c1fb0828493e1c5ba43045bd91122f4c_360.png?imageMogr2/auto-orient/strip",text1:"多人联机 趣味无穷",text2:"在2020年即将结束之际，奇葩战斗家带着新版本来啦gsgdgdf",people:2020,score:8.7},
            {to:"",img:"https://img.tapimg.com/market/images/20bde539ff96526d9660ed767510b999.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/lcs/c1fb0828493e1c5ba43045bd91122f4c_360.png?imageMogr2/auto-orient/strip",text1:"开启种田生涯",text2:"在2020年即将结束之际，奇葩战斗家带着新版本来啦gsgdgdf",people:2020,score:8.7},
            {to:"",img:"https://img.tapimg.com/market/images/9fb5aa1198341f80104a53d365cc2956.png?imageView2/1/w/1024/h/500/q/50/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/lcs/c1fb0828493e1c5ba43045bd91122f4c_360.png?imageMogr2/auto-orient/strip",text1:"高分游戏 往期推荐",text2:"在2020年即将结束之际，奇葩战斗家带着新版本来啦gsgdgdf",people:2020,score:8.7},
            {to:"",img:"https://img.tapimg.com/market/images/70bede794360a6f136407a88eca59bb7.jpg?imageView2/2/h/560/w/9999/q/80/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/icons/2cd9a5e5f9a8efc73b0018e456546d69_360.png?imageMogr2/auto-orient/strip",text1:"闪烁之光",text2:"闪妹带着嘉年华版本情报来啦！瓜分10亿钻石，无限十连抽重置，首位双形态英雄，圣诞限定皮肤，团队合作玩法……欧气轰炸，圣诞跨年福利送你送你~",people:2020,score:8.7}
        ], 
        Edit_recommend:[// 编辑推荐-数据
            {to:"",img:"https://img.tapimg.com/market/images/cf284d4f8d519a51eb2ab1e8d595309e.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/lcs/4365a2d3ace3f0c7a6b599915cfa3167_360.png?imageMogr2/auto-orient/strip",text1:"一月新游预告",text2:"在2020年即将结束之际，奇葩战斗家带着新版本来啦gsgdgdf",people:2020,score:8.7},
            {to:"",img:"https://img.tapimg.com/market/images/bb511a6bb4510fd3ebec5c7033dd61f3.jpg?imageView2/1/w/2080/h/800/q/80/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/lcs/4365a2d3ace3f0c7a6b599915cfa3167_360.png?imageMogr2/auto-orient/strip",text1:"冬日礼",text2:"在2020年即将结束之际，奇葩战斗家带着新版本来啦gsgdgdf",people:2020,score:8.7},
            {to:"",img:"https://img.tapimg.com/market/images/27b9e78943aec38bee2223a99ab7c099.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/lcs/4365a2d3ace3f0c7a6b599915cfa3167_360.png?imageMogr2/auto-orient/strip",text1:"多人联机 趣味无穷",text2:"在2020年即将结束之际，奇葩战斗家带着新版本来啦gsgdgdf",people:2020,score:8.7},
            {to:"",img:"https://img.tapimg.com/market/images/20bde539ff96526d9660ed767510b999.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/lcs/4365a2d3ace3f0c7a6b599915cfa3167_360.png?imageMogr2/auto-orient/strip",text1:"开启种田生涯",text2:"在2020年即将结束之际，奇葩战斗家带着新版本来啦gsgdgdf",people:2020,score:8.7},
            {to:"",img:"https://img.tapimg.com/market/images/9fb5aa1198341f80104a53d365cc2956.png?imageView2/1/w/1024/h/500/q/50/format/jpg/interlace/1/ignore-error/1",imgsm:"https://img.tapimg.com/market/lcs/4365a2d3ace3f0c7a6b599915cfa3167_360.png?imageMogr2/auto-orient/strip",text1:"高分游戏 往期推荐",text2:"在2020年即将结束之际，奇葩战斗家带着新版本来啦gsgdgdf",people:2020,score:8.7}
        ], 
        Amway_wall:[// 安利墙-数据
            {to:"",img:"https://img.tapimg.com/market/lcs/0b0a9604ecf635a5afd38e0c7982218f_360.png?imageMogr2/auto-orient/strip",gm_name:"阿瑞斯病毒",comment:"超喜欢俯视，探索，生存游戏。玩法新颖，故事情节很不错。就是boss有点点难打，对于肝类玩家来说，五颗星星鼓励一下。",uname:"纪姝彤",stars:5},
            {to:"",img:"https://img.tapimg.com/market/lcs/f4f1cc2b3a6729cfb6079ce59f0380c5_360.png?imageMogr2/auto-orient/strip",gm_name:"灵猫传",comment:"唯美的观感为你代入一个写意浪漫的华风世界。你将扮演可盐可甜的尚京少女，在撸猫经营中致富谋生，在家族事业中探查真相，在成长历练中结识挚交：直率护短的门派少主，权倾朝野的奸佞王侯，绝伦逸群的宫廷乐师，谦谦如玉的巨贾东家，神秘莫测的深谷谪仙 ......",uname:"醉骨",stars:4},
            {to:"",img:"https://img.tapimg.com/market/lcs/8a063c4cfcc81a1ac1bb977bfa5fe2d4_360.png?imageMogr2/auto-orient/strip",gm_name:"使命召唤手游",comment:"周杰伦助阵代言，TGA最佳移动游戏，《使命召唤手游》终于在战士们的期待声中于2020年12月25日强势登场。作为使命召唤系列在移动端的延续，我们在努力还原经典玩法地图角色的同时，还结合手机端的操作特点进行了适配优化。",uname:"冰冰的滑溜溜的稽",stars:5},
            {to:"",img:"https://img.tapimg.com/market/lcs/5b36f91b8abf3ca57cf0c38e03ecf6d8_360.png?imageMogr2/auto-orient/strip",gm_name:"战火与秩序",comment:"《战火与秩序(WAO)》自2016年上线以来，获得App Store推荐15次，Google Play推荐11次，凭借出色的可玩性和创新的SLG+RTS模式，获得了广大玩家的认可和肯定。",uname:"天峰_233",stars:4},
            {to:"",img:"https://img.tapimg.com/market/lcs/17bc62a7df81c47a373a01f09206ad6f_360.png?imageMogr2/auto-orient/strip",gm_name:"濡沫江湖",comment:"《濡沫江湖》是一部单机弱联网国风RPG武侠游戏。性格各异的人物形象，幽默风趣的游戏对白，扑朔迷离的剧情发展，经典新奇的游戏玩法，将为你呈现出一个宏大、真实的武林世界。",uname:"paul.w",stars:5},
            {to:"",img:"https://img.tapimg.com/market/lcs/baec5c3dd9c7619a65fb0ea8b0735d42_360.png?imageMogr2/auto-orient/strip",gm_name:"不思议迷宫",comment:"游戏里有200多只冈布奥，它们每一只都有独特的文化背景和来头，这也导致了它们的性格、技能各异。比如未来猫冈布奥有神奇道具口袋、帮派干部冈布奥喜欢抢劫NPC...",uname:"倚天",stars:4},
            {to:"",img:"https://img.tapimg.com/market/icons/80d4416c5a7f4a9029dadf51ffd8ef3b_360.png?imageMogr2/auto-orient/strip",gm_name:"上古王冠",comment:"龙姬闯入深渊，横扫恶魔大军，只是为了摘取深渊中的地狱之花酿造美酒｡薇娅在骑士誓言——效忠君主和保护平民发生矛盾时，选择了后者，因此被尊称为守护天下的骑士——苍穹之枪｡",uname:"爱随缘",stars:5},
            {to:"",img:"https://img.tapimg.com/market/lcs/7f46166313212527febe0869566e159f_360.png?imageMogr2/auto-orient/strip",gm_name:"幻书启世录",comment:"文明力量的“阿克夏之火”显现在你的面前。被卷入神秘组织阴谋的你，因为一场意外成为了“馆主”，肩负起守护人类文明的重任。在众多性格各异的“幻书”陪伴下，你辗转于因愿望而生的各种“书境世界”，踏上了回收火种碎片的冒险之路。",uname:"银川雪",stars:4}
        ],
        Player_recommendation:[// 玩赏家推荐游戏-数据
            {to:"",img:"https://img.tapimg.com/market/lcs/5f2eccd203c740b455a9e4db0a7a629a_360.png?imageMogr2/auto-orient/strip",gm_name:"奇葩战斗家",comment:"在2020年即将结束之际，奇葩战斗家带着新版本来啦：作为周年庆的人气王，桃子带着专属传说皮肤来啦！还有两张全新的路人战、竞技场地图，从此玩这些模式都会有更多的变数和欢乐。还有新武器唢呐、新皮肤等等……快来和奇葩们，在新地图里大战一场吧！",uname:"小艺小艺",stars:5},
            {to:"",img:"https://img.tapimg.com/market/lcs/5327838c37afb0a42abcb79ecfdae7f1_360.png?imageMogr2/auto-orient/strip",gm_name:"火影忍者",comment:"火之意志，格斗重燃！《火影忍者》手游作为正版火影忍者格斗手游，由万代南梦宫授权、岸本齐史领衔集英社等版权方联合监修、腾讯游戏魔方工作室群自主研发而成。",uname:"萤火之明",stars:4},
            {to:"",img:"https://img.tapimg.com/market/icons/0ee7b75fa6856430a2ef6329901bdfb0_360.png?imageMogr2/auto-orient/strip",gm_name:"战棋三国",comment:"超大型复古策略战棋游戏，超大地图，三国14州150+郡国，300+关卡，100+武将！经典的战棋玩法，排兵布阵，站位，兵种搭配，地形，天气，士气，天时地利人和才能赢的战争！军团战，城战PVP，多元社交，场面宏大，剧情完整，还原三国古战役！",uname:"疯狂的面条",stars:5},
            {to:"",img:"https://img.tapimg.com/market/lcs/a2aa965948e5fdc4b96114009cf12b00_360.png?imageMogr2/auto-orient/strip",gm_name:"迷境射击（测试服）",comment:"部落图腾的信仰之力，赋予了利安德尔强大的跳跃能力，从此大陆变成了他的主场。手执锋利的长矛，巨龙，也只是他囊中之物。这里，是怪物的乐园，也是利安德尔的乐园。拿起长矛，一起狩猎吧！",uname:"正义可不会自己伸张",stars:4},
            {to:"",img:"https://img.tapimg.com/market/lcs/dbcde173f9b351510bf5a12beeff71a9_360.png?imageMogr2/auto-orient/strip",gm_name:"刃心",comment:"《刃心》带你闯荡忍者的世界！这是作为大学在校生的我，第一款完整的手游。第一次，很美、很纯、很执着，就是想让《刃心》更加完美。经过大量时间的打磨以及和美术大大的讨论，最终它诞生了，它不仅是一款需要你耐心研究游戏",uname:"安洁安洁安",stars:5},
            {to:"",img:"https://img.tapimg.com/market/icons/6b3b53d9aa0d43b6f5ae91022adbdaeb_360.png?imageMogr2/auto-orient/strip",gm_name:"御龙城堡",comment:"欢迎来到《御龙城堡》！高自由模拟经营卡牌手游，独特的剧情体验，梦幻的童话世界，建造专属乐园，在这里作为园长拟经营一个大型乐园吧~你可以开垦空地，建造乐园，升级建筑，把乐园建造成自己喜欢的类型；也可以展现才艺，拓展商路；还有多种卡牌服装风格任你挑选，展现各种风格的自己！",uname:"WHS~崭星",stars:4},
            {to:"",img:"https://img.tapimg.com/market/icons/550876b49494be7aca65edaac6cd5e53_360.png?imageMogr2/auto-orient/strip",gm_name:"2047",comment:"《2047》是一款专注于手机平台的轻量级卡牌竞技游戏。在界面设计上，我们一如既往的坚持竖版操作。对于核心玩法，我们采用了简化的，易于理解的规则，同时简洁的规则也让战斗节奏更轻快，更加紧张刺激。",uname:"如晴天，似雨天",stars:5},
            {to:"",img:"https://img.tapimg.com/market/lcs/98745705ddd336229f89aeaeb345e185_360.png?imageMogr2/auto-orient/strip",gm_name:"邮差骑士",comment:"库里斯特王国是一个神奇的国度，正直高尚与邪恶并存，可是邪恶的怪物和坏人也长得好可爱，让人讨厌不起来 (#^.^#) 抱着轻松愉悦的心态开始骑士生涯，不必执着于快速完成地图，累了就休息休息，想到了再继续，享受每一次冒险、享受每一次的探索。",uname:"全村的憧憬",stars:4}
        ],
        Card_block:{// 卡片块-数据
            Weekly_appointment_list:[
                {to:"",img:"https://img.tapimg.com/market/lcs/138858bd44ff6fe32198130eaf88a72f_360.png?imageMogr2/auto-orient/strip",gm_name:"缪斯计划"},
                {to:"",img:"https://img.tapimg.com/market/lcs/42a41a04ac1a97e7281f4d3b7dcec785_360.png?imageMogr2/auto-orient/strip",gm_name:"星遇（测试版）"},
                {to:"",img:"https://img.tapimg.com/market/lcs/52f0e5c9474171d5895c35a31d833b1e_360.png?imageMogr2/auto-orient/strip",gm_name:"纪念碑谷3"},
                {to:"",img:"https://img.tapimg.com/market/lcs/72954f91d8b5dc85cb356961f1982cc3_360.png?imageMogr2/auto-orient/strip",gm_name:"光·遇"},
                {to:"",img:"https://img.tapimg.com/market/lcs/4a7b644db2e9d81144348765dae52b57_360.png?imageMogr2/auto-orient/strip",gm_name:"悠梦2：光之国的爱丽丝"},
                {to:"",img:"https://img.tapimg.com/market/lcs/96a8ea364718a0ac0523c0dc3227e76e_360.png?imageMogr2/auto-orient/strip",gm_name:"风之旅人"},
                {to:"",img:"https://img.tapimg.com/market/lcs/fdf617fe07eda709b54742d47316c2e7_360.png?imageMogr2/auto-orient/strip",gm_name:"阴阳师"},
                {to:"",img:"https://img.tapimg.com/market/lcs/3c65e98153165a40c70a597550cbab0d_360.png?imageMogr2/auto-orient/strip",gm_name:"阴阳师：百闻牌"}
            ],
            Coming_Soon:[
                {to:"",img:"https://img.tapimg.com/market/lcs/c1fb0828493e1c5ba43045bd91122f4c_360.png?imageMogr2/auto-orient/strip",gm_name:"天地劫：幽城再临"},
                {to:"",img:"https://img.tapimg.com/market/lcs/d9bcf30c7ce8a6392e0cf242416061be_360.png?imageMogr2/auto-orient/strip",gm_name:"江湖悠悠"},
                {to:"",img:"https://img.tapimg.com/market/lcs/1f758303b637af94f777b228f096791e_360.png?imageMogr2/auto-orient/strip",gm_name:"一梦江湖"},
                {to:"",img:"https://img.tapimg.com/market/lcs/61c8546692e375015fc3c29aba1d52ea_360.png?imageMogr2/auto-orient/strip",gm_name:"云裳羽衣"},
                {to:"",img:"https://img.tapimg.com/market/icons/a99a8f9a6a4c2eae7c4f6253ecdc16ea_360.png?imageMogr2/auto-orient/strip",gm_name:"天谕"},
                {to:"",img:"https://img.tapimg.com/market/lcs/7db8b793a77add070334b1ff73feae37_360.png?imageMogr2/auto-orient/strip",gm_name:"天涯明月刀"},
                {to:"",img:"https://img.tapimg.com/market/lcs/6af3b5eba06fd3256d9b19475f40880e_360.png?imageMogr2/auto-orient/strip",gm_name:"原神"},
                {to:"",img:"https://img.tapimg.com/market/lcs/cb42c2ec24aed8d8048c409ca23b8215_360.png?imageMogr2/auto-orient/strip",gm_name:"英雄联盟手游"}
            ],
            Boutique:[
                {to:"",img:"https://img.tapimg.com/market/icons/03da8da158e9c4a00600c7e85a1610e0_360.png?imageMogr2/auto-orient/strip",gm_name:"云顶之弈手游"},
                {to:"",img:"https://img.tapimg.com/market/lcs/3d550d08311a18b5bcc16d842c1146c1_360.png?imageMogr2/auto-orient/strip",gm_name:"多多自走棋（腾讯服）"},
                {to:"",img:"https://img.tapimg.com/market/icons/5bd1c70921d80e5d9b3006bdb35072b2_360.png?imageMogr2/auto-orient/strip",gm_name:"QQ飞车"},
                {to:"",img:"https://img.tapimg.com/market/lcs/571cfb26a32965f3f45da302f4d89662_360.png?imageMogr2/auto-orient/strip",gm_name:"狂野飙车9：竞速传奇"},
                {to:"",img:"https://img.tapimg.com/market/icons/b800c1b43b84ab29a9c97c8a29663919_360.png?imageMogr2/auto-orient/strip",gm_name:"跑跑卡丁车官方竞速版"},
                {to:"",img:"https://img.tapimg.com/market/icons/a3ea935ff68f16703bb92a3081527448_360.png?imageMogr2/auto-orient/strip",gm_name:"偶像梦幻祭2"},
                {to:"",img:"https://img.tapimg.com/market/lcs/04cc082dd7fb453f1582145b2f8b456d_360.png?imageMogr2/auto-orient/strip",gm_name:"DEEMO II"},
                {to:"",img:"https://img.tapimg.com/market/lcs/880efd2790b8941d125842af06cf8788_360.png?imageMogr2/auto-orient/strip",gm_name:"音乐世界"}
            ],
            // 等等
        },
    },
    Top_nav_actv0(){this.setData({top_nav:0})},
    Top_nav_actv1(){this.setData({top_nav:1})},
    bindChange(e){
        e.detail.current==1?this.setData({top_nav:1}):this.setData({top_nav:0});
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
        // 计算首页高度
        var query = wx.createSelectorQuery();
        query.selectAll('.Top_Carousel').boundingClientRect();
        query.selectAll('.h1').boundingClientRect();
        query.selectAll('.h2').boundingClientRect();
        query.selectAll('.h3').boundingClientRect();
        query.selectAll('.h4').boundingClientRect();
        query.exec((h) => {
            var Total_height = (h[0].length*364+h[1].length*216+h[2].length*242+h[3].length*231+h[4].length*170)*2;
            this.setData({Total_height:Total_height});
        })
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