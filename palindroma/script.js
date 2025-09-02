//input utente
let userInput = prompt("Inserisci una parola");

//verifica se palindroma
let isPalindroma = false;
for (let i = 0; i < userInput.length; i++){
    if (userInput[i] === userInput[userInput.length-i-1]){
        isPalindroma = true;
        
    }else {
        isPalindroma = false;
    }
}

if(isPalindroma === true) {
    console.log("La parola è palindroma!");
}else {
    console.log("la parola non è palindroma!");
}