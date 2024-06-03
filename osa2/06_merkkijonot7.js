/**
Moukkaa funktio concatInitials palauttamaan merkkijono, joka yhdistää parametrit firstNameInitial ja lastNameInitial.
 // Treenaa: Keksi itse samanlainen funktio eri nimellä
// Kutsu tekemääsi funktiota*/

function concatInitials(firstNameInitial, lastNameInitial) {
  return firstNameInitial + lastNameInitial;
}

console.log(concatInitials("J", "D")); // "JD"
console.log(concatInitials("S", "B")); // "SB"

function concatWords(color, item) {
  return color + item;
}
console.log(concatWords("white", "rabbit"));
