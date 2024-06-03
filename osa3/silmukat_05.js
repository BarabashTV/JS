// Kehitä ohjelma, joka jatkaa käyttäjän pyytämistä syöttämään numeroita, kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää kaikkien syötettyjen numeroiden keskiarvo.

// Разработать программу, которая просит пользователя вводить числа до тех пор, пока пользователь не введет 0.
// На этом этапе программа перестает работать.
// После завершения программа должна вычислить и отобразить среднее значение всех введенных чисел.

let sum = 0;
let count = 0;
let number;

do {
  number = Number(prompt("Enter number:"));
  console.log("number is: ", number);

  if (!isNaN(number)) {
    sum += number;
    count++;
  }
} while (number !== 0);
console.log("Summa: ", sum);

if (count > 0) {
  let average = sum / count;
  let averageEnd = average.toFixed(0);
  console.log("Average value: ", averageEnd);

  alert(`Average value: ${averageEnd}`);
} else {
  alert("You didn't enter a number.");
}
