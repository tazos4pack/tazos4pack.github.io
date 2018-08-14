var bDay = new Date("Feb 29, 2020 0:00:00").getTime();
var x = setInterval(function () {
        var teraz = new Date().getTime();
        var ileZostalo = bDay - teraz;
        var dni = Math.floor(ileZostalo / (1000 * 60 * 60 * 24));
        var godzin = Math.floor((ileZostalo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minut = Math.floor((ileZostalo % (1000 * 60 * 60)) / (1000 * 60));
        var sekund = Math.floor((ileZostalo % (1000 * 60)) / 1000);
        var lat = Math.floor(dni / 365);
        var days = Math.floor(dni - (lat * 365));
        var odmiana = " lat "
        if (lat = 1) {
            var odmiana = " rok "
        }
        document.getElementById("odliczanko").innerHTML = lat + odmiana + days + " dni " + godzin + "h " + minut + "m " + sekund + "s";

        if (ileZostalo < 0) {
            bDay = bDay + ((4 * 365) + 1);
        }
    },
    1000);




function isLeap() {
    const yr = document.getElementById("year").value;
    if ((parseInt(yr) % 4) == 0) {
        if (parseInt(yr) % 100 == 0) {
            if (parseInt(yr) % 400 != 0) {
                document.getElementById("is-leap").innerHTML = "Rok " + yr + " nie jest rokiem przestępnym.";
                return "false";
            }
            if (parseInt(yr) % 400 == 0) {
                document.getElementById("is-leap").innerHTML = "Rok " + yr + " jest rokiem przestępnym.";
                return "true";
            }
        }
        if (parseInt(yr) % 100 != 0) {
            document.getElementById("is-leap").innerHTML = "Rok " + yr + " jest rokiem przestępnym.";
            return "true";
        }
    }
    if ((parseInt(yr) % 4) != 0) {
        document.getElementById("is-leap").innerHTML = "Rok " + yr + " nie jest rokiem przestępnym.";
        return "false";
    }
}
