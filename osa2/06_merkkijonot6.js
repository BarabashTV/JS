/**
Muokkaa funktio skipFirstCharacter  palauttamaan merkkijono, jossa on saamansa merkkijono ilman sen ensimmäistä merkkiä
// Treenaa: Keksi itse samanlainen funktio eri nimellä
// Kutsu tekemääsi funktiota
 */
function skipFirstCharacter(text) {
  return text.slice(1);
}

console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"

function delFirstSymbol(text) {
  return text.slice(1);
}
console.log(delFirstSymbol("1First"));
console.log(delFirstSymbol("2Sekond"));
