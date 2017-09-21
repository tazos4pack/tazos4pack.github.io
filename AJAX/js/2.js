$(function () {
    $('button').on('click', function () {
        $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function (dane) {
            $("body").append("<p>User ID: " + dane.userId, "</p>", "<p>User Name: " + dane.userName, "</p>", "<p>User Url: " + dane.userURL, "</p>");
        });
    });
});
