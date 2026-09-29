// Haetaan Helsingin säätiedot
fetch("https://api.openweathermap.org/data/2.5/weather?id=658225&appid=665ecd56dfc08dbb50feb8b8f5034e28&lang=fi&units=metric")

    // Muunnetaan vastaus JSON-muotoon
    .then(function (response) {
        return response.json();
    })

    // Käsitellään JSON-muotoinen vastaus
    .then(function (data) {
        kerro(data);
    })

    // Jos haussa tulee virhe
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML =
            "<p>Säätietoja ei pystytä hakemaan</p>";
    });


// Näytetään säätiedot sivulla
function kerro(data) {

    let tiedot = "<h3>Sää</h3>"
        + data.weather[0].description + "<br>"
        + "<h3>Lämpötila</h3>"
        + data.main.temp + " °C<br>"
        + "<h3>Tuuli</h3>"
        + data.wind.speed + " m/s<br>"
        + "<h3>Kuva</h3>"
        + "<img src='https://openweathermap.org/img/wn/"
        + data.weather[0].icon + "@2x.png'>";

    document.getElementById("vastaus").innerHTML = tiedot;

    // Näytetään sivun latausaika
    document.getElementById("aika").innerHTML =
        "Sivu ladattu: " + new Date().toLocaleString("fi-FI");
}
