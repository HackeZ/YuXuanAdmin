;$(function(){
    function errorshow(inputid, tips) {
        var parent = inputid.closest(".formitem");
        var wrongMsg = parent.find(".wrongwrap");
        var errorcon = wrongMsg.find(".wrongmsg");
        inputid.addClass("wrongborder");
        wrongMsg.show();
        errorcon.text(tips);
    }
    function errorhide(inputid) {
        var parent = inputid.closest(".formitem");
        var wrongMsg = parent.find(".wrongwrap");
        var errorcon = wrongMsg.find(".wrongmsg");
        inputid.removeClass("wrongborder");
        wrongMsg.hide();
    }
    $("form").submit(function() {
        // 获取输入框中的值
        var userid = $(":input[name=user-id]");
        var password = $(":input[name=password]");

        var url = $('#login').data('url');

        // 防止空值
        if (userid.val() === "") {
            errorshow(userid, "用户名不能为空");
            return false;
        };
        if (password.val() === "") {
            errorshow(password, "密码不能为空");
            return false;
        };
        loginAjax();
        function loginAjax() {
            $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                data: "username=" + userid.val() + "&password=" + password.val(),
                success: function (data, status) {
                    console.log(data);
                    if (data.status === -1) {
                        errorshow(userid, data.info);
                    }else if (data.status === 1) {
                        location.href="home";
                    };
                },
                error: function (data, status) {
                    location.href="login";
                }
            });
        }
    })
});