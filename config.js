var _config = {
    blog_name       : 'yangwenxin',         // 博客名称
    owner           : 'wenxinYang',           // github 用户名
    repo            : 'wenxinYang.github.io',// github 中对应项目名
    duoshuo_id      : 'yangwenxin',            // 在第三方评论插件多说申请站点的子域名
//    access_token : '8eb3999fe86355c670f4d9095265fea1ef3c3854',        // 请求量大时需要在 github 后台单独设置一个读取公开库的 token
    per_page        : '10'                    // 默认一页显示几篇文章
}

var duoshuoQuery = {short_name:_config['duoshuo_id']};