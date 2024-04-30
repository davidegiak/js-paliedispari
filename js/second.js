// L’utente sceglie su cosa puntare: pari o dispari.

const pOd = prompt("pari o dispari ?");
console.log(pOd)

// L'utente inserisce un numero da 1 a 5.

const oneToFive = prompt ("inserisci un numero da 1 a 5");
const oneToFiveNumber = Number(oneToFive);
console.log(oneToFiveNumber);

// Il computer estrae un numero casuale sempre tra 1 e 5 (usando una funzione).

function casualNumbers(max) {
    return Math.floor(Math.random() * max);
}
const casual = Number(casualNumbers(6));
console.log(casual)
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).

function add(num1, num2) {
    return somma = num1 + num2;
}
somma = add(oneToFiveNumber, casual);
console.log(somma);

function vincitore(addizione) {
    // if (somma % 2 === 0) {
    //     const pari = alert("pari");
    // }
    // else {
    //     const dispari = alert("dispari");
    // }
    // controllo addizione se è pari stampa un messaggio 
    if (addizione % 2 == 0) {
        alert ("pari")
        return "pari"
    }
    // altrimenti un'altro
    else {
        alert ("dispari")
        return "dispari"
    }
    
}
const vittoria = vincitore(somma);
// Dichiariamo chi ha vinto.


// if (pOd == pari) {
//     const haiVinto = alert("SEI UN MOSTRO");
// }
// else if (pOd == dispari) {
//     haiVinto = alert("SEI UN MOSTRO");
// }
// else {
//     const haiPerso = alert("FAI RIDERE");
// }

// controllo se la scelta dell'utente è uguale all'esito
if (pOd == vittoria){
    alert("hai vinto")
}
else {
    alert ("hai perso")
}



