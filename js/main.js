// const nome = prompt("Inserisci il tuo nome");
// const cognome = prompt("Inserisci il tuo cognome");
// let colorePreferito = prompt("Inserisci il tuo colore preferito");

// const booleanClass = 76;
// let printPhrase = nome +''+ cognome +''+ colorePreferito +''+ booleanClass;

// console.log(printPhrase);

// document.querySelector("h1").innerHTML = printPhrase;
// document.getElementById('print-phrase').innerHTML = printPhrase; 

const userChoice = prompt("Scegli tra pari e dispari");
console.log('la scelta dell\'utente è', userChoice);
const userNumber = Number( prompt("Scegli un numero tra 0 e 5"));
console.log('il numero dell\'utente', userNumber);
const cpuNumber = Math.floor(Math.random() * 6);
console.log('il Numero della CPU', cpuNumber);
const sum = userNumber + cpuNumber;
console.log(sum);

// se sum / 2 da resto 0 allora il numero è pari
// altrimenti il numero è dispari
let result;
if(sum % 2 === 0){
    result ="pari";
}else {
    result = "dispari";
}

console.log(result);

if(userChoice === result){
    alert('Hai vinto!!!');
}else{
    alert('Hai perso!!!');
}
