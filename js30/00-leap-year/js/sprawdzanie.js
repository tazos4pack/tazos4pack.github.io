function isLeap() {
    var yr = document.getElementById("year").value;
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
