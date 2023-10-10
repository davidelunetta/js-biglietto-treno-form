function calcolaPrezzo() {
    let km = parseFloat(document.getElementById("kmInput").value);
    let age = parseInt(document.getElementById("ageInput").value);
    let nome = document.getElementById("nomeInput").value;
    let cognome = document.getElementById("cognomeInput").value;
    let prezzoBase = km * 0.21;
    let prezzoFinale = prezzoBase;
    let x = parseInt(Math.random() * 100) ;
    let y = parseInt(Math.random() * 100000) ;
    console.log(x)
    
    if (age < 18) {
        // Applica lo sconto del 20% per i minorenni
        prezzoFinale *= 0.8;
    } else if (age >= 65) {
        // Applica lo sconto del 40% per gli over 65
        prezzoFinale *= 0.6;
    }

    document.getElementById("nome").textContent = `Intestatario: ${nome} ${cognome}`;
    document.getElementById("ticketPrice").textContent = `Prezzo: ${prezzoFinale.toFixed(2)} €`;
    document.getElementById("vagone").textContent = `Vagone: ${x}`;
    document.getElementById("codice-cp").textContent = `Codice CP: ${y}`;
    document.getElementById("offerta").textContent = `Offerta: ${age}`
}