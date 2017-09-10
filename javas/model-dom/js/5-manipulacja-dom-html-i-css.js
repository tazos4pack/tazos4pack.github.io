'use strict'

// przypisujemy header do zmiennej
var mainHeader = document.getElementById('main-header');

//zmieniamy treść nagłówka 
mainHeader.innerHTML = "Treść Nagłówka";

//przypisujemy pierwszy link do zmiennej
var link = document.getElementsByClassName('link')[0];

// nadpisujemy atrybuty 
link.href = "http://smutazos.pl";
link.target = "_blank";

//nadpisujemy nazwe klasy
link.className = "nowaKlasa";

//dodajemy style do nagłówka
mainHeader.style.color = "#11aa22";
