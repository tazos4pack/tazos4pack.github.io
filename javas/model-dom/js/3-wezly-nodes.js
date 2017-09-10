'use strict';

var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);

console.log("\n   ¯\\_(ツ)_/¯\n\n");

console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.childNodes[1]);
console.log(pierwszyDiv.children);

console.log("\n   ¯\\_(ツ)_/¯\n\n");

console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);

console.log("\n   ¯\\_(ツ)_/¯\n\n");

var pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.nextSibling);

console.log("\n   ¯\\_(ツ)_/¯\n\n");

var childNodesDiva = pierwszyDiv.childNodes;

childNodesDiva.forEach(function (element) {
    if (element.nodeType == 1) {
        console.log(element);
    }
});

console.log("\n   ¯\\_(ツ)_/¯\n\n");

var chlidrenDiva = pierwszyDiv.children;
console.log(chlidrenDiva.length);

for (var i = 0; i < chlidrenDiva.length; i++) {
    console.log(chlidrenDiva[i]);
}
