'use strict';

var liczba1 = 13,
    liczba2 = 5;

var wynik;

wynik = liczba1 % liczba2;
console.log(wynik);

while (liczba2 < liczba1) {
    console.log(liczba1);
    --liczba1;
}

var wynik2 = 20;
wynik2 -= liczba1; //TO SAMO CO: wynik2 = wynik2 - liczba1;

console.log(wynik2);

var zmiennaDoWarunku = 22;

if (2 > 5) {
    console.log("TAK")
} else {
    console.log("NEIN");
}

if (zmiennaDoWarunku = 5) {
    console.log("TAK")
} else {
    console.log("NEIN");
}


if (zmiennaDoWarunku !== 5) {
    console.log("TAK")
} else {
    console.log("NEIN");
}

(2 > 5) ? console.log("TAK"): console.log("NEIN!");
