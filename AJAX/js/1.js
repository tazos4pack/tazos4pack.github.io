'use strict';

//definicja funkcji ajax
function ajax(ajaxOptions) {

    var options = {
        httpMethod: ajaxOptions.type || "POST",
        url: ajaxOptions.url || "",
        onComplete: ajaxOptions.onComplete || function () {},
        onError: ajaxOptions.onError || function () {},
        onSuccess: ajaxOptions.onSuccess || function () {},
    }

    var xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.open(options.httpMethod, options.url, true);

    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 4) {
            if (httpSuccess(xmlHttpRequest)) {
                var returnData = (options.dataType == "xml") ? xmlHttpRequest.responseXML : xmlHttpRequest.responseText;

                options.onSuccess(returnData);

                xmlHttpRequest = null;
            } else {
                options.onError(xmlHttpRequest.statusText);
            }
            options.onComplete(xmlHttpRequest);
        }
    }

    xmlHttpRequest.send();


    //funkcja sprawdzająca czy jest ok
    function httpSuccess(xmlHttpRequest) {
        try {
            return (xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 300 || xmlHttpRequest.status == 304 ||
                (navigator.userAgent.indexOf("safari") >= 0 && typeof xmlHttpRequest.status == "undefined")
            );

        } catch (e) {
            return false;
        }
    }

};



function pobierzDane(event) {
    ajax({
        type: "GET",
        url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
        onError: function (msg) {
            console.log(msg);

        },
        onSuccess: function (response) {

            var jsonObj = JSON.parse(response);
            console.log(jsonObj);

            var userID = document.createElement("p");
            var tekstID = document.createTextNode("User ID: " + jsonObj.userId);
            userID.appendChild(tekstID);
            document.body.appendChild(userID);

            var userName = document.createElement("p");
            var tekstName = document.createTextNode("User Name: " + jsonObj.userName);
            userName.appendChild(tekstName);
            document.body.appendChild(userName);

            var userUrl = document.createElement("p");
            var tekstUrl = document.createTextNode("User URL: " + jsonObj.userURL);
            userUrl.appendChild(tekstUrl);
            document.body.appendChild(userUrl);

            var linijka = document.createElement("hr");
            document.body.appendChild(linijka);
        }
    });
}
