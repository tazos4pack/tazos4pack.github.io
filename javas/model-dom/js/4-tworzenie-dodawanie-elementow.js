'use strict';

//var istniejacyWezel = document.getElementById('parFirst').children[3];
//console.log(document.getElementById('parFirst').children);
//console.log(istniejacyWezel); //wyjmuje istniejacy wezel z dokument
//
//console.log("\n¯\\_(ツ)_/¯\n\n");
//
//var newElement = document.createElement('p');
//console.log(newElement); //tworzy paragraf
//
//var newElementContent = document.createTextNode('Oto nowy paragraf');
//console.log(newElementContent); //tworzy nowy węzeł tekstowy
//
//newElement.appendChild(newElementContent);
//console.log(newElement); //dodaje tekst do paragrafu
//
//console.log("\n¯\\_(ツ)_/¯\n\n");
//
//istniejacyWezel.appendChild(newElement); //dodanie <p> do dokumentu
//
////istniejacyWezel.removeChild(newElement); //usuwa <p> z dokumentu
//
////var parFirstDiv = document.getElementById('parFirst');
////parFirstDiv.replaceChild(newElement, istniejacyWezel); //zastepuje istniejacy wezel nowym elementem

//dodaj <br> po każdym linku i usuń z nich atrybut klasy

var allLinks = document.querySelectorAll('a');

//iteracja po tablicy
for (var i = 0; i < allLinks.length; i++) {
    console.log(allLinks[i]);
    var br = document.createElement('br') //tworzy element br
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling); //dodaje br po kazdym linku - wyszukuje nastepne i przed nstepnym robi br
    allLinks[i].removeAttribute('class'); //usuwa atrybut klasy
}
