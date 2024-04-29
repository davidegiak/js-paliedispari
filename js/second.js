// Dichiariamo chi ha vinto.

// L’utente sceglie su cosa puntare: pari o dispari.

const pOd = prompt("pari o dispari ?");

// L'utente inserisce un numero da 1 a 5.

const oneToFive = prompt ("inserisci un numero da 1 a 5");
const oneToFiveNumber = Number(oneToFive);
console.log(oneToFiveNumber);
// Il computer estrae un numero casuale sempre tra 1 e 5 (usando una funzione).

function casualNumbers(max) {
    return Math.floor(Math.random() * max);
}

const casual = alert(Number(casualNumbers(6)));
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).


function add(num1, num2) {
    return num1 + num2;
}

const somma = add(oneToFiveNumber, casual);
console.log(somma);

// function vincitore(addizione) {
//     if (somma % 2 === 0) {
//         const pari = alert("pari");
//     }
//     else {
//         const dispari = alert("dispari");
//     }
// }
// const vittoria = vincitore(somma)

// if (pOd == pari || pOd == dispari ) {
//     const haiVinto = alert("SEI UN MOSTRO")
// }

// else {
//     const haiPerso = alert("FAI RIDERE")
// }


