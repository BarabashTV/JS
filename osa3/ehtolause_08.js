/**
Kirjoita funktio nimeltä pluralize, joka:

Hyväksyy kaksi argumenttia: substantiivin ja numeron.
Palauttaa merkkijonon, joka yhdistää numeron ja sopivasti taipuvan muodon substantiivista, kuten '5 kissaa' tai '1 koira'.

// Treenaa: Keksi itse samanlainen funktio eri nimellä.

// Kutsu tekemääsi funktiota
 */

function pluralize(substantiivi, määrä) {
  if (määrä === 0) {
    return substantiivi;
  } else {
    return määrä + " " + substantiivi;
  }
}

console.log("Minulla on " + pluralize("kala", 0));
console.log("Minulla on " + pluralize("koira", 1));
console.log("Minulla on " + pluralize("papukaija", 7));
