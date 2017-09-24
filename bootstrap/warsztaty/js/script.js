//$(document).ready(function(){
//    scrollMenu();
//    smoothScroll();
//});


//function scrollMenu() {
//    var menuHeight = $('#main-nav').height();
//    var scrolled = $(window).scrollTop();
//    
//    $(window).csroll(function() {
//        var scrolled = $(window).scrollTop();
//        if(scrolled >= menuHeight) {
//            $('#main-nav').addClass('scrolled');
//        } else {
//            $('#main-nav').removeClass('scrolled');
//        }
//    })
//}

function checkScroll() {
    var startY = $('.navbar').height() * 2;

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }
}

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}


function smoothscroll() {
    $('#main-nav a[href*="#"]:not([href=#])').click(function () {
        $('body').animate({
            scrollTop: $(this.hash).offset().top - 50
        }, 500);
    });
}

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });