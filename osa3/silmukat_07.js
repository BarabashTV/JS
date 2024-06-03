//Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä
//tulostaa pienimmän ja suurimman numeron.

/* VINKKI: talleta annetut luvut taulukkoon, jotta saat niistä suurimman ja pienimmän arvon 
Esimerkki taulukon määrittely ennen silmukkaa näin 
let numerot = []
taulukkoon arvojen lisääminen silmukan sisällä toimii näin
numerot += annettuArvo 
Käydään taulukot läpi osassa 5. */

let summa = 0;
let lukujenMaara = 0;
let maxLuku = -Infinity;
let minLuku = Infinity;

for (let i = 0; i < 5; i++) {
  let syote = Number(prompt("Anna lukuja laskuihini, kiitos kaunis!"));

  if (isNaN(syote)) {
    console.log(syote);
    continue;
  } else {
    summa += syote;
    lukujenMaara++;
    console.log("Summa nyt:", summa);
    console.log("Lukujen määrä nyt:", lukujenMaara);

    if (syote > maxLuku) {
      maxLuku = syote;
    }
    if (syote < minLuku) {
      minLuku = syote;
    }
  }
}

let keskiarvo = summa / lukujenMaara;
console.log("Lukujen summa on:", summa);
console.log("Lukujen keskiarvo on:", keskiarvo);
console.log(" Isoin annattu luku on:", maxLuku);
console.log(" Pienin annattu luku on:", minLuku);
