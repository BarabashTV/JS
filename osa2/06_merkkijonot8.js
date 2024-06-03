/**
Muokkaa funktio sayHello jotta se sisällyttää parametrina saamansa nimen tervehdykseen. 

  // Treenaa: Keksi itse samanlainen funktio eri nimellä ja tervehdyksellä
  
  // Kutsu tekemääsi funktiota
 */
function sayHello(name) {
  return `Hello` + " " + name;
}

console.log(sayHello("Alex")); // "Hello Alex"
console.log(sayHello("Sam")); // "Hello Sam"

function writeAddress(street) {
  return `Address` + " " + street;
}
console.log(writeAddress("Pasilankatu"));
console.log(writeAddress("Savonkatu"));
