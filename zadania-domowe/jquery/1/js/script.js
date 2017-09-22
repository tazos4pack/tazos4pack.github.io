$(function () {
    $('#start-animacji').click(function () {
        $('#kwadrat').animate({
            marginLeft: '100px',
            height: '100px',
            width: '100px'
        }, 3000)
        $('#kwadrat').animate({
                backgroundColor: '#00F'
            }, 5000
            function () {
                $('h2').show();
            });
    });
});
