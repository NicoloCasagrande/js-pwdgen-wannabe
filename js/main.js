
const nome = prompt("Inserisci il tuo nome");
const cognome = prompt("Inserisci il tuo cognome");
let colorePreferito = prompt("Inserisci il tuo colore preferito");

const booleanClass = 76;
let printPhrase = nome +''+ cognome +''+ colorePreferito +''+ booleanClass;

console.log(printPhrase);

document.querySelector("h1").innerHTML = printPhrase;
document.getElementById('print-phrase').innerHTML = printPhrase; 