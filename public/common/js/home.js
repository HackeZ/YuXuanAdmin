/**
 * 自定义的函数，用于页面的操作，数据校验等
 * data用于数据共享或者实现插件内的全局变量
 */
$(document).ready(function() {
    $.get_content = get_content;
	jQuery.custom = {
	   'clickJumpTo': clickJumpTo,
        'get_content': get_content,
	};
    console.log("跳转JS加载完毕");
});


/**
 * 二级菜单滑动效果
 */
$(document).ready(function() {
    $(".btn-stair").mouseover(function() {
        $(this).siblings().slideDown();
        $(this).parent().siblings().find("ul").slideUp();
    });
    console.log("左边菜单栏效果加载完毕");
});

/**
 * 点击加载页面右侧的内容
 * @param btnSelector 点击按钮的选择器
 * @param jumpToUrl 加载的url
 */
function clickJumpTo(btnSelector, jumpToUrl){
	$(btnSelector).click(function () {
        $.custom.get_content(jumpToUrl);
    });
}

function get_content(url) {
    $(".content-info").load(url, null, null);
}