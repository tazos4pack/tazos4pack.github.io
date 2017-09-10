'use strict';




function ustawTlo() {

    var firstLink = document.getElementsByTagName('p')[0];
    var secondLink = document.getElementsByTagName('p')[1];
    console.log(firstLink);
    firstLink.style.backgroundColor = "red";
    secondLink.style.backgroundColor = "yellow";
}

document.querySelector('button').onclick = ustawTlo;
