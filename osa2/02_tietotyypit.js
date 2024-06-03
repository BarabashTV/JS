/*
- Luo muuttuja nimeltään age ja anna sille kokonaislukuarvo.
- Luo muuttuja nimeltään name ja anna sille merkkijonoarvo.
- Luo muuttuja nimeltään isStudent ja anna sille totuusarvo (boolean).
- Luo muuttuja nimeltään hobbies ja anna sille taulukko, joka sisältää muutamia merkkijonoarvoja (esim. harrastukset).
- Luo info-olio eli objekti, jossa on kaksi ominaisuutta: schoolName (merkkijono) ja grade (kokonaisluku).

- Käytä console.log() -metodia tulostamaan jokainen muuttuja konsoliin.

- Käytä typeof-operatoria tarkistaaksesi jokaisen muuttujan tietotyypin ja tulosta tulos console.log()-metodilla.
*/

let age = 25;
let name = "John";

let isStudent = false;

let hobbies = ["sähly", "pesäpallo", "koris"];
let info = { schoolName: "BC", grade: 15 };

console.log("hobbies:", hobbies);
console.log("info:", info);

console.log("boolean arvo isStudent:", isStudent);
console.log("hobbies tyyppi:", typeof hobbies);
console.log("info tyyppi:", typeof info);
