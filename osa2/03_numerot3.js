/*
- Luo muuttuja nimeltä 'num1' ja anna sille liukulukuarvo.
- Luo muuttuja nimeltä 'num2' ja anna sille eri liukulukuarvo.

- Pyöristä sekä 'num1' että 'num2' lähimpään kokonaislukuun ja tallenna tulokset muuttujiin 'roundedNum1' ja 'roundedNum2'.
- Laske neliöjuuri 'roundedNum1':stä ja tallenna se muuttujaan nimeltä 'sqrtNum1'.
- Etsi suurempi numero 'roundedNum1':n ja 'roundedNum2':n välillä ja tallenna se muuttujaan nimeltä 'maxNum'.

- Käytä console.log() -funktiota tulostamaan 'roundedNum1', 'roundedNum2', 'sqrtNum1' ja 'maxNum' konsoliin.
- Käytä typeof operaattoria tarkistaaksesi jokaisen uuden muuttujan tietotyypin ja tulosta tulos käyttäen console.log().
*/

let num1 = 5.135;
let roundedNum1 = Math.round(num1);
console.log("roundedNum1 on:", roundedNum1);
console.log(typeof roundedNum1);

let num2 = 11.384;
let roundedNum2 = Math.round(num2);
console.log("roundedNum2 on:", roundedNum2);
console.log(typeof roundedNum2);

let sqrtNum1 = Math.sqrt(roundedNum1);
console.log("sqrtNum1 on:", sqrtNum1);
console.log(typeof sqrtNum1);

let maxNum = Math.max(roundedNum1, roundedNum2);
console.log("maxNum on:", maxNum);
console.log(typeof maxNum);
