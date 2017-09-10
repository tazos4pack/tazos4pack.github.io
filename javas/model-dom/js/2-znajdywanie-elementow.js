'use strict';

var parFirst = document.getElementById('parFirst');
console.log(parFirst);

console.log("¯\\_(ツ)_/¯");

var linki = document.getElementsByClassName('superlink');
console.log(linki);

console.log("¯\\_(ツ)_/¯");

var linki = document.getElementsByClassName('superlink');
console.log(linki[0]);

console.log("¯\\_(ツ)_/¯");

var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

console.log("¯\\_(ツ)_/¯");

var divPoId = document.querySelector('#parSecond');
console.log(divPoId);

console.log("¯\\_(ツ)_/¯");

var pierwszyLinkPoSelektorze = document.querySelector('.superlink');
console.log(pierwszyLinkPoSelektorze);

console.log("¯\\_(ツ)_/¯");

var wszystkieLinkiPoSelektorze = document.querySelectorAll('.superlink')
console.log(wszystkieLinkiPoSelektorze);

console.log("¯\\_(ツ)_/¯");

wszystkieLinkiPoSelektorze.forEach(function (link, i) {
    console.log(link);
})

console.log("¯\\_(ツ)_/¯");

wszystkieLinkiPoSelektorze.forEach(function (link, i) {
    console.log(link.outerHTML);
})
