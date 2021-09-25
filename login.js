$(document).ready(function () {

    var error_name = false;
    var error_password = false;

    $("#username").focusout(function () {
        check_name();
    });
    $("#password").focusout(function () {
        check_pass();
    });

    function check_name() {
        var name = $("#username").val();
        if (name == "admin") {
            $("#username").css("border-bottom", "5px solid green");
        } else {
            $("#username").css("border-bottom", "5px solid red");
            error_name = true;
        }
    }

    function check_pass() {
        var pass = $("#password").val();
        if (pass == "12345") {
            $("#password").css("border-bottom", "5px solid green");
        } else {
            $("#password").css("border-bottom", "5px solid red");
            error_password = true;
        }
    }

    $("form").submit(function () {
        error_name = false;
        error_password = false;

        check_name();
        check_pass();

        if (error_name == false && error_password == false) {
            alert("success");
            return true;
        }
        else {
            alert("failure");
            return false;
        }

    });


});
