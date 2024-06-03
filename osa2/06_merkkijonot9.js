/**
Muokkaa funktio getFullName function palauttamaan interpolation avulla so that it returns the person's full name by utilizing string interpolation.
   // Treenaa: Keksi itse samanlainen funktio eri nimellä 
  // Kutsu tekemääsi funktiota*/

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(getFullName("Sam", "Doe")); // "Sam Doe"
console.log(getFullName("Alex", "Blue")); // "Alex Blue"

function getFullAddress(city, street) {
  return `${city} ${street}`;
}
console.log(getFullAddress("Helsinki", "Pasilankatu"));
