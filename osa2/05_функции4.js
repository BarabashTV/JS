/** Harjoitus: Kolmion pinta-ala
 * Tee funktio nimeltä laskeKolmionPintaala, joka ottaa kaksi parametria: kannanPituus ja korkeus.
 * Funktio laskee annetun kolmion pinta-alan kaavalla kannanPituus * korkeus / 2  ja palauttaa sen.
 * Testaa funktiota antamalla sille eri sivun pituuksia ja tulosta pinta-alat konsoliin.
 * Voit käyttää joko nuolifunktiota tai tavallista funktiota*/

function CalculTriangleArea(baseLength, height) {
  return (baseLength * height) / 2;
}
console.log(CalculTriangleArea(3, 8));

CalculTriangleArea = (baseLength, height) => {
  return (baseLength * height) / 2;
};
console.log(CalculTriangleArea(7, 9));
