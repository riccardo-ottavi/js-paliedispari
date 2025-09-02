//scelta utente e inserimento numero
let userChoice = prompt("scegli pari o dispari");
while (userChoice != "pari" && userChoice != "dispari"){
    console.log("inserisci una scelta valida")
}

if (userChoice === "pari") {
    console.log("hai scelto pari");
}else if(userChoice === "dispari") {
    console.log("hai scelto dispari");
}

//input numero
let userNum = prompt("inserisci un numero da 1 a 5");
while (userChoice < 1 && userChoice > 5){
    console.log("inserisci una scelta valida")
}

console.log("Hai scelto " + userNum);

// genera e somma nuovo numero
let randomNum =  (Math.random() *5 )+ 1;
randomNum = Math.floor(randomNum);
console.log("E' stato generato il " + randomNum);





//stabilisci se pari o dispari (funzione)
function isEven() {
    
}

//dichiara il vincitore