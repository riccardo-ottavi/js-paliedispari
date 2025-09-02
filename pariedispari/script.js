//scelta utente e inserimento numero
let userChoice = prompt("scegli 1 per pari o 2 per dispari");
while (userChoice != "pari" && userChoice != "dispari"){
    console.log("inserisci una scelta valida")
}

let userNum = prompt("inserisci un numero da 1 a 5");
while (userChoice < 1 && userChoice > 5){
    console.log("inserisci una scelta valida")
}
console.log(userChoice, userNum);
// genera e somma nuovo numero

//stabilisci se pari o dispari (funzione)

//dichiara il vincitore