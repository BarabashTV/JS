/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/

/* Разработать программу, которая первоначально запрашивает у пользователя одно число. После этого программа спрашивает, хочет ли пользователь
продолжить ввод цифр, задав следующий вопрос: «Хотите продолжить ввод цифр?» (н/д)».
Если пользователь отвечает «д», программа запрашивает другой номер. Если ответ «н», программа завершается.
После завершения программа вычисляет и отображает среднее значение всех введенных чисел.*/

let sum = 0;
let count = 0;

do {
  let number = Number(prompt("Enter number: "));
  console.log("number is: ", number);

  if (!isNaN(number)) {
    sum += number;
    count++;
    console.log("Summa: ", sum);
  } else {
    alert("Mistake! Enter number.");
  }

  let answer = prompt("Do you want enter next number? (y/n)");
  if (answer !== "y") {
    break;
  }
} while (true);

if (count > 0) {
  let average = sum / count;
  console.log(`Average value: ${average}`);
}
