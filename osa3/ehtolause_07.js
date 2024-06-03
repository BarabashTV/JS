/**
Kehitä funktio nimeltä assignGrade, joka:

Hyväksyy yhden argumentin, numeerisen pistemäärän.
Palauttaa kirjainarvosanan pistemäärän perusteella seuraavasti:
- 'A' pistemäärille 90 tai enemmän.
- 'B' pistemäärille 80-89.
- 'C' pistemäärille 70-79.
- 'D' pistemäärille 60-69.
- 'F' pistemäärille alle 60.
// Treenaa: Keksi itse samanlainen funktio eri nimellä. Pisterajoja voi olla vähemmän kuin yllä.

// Kutsu tekemääsi funktiota
*/

function assignGrade(number) {
  if (number > 90) {
    return "A";
  } else if ((number >= 80, number >= 89)) {
    return "B";
  } else if ((number >= 70, number >= 79)) {
    return "C";
  } else if ((number >= 60, number >= 69)) {
    return "D";
  } else return "E";
}

console.log("Sinä sait " + assignGrade(95)); // Sinä sait A
console.log("Sinä sait " + assignGrade(81)); // Sinä sait B
console.log("Sinä sait " + assignGrade(72)); // Sinä sait C
console.log("Sinä sait " + assignGrade(64)); // Sinä sait D
console.log("Sinä sait " + assignGrade(42)); // Sinä sait F
