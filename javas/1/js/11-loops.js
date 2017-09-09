'use strict';


// PĘTLA FOR

//for (var i = 100; i >= 50; i--) {
//    console.log(i);
//}

//for (var i = 1; i < 5;) {
//    console.log(i++);
//}
//console.log("\n ----- \n \n")
//
//for (var i = 1; i < 5;) {
//    console.log(++i);
//}



// PĘTLA FOR EACH

//var tablica = ["Krystian", "Monika", "Danuta"];
//
//tablica.forEach(function (element, index) {
//    console.log("Element z Indexem: " + index + " ma wartość " + element);
//});

// PĘTLA WHILE

//var it = 0;
//while (it < 10) {
//    console.log(it);
//    it++;
//}


// PĘTLA DO WHILE

var iter = 20;
do {
    console.log(iter);
    iter++;
    //    console.log(iter);
} while (iter < 10);


//PRZERYWANIE PĘTLI - BREAK

var a = 0;
while (a < 10) {
    console.log(++a);

    if (a == 5) {
        break;
    }
}

//    PRZESKAKIWANIE DO KOLEJNEJ ITERACJI - CONTINUE

for (var b = 0; b < 10; b++) {
    if (b == 3) {
        continue;
    } else {
        console.log(b);
    }
    console.log("-------");
}
