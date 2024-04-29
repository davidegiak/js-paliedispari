// Creare una funzione per capire se la parola inserita è palindroma.

function parola (string) {
    
    const stringSplit = string.split("");
    
    const stringReverse = stringSplit.reverse();
    
    const joinString = stringReverse.join("")
    
    
    if (joinString == string) {
        alert("SEI UN CAPO")
    }
    else{
        alert("LOOSER")
    }
    
   
}

// Chiedere all’utente di inserire una parola.
const parolaUser = prompt("scrivi qui la tua parola");

const risultato = parola(parolaUser);


// Sono accettate solo soluzioni che fanno uso del ciclo.
// Eventuali soluzioni più "comode" potete aggiungere come extra in un commit separato solo DOPO.
