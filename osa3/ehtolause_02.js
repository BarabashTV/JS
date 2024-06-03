/**
* Tätä ohjelmaa varten tarvitaan verkkosivua, eli se ei toimi pelkästään konsolissa.
* Joten tee ensin html sivu ja linkkaa tämä tiedosto siihen. Prompt-ikkuna aukeaa sivulle, testaa Live serverin avulla.
* Luo ohjelma getTemperature, joka kysyy käyttäjältä lämpötilaa Celsius-asteina ja sitten tulostaa, pitäisikö heidän pukea takki päälle (jos lämpötila on alle 15°C) vai ei.
// Treenaa: Keksi itse samanlainen funktio eri nimellä
// Kutsu tekemääsi funktiota
*/

/** let number = prompt("Mikä on nykyinen lämpötila?", " "); */

function getTemperature(number) {
  if (number >= 15) {
    return "lämmin, ei pukea takki ";
  } else {
    return "Pitää pukea takki ";
  }
}

console.log(getTemperature(9));
console.log(getTemperature(22));
