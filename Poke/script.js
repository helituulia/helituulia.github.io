// Tallennetaan Pokemonin nimi muuttujaan
let name;

// Pokemon-haku
function poke() {

    // Tyhjennetään edellisen haun kuva
    document.getElementById("kuva2").innerHTML = "";

    // Tallennetaan annettu Poken nimi ja muutetaan se pieniksi kirjaimiksi
    const pokeName = document.getElementById("pokemonName").value.toLowerCase();

    // Tallennetaan nimi talteen muuttujaan
    name = document.getElementById("pokemonName").value;

    // Haetaan Pokemonin tiedot fetchillä
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)

        // Muunnetaan vastaus JSON-muotoon
        .then(function (response) {

    if (!response.ok) {
        throw new Error("Pokemonia ei löytynyt");
    }

    return response.json();
})
        })

        // Käsitellään JSON-muotoinen vastaus
        .then(function (responseJson) {
            pokekuva(responseJson);
        })

        // Jos tuli jokin virhe
        .catch(function (error) {
            document.getElementById("nimi").innerHTML =
                "<p>Tietoa ei pystytä hakemaan</p>";

            document.getElementById("kuva2").innerHTML = "";
        });

    // Tyhjennetään hakukenttä
    document.getElementById("pokemonName").value = "";
}


// Näytetään Pokemonin kuva ja nimi
function pokekuva(obj) {

    // Tallennetaan muuttujaan linkki, josta löytyy Pokemonin kuva
    let pokeurl = obj.sprites.front_default;

    // Kirjoitetaan kuva sivulle
    document.getElementById("kuva2").innerHTML =
        "<img src=" + pokeurl + ">";

    // Kirjoitetaan nimi sivulle
    document.getElementById("nimi").innerHTML =
        "<b>" + name + "</b>";
}
