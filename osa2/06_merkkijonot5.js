/**
Muokkaa funktio getLastCharacter palauttamaan saamansa merkkijonon viimeinen merkki
   // Treenaa: Keksi itse samanlainen funktio eri nimellä
  // Kutsu tekemääsi funktiota
  */

function getLastCharacter(name) {
  return name[name.length - 1];
}

console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
console.log(getLastCharacter("Charley")); // "y"

function lastSymbol(word) {
  return word[word.length - 1];
}
console.log(lastSymbol("pyörä"));
