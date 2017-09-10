'use strict';
/*
var secondLink = document.getElementsByTagName('a')[1]; //tworzymy zmienna z drugim linkiem

console.log(secondLink);

function alarm(e) {
    e.preventDefault(); //zapobiega domyślnej akcji
    console.log('kliknięto kolejny link');

    console.log(e.type);
}

secondLink.onclick = alarm; //podpinamy funkcje 'alarm' na drugim linku po klinknieciu

var thirdLink = document.getElementsByTagName('a')[2];

thirdLink.addEventListener('click', alarm); //wywołanie funkcji alarm() na trzecim linku za pomoca event listenera
*/


///*efekt powiekszenia tekstu po najechaniu myszka */
//
////nagłówek przypisujemy do zmiennej
//var mainHeader = document.getElementById('main-header');
//
////przekazujemy zdarzenia jako parametr funkcji
//function resize(e) {
//    if (e.type == 'mouseover') { //sprawdzanie typu zdarzenia
//        mainHeader.style.fontSize = '70px'; //zmien wielkość fontu po najechaniu
//    } else {
//        mainHeader.style.fontSize = null; // przywroc po najechaniu
//    }
//}
//
//
//mainHeader.onmouseover = resize; //wywołanie funkcji resize po najechaniu
//mainHeader.onmouseout = resize; //wywołanie funkcji resize po odjechaniu

function klikHeader() {
    console.log("klikłeś w header");
}

document.getElementsByTagName('header')[0].onclick = klikHeader;

function killH1(e) {
    e.stopPropagation();
    console.log('klikłeś w h1');
}


document.getElementsByTagName('h1')[0].onclick = killH1;
