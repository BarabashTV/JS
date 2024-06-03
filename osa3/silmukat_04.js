// Kehitä ohjelma, joka pyytää käyttäjää syöttämään 20 lukua. Kun kaikki luvut on syötetty,
//ohjelman tulisi näyttää, kuinka monta näistä luvuista on parillisia.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

// Разработать программу, которая просит пользователя ввести 20 цифр. После того, как все числа введены,
//программа должна показать, сколько из этих чисел четные.
// Поскольку используется приглашение, это работает в браузере через html-страницу.

let parilliset = 0;

for (let kertalaskuri = 0; kertalaskuri < 20; kertalaskuri++) {
  let syote = Number(prompt("syotä numero"));
  console.log("syote on: ", syote);

  if (syote % 2 == 0) {
    parilliset++;
  }
}
console.log("parilliset määrä:", parilliset);

let laskuri = 0;
let parillisetLuvut = 0;

do {
  let input = Number(prompt("Anna lisää likuja"));
  if (input % 2 == 0) {
    parillisetLuvut++;
  }
  laskuri++;
} while (laskuri < 20);
console.log("Parillisia likija oli " + parillisetLuvut);

// можно добавить чтобы выдавал ошибку при вводе буквы вместо числа
//if (syote == Nan) {
//    i--;
//  }
