'use strict';

function wypiszImie(imieDoWyswietlenia) {
    var zwracanyNapis;
    zwracanyNapis = "Imie jest: " + imieDoWyswietlenia

    return zwracanyNapis;
    //    console.log(zwracanyNapis);
}

var imieMeskie = "Mateusz";
var imieZenskie = "Ola";
var imiePsa = "Reksio";

wypiszImie(imieMeskie);
console.log(wypiszImie(imieZenskie));
wypiszImie("Kiruisz");
wypiszImie(imiePsa);
var nowyNapis = wypiszImie("Kiruisz")

console.log(nowyNapis);


function multiply(czynnikMnozenia1, czynnikMnozenia2) {
    var wynik;
    wynik = czynnikMnozenia1 * czynnikMnozenia2;

    var zdanie = "Wynikiem mnozenia " + czynnikMnozenia1 + " i " + czynnikMnozenia2 + " jest: " + wynik;

    return zdanie;

}

var mnozna = "23";
var mnoznik = "33";
var wynikMnozenia = multiply(mnozna, mnoznik);

console.log(wynikMnozenia);
