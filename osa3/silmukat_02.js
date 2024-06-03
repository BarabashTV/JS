// Tee ohjelma, joka tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä, esittäen ne seuraavalla tavalla
// 2, 98, 4, 96, 6, 94 ja niin edelleen. Tulosta luvut samalle riville.
// Saat itse valita käytkö luvut läpi kaksi kertaa vai lopetatko lukuun 50.

// Создать программу, которая печатает все четные целые числа от 1 до 99, представляя их следующим образом
// 2, 98, 4, 96, 6, 94 и так далее. Выведите числа в одной строке.
// Вы можете выбрать, будете ли вы проходить главы дважды или остановитесь на главе 50.

let array = [];
for (let i = 2; i < 100; i += 2) {
  array.push(i, 100 - i);
  console.log(array);
}

array.length = 49;
let answer = array.join(", ");
console.log(answer);
