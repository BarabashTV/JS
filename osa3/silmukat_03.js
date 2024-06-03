// Luo ohjelma, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä) ja ajan (tunteina) ja laskee sitten keskinopeuden.
//Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi. Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä.
// Tehdään tämä opettajan esimerkkinä

// Создать программу, которая постоянно запрашивает у пользователя расстояние (в километрах) и время (в часах), а затем рассчитывает среднюю скорость.
//Программа должна остановиться, когда пользователь вводит 0 в качестве расстояния. Получив расстояние 0, программа не должна запрашивать дальнейший ввод.
// Давайте сделаем это на примере учителя

let etaisyys, aika;

while (etaisyys !== 0) {
  etaisyys = Number(prompt("Syötä etäisyys kilometreinä"));

  if (etaisyys === 0) {
    console.log("Etäisyys on 0 - peli päättyy");
    break;
  }

  aika = Number(prompt("Syötä aika tunteina"));
  let keskinopeus = etaisyys / aika;
  console.log("Keskinopeus on:", keskinopeus);
}
