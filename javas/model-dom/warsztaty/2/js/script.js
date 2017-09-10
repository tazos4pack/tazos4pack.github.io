'use strict';

function pobierzImie(event) {
    var fname = document.getElementById('formularz').getElementsByTagName('input')[0].value;
    var lname = document.getElementById('formularz').getElementsByTagName('input')[1].value;
    event.preventDefault();
    console.log(fname);
    console.log(lname);
}
