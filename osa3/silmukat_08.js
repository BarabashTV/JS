// Tee ohjelma, joka kysyy aluksi käyttäjältä, kuinka monta numeroa he haluavat syöttää.
//Saatuaan tämän tiedon ohjelman tulisi pyytää käyttäjää syöttämään jokainen näistä numeroista.
//Kun kaikki numerot on syötetty, ohjelman tulisi selvittää ja näyttää käyttäjän antamista numeroista pienin ja suurin.

// Создать программу, которая сначала спрашивает пользователя, сколько чисел он хочет ввести.
//После получения этой информации программа должна предложить пользователю ввести каждое из этих чисел.
//Когда все числа введены, программа должна найти и отобразить наименьшее и наибольшее из введенных пользователем чисел.

let count = prompt("How many numbers do you want to enter?");
let numbers = [];

for (let i = 0; i < count; i++) {
  let num = prompt(`Enter number №${i + 1}:`);
  numbers.push(Number(num));
}

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Min number: ", min);
console.log("Max number: ", max);
