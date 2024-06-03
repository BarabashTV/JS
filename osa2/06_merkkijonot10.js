/**
Muokkaa funktio capitalize palauttamaan saamansa sana kirjoitettuna vain isolla alkukirjaimella
 // Treenaa: Keksi itse samanlainen funktio eri nimellä
// Kutsu tekemääsi funktiota*/

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
}

console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"

function lowerFirstLetter(word) {
  return word.charAt(0).toLowerCase() + word.substring(1).toUpperCase();
}
console.log(lowerFirstLetter("COlLegE"));
