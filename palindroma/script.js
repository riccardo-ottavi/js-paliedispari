//input utente
let userInput = prompt("Inserisci una parola");

function isPalindroma(word){
    for(let i = 0; i < word.length; i++){
        if(word[i] === word[word.length-1-i]){
            return isPalindroma = true;
        }else {
            return isPalindroma = false;
        }
    }
}

isPalindroma(userInput);

if (isPalindroma === true) {
    console.log("La parola è palindroma");
}else{
    console.log("La parola non è palindroma");
}