<!-- GmGm鼠数据库集合大纲 -->

# 001 游戏表
<!-- 01 游戏id -->
    yx_id
<!-- 02 游戏名称 -->
    Game_name
<!-- 03 安装人数 -->
    Number_of_Installers
<!-- 04 关注人数 -->
    Number_of_concerned
<!-- 05 是否测试 -->
    is_test      0:否,1:是
<!-- 06 评分 -->
    grade
<!-- 07 小图片 -->
    sm_img
<!-- 08 宣传大图 -->
    lg_img
<!-- 09 开发者的话 -->
    developer_say
<!-- 10 简介 -->
    brief_introduction
<!-- 11 最近更新 -->
    Recent_updates
<!-- 12 详细信息 -->
detailed_information
>* [文件大小,当前版本,更新时间,开发商,发行商,厂商]
>* 0:空
<!-- 13 标签 -->
label   
>* 1:单机,2:角色扮演,3:动作,4:MOBA,5,:策略,6:卡牌,7:生存,8:模拟,9:竞速,10:益智,11:二次元,12:往期推荐,13:GmGm独家,14:地牢,15:武侠,16:高画质,17:多人对战,18:射击,19:第一人称射击,20:shooter
<!-- 14 兼容性 -->
compatibility
>* [语言,网络,内购,系统要求]
>* 1:简体中文; 1:需要,0:不需要; 1:有,0:无;
# 002 用户表
<!-- 账号id -->
Uid
<!-- 用户账号 -->
Uaccount_number
<!-- 用户密码 -->
Upasswored
<!-- 用户名称 -->
Uname
<!-- 用户头像 -->
Ufaces
<!-- 个性签名 -->
Uautograph
<!-- 关注列表 -->
Ufollow     数组存游戏id
<!-- 评价列表 -->
Uevaluate
<!-- 评论列表 -->
Ucomment
