'use strict';

var kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function () {
        console.log(this.imie)
    }
}

var krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function () {
        console.log(this.imie)
    }
}

console.log(kaja);
console.log(kaja.wzrost);
console.log(kaja["wzrost"]);

console.log(krystian["wzrost"]);

kaja.przedstawOsobe();
krystian.przedstawOsobe();


class Osoba {
    constructor(firstName, lastName, height, eyes) {
        this.imie = firstName;
        this.nazwisko = lastName;
        this.wzrost = height;
        this.oczy = eyes;
    }

    wyswietlInfo() {
        console.log("Imię: " + this.imie + "\n" + "Nazwisko: " + this.nazwisko + "\n" + "Wzrost: " + this.wzrost + "\n" + "Oczy: " + this.oczy);
    }
}

var krystian = new Osoba("Krystian", "Dziopa", 180, "Niebieskie");
var kaja = new Osoba("Kaja", "Brzęczyszczykiewicz", 250, "Piękne");
console.log(krystian);
console.log(kaja);

krystian.wyswietlInfo();
kaja.wyswietlInfo();

// JAK NIE DODAWAĆ:
//krystian.wzrost = 180;
//krystian.oczy = "niebieskie";
