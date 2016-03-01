;$(function() {
	// 添加用户
	$.custom.clickJumpTo("#add-user", "/users/add");

	// 修改
	$(".btn-update").click(function() {
		var url = $(this).data("url");
		$.get_content(url);
	});

	// 确认删除
	$(".btn-del").click(function(event) {
		if (!confirm("确定要删除该管理员？")) {
			return false;
		};
	});
});