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

function downloadData() {
    ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        onError: function (msg) {
            console.log(msg);

        },
        onSuccess: function (response) {
            var jsonObject = JSON.parse(response);
            jsonObject.forEach(function (element) {
                var userId = document.createElement("p");
                var numerId = document.createTextNode("User ID: " + element.id);
                userId.appendChild(numerId);
                document.body.appendChild(userId);

                var nejm = document.createElement('p');
                var nazwisko = document.createTextNode('Osoba: ' + element.name);
                nejm.appendChild(nazwisko);
                document.body.appendChild(nejm);

                var ulica = document.createElement("p");
                var nazwaUlicy = document.createTextNode("Ulica: " + element.address.street);
                ulica.appendChild(nazwaUlicy);
                document.body.appendChild(ulica);

                var miasto = document.createElement("p");
                var nazwaMiasta = document.createTextNode("Miasto: " + element.address.city);
                miasto.appendChild(nazwaMiasta);
                document.body.appendChild(miasto);

                var linijka = document.createElement("hr");
                document.body.appendChild(linijka);


            })

        }
    });
};



downloadData();



window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        downloadData();
    }
};
