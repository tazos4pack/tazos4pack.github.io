var translate = {
    pl: {
        m1: "Żaden wiatr nie jest dobry dla okrętu, który nie zna portu swego przeznaczenia.",
        m2: "Konfucjusz",
    },
    en: {
        m1: "No wind is favourable for a ship that doesn't know its destiny harbor.",
        m2: "Confucius",
    },
    lat: {
        m1: "Nullus suus ventus est in nave, quae non sciunt ad portum fatum.",
        m2: "Confucius",
    }
};

class translator {
    constructor() {
        this.changeLanguage();
    }

    changeLanguage() {
        var i18n = translate;
        $(".language select").change(function () {
            var lang = $(this).val();
            $("#atr1").text(i18n[lang].m1, 500);
            $("#atr2").text(i18n[lang].m2, 500);
        });
    }
}

new translator()
