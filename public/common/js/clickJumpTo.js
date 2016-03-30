/**
 * 负责 点击左侧菜单栏 绑定 右边网页跳转
 */
;$(function() {
	var url = window.location.href;

	// 数据总结
	//$.custom.clickJumpTo(".info-integration", "#1");

	// 用户列表
	$.custom.clickJumpTo(".btn-manager-user", "/users");
	// 添加用户
	$.custom.clickJumpTo(".btn-add-user", "/users/add");
})