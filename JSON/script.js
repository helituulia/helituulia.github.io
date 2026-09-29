// Haetaan JSON-tiedosto
fetch("tietue.json")

    // Muunnetaan vastaus JavaScript-olioksi
    .then(function (response) {
        return response.json();
    })

    // Käsitellään JSON-muotoinen vastaus
    .then(function (responseJson) {
        kerro(responseJson);
    })

    // Jos hakemisessa tulee virhe
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML =
            "<p>Tietoa ei pystytä hakemaan</p>";
    });
    // Käsitellään JSON-tiedot
function kerro(obj) {

    let tiedot = "<h1>" + obj.otsikko + "</h1><br>"
        + obj.kuvaus + "<br><hr>";

    // Lisätään kuva
    tiedot += "<p><img src=" + obj.kuva + "></p>";

    // Opintojakson tiedot
    tiedot += "<h3>Opintojakso</h3>"
        + "Nimi: " + obj.opintojakso.nimi + "<br>"
        + "Tunnus: " + obj.opintojakso.tunnus + "<br>"
        + "Opintopisteet: " + obj.opintojakso.opintopisteet + "<br>";
// Aiheet
tiedot += "<p><h3>Aiheet</h3>";

// Käydään tekniikat-taulukko läpi
for (var i = 0; i < obj.tekniikat.length; i++) {

    tiedot += "<b>Aihe: " + obj.tekniikat[i].aihe + "</b>";

    tiedot += " <a href=" + obj.tekniikat[i].linkki + ">"
        + obj.tekniikat[i].linkki + "</a><br>";
}

tiedot += "</p>";

    document.getElementById("vastaus").innerHTML = tiedot;
}