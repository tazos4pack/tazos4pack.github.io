$(function () {
    $('button').on('click', function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (dane) {
            $('body').append('<div id="dane-programisty"><p><strong>Imię:</strong> ' + dane.imie + '</p><p><strong>Nazwisko:</strong> ' + dane.nazwisko + '</p><p><strong>Zawód:</strong> ' + dane.zawod + '</p><p><strong>Firma:</strong> ' + dane.firma + '</p></div>');
        })
    })
})
