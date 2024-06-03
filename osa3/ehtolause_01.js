/**
Toteuta funktio canVote siten, että se palauttaa arvon true aina kun ikä on 18 tai enemmän ja false muissa tapauksissa.
// Treenaa: Keksi itse samanlainen funktio eri nimellä
// Kutsu tekemääsi funktiota*/

function canVote(age) {
  return age >= 18;
}

console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false

function eläkäinen(age) {
  return age >= 65;
}
console.log(eläkäinen(7));
console.log(eläkäinen(69));
console.log(eläkäinen(65));
