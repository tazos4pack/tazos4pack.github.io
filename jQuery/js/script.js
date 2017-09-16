$(function () {
    $('#first')
        .css({
            color: 'red'
        });
    var paragrafy = $('p');
    console.log(paragrafy);
    var poId = $('#fajny-paragraf');
    console.log(poId);
    var poKlasie = $('.gorszy-paragraf');
    console.log(poKlasie);
    var paragrafPodglad = $('#fajny-paragraf').text();
    console.log(paragrafPodglad);
    $('.gorszy-paragraf').text('Lorę ipsę 2');
    $('#trzeci-paragraf').html('Lorę ipsę <strong>TRZY</strong>');
    $('#trzeci-paragraf').append(': Zemsta Lorema');
    $('#czwarty-paragraf').after(' TEGO TU WCZEŚNIEJ NIE BYŁO');
    $('#czwarty-paragraf').addClass('niebieska');

    $('div').find('.green').css({
        "background-color": "green"
    });
    $('div').find('.blue').css({
        "background-color": "blue"
    });

    /*
    $('.iteracja').each(function (index) {
        var iteracja = index + 1;
        $(this).text('Paragraf ' + iteracja);
    });*/

    $('.iteracja').each(function (index) {
        $(this).text('Paragraf ' + (index + 1));
    });

    $('.guzik').click(function () {
        $(this).css({
            "background-color": "pink",
            "color": "red"
        });
        alert($('.guzik').text());
    });

    /*
        
        $('#mouseover').mouseenter(function () {
            $('.hideShow').show(3000);
        });

        $('#mouseover').mouseleave(function () {
            $('.hideShow').hide(3000);
        });
    */


    $('#mouseover').on({
        mouseenter: function () {
            $('.hideShow').show(1000);
        },
        mouseleave: function () {
            $('.hideShow').hide(1000);
        }
    });


    $('.jeden').on({
        mouseenter: function () {
            $('.hideShow1').show(1000);
        },
        mouseleave: function () {
            $('.hideShow1').hide(1000);
        }
    });

    $('.dwa').on({
        mouseenter: function () {
            $('.hideShow2').fadeIn(3000);
        },
        mouseleave: function () {
            $('.hideShow2').fadeOut(3000);
        }
    });

    $('.trzy').on({
        mouseenter: function () {
            $('.hideShow3').slideDown(3000);
        },
        mouseleave: function () {
            $('.hideShow3').slideUp(3000);
        }
    });









});
