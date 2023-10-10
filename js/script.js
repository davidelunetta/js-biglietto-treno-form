function calcolaPrezzo() {
    const km = parseFloat(document.getElementById("kmInput").value);
    const age = parseInt(document.getElementById("ageInput").value);

    const prezzoBase = km * 0.21;
    let prezzoFinale = prezzoBase;
    let minorenne = (document.getElementById("mino"))
    if (age < 18) {
        // Applica lo sconto del 20% per i minorenni
        prezzoFinale *= 0.8;
    } else if (age >= 65) {
        // Applica lo sconto del 40% per gli over 65
        prezzoFinale *= 0.6;
    }

    document.getElementById("ticketPrice").textContent = `Prezzo del biglietto: ${prezzoFinale.toFixed(2)} €`;
}