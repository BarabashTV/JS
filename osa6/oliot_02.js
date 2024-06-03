/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `kirjasto`, joka edustaa kirjojen kokoelmaa.
Jokaisella kirjalla tulisi olla ominaisuudet `otsikko`, `kirjailija` ja `julkaisuvuosi`.
Lisää ainakin kaksi kirja-oliota tähän kokoelmaan.
Создайте таблицу JavaScript с именем «library», которая представляет коллекцию книг.
Каждая книга должна иметь свойства «название», «автор» и «год публикации».
Добавьте в эту коллекцию как минимум два книжных объекта.
*/
// Sinun koodisi tähän
let library = {
  book1: {
    title: "Three Musketeers",
    autor: "Alexandr Duma",
    year: 1994,
  },
  book2: {
    title: "Deniskin's stories",
    autor: "Viktor Dragoonsky",
    year: 2022,
  },
};
console.log("tehtävä 1:", library);

/* Tehtävä 2
Käytä `kirjaston` ensimmäisen kirjan `otsikko`-ominaisuutta ja tulosta se konsoliin.
Muuta toisen kirjan `julkaisuvuotta` uuteen vuoteen kokoelmassa ja kirjaa päivitetty kirja-olio konsoliin.
Используйте свойство title первой книги в библиотеке и выведите его на консоль.
Измените «год публикации» второй книги на новый год в коллекции и зарегистрируйте обновленный объект книги в консоли.
*/
// Sinun koodisi tähän
console.log("tehtävä 2:", library.book1.title);

library.book2.year = 2020;
console.log(library.book2);

/* Tehtävä 3
Käytä pistenotaatiota lisätäksesi uuden ominaisuuden `lajityypit` (merkkijonotaulukko) ensimmäiseen kirjaan `kirjasto`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-ominaisuuden `onSaatavilla` samaan kirjaan, ilmaisten sen saatavuuden.
Используйте точечную нотацию, чтобы добавить новое свойство «genretypes» (массив строк) к первой книге в массиве «library».
Используйте квадратные скобки, чтобы добавить к той же книге логическое свойство onAvailable, указывающее на ее доступность.
*/
// Sinun koodisi tähän
library.book1.genretypes = "Adventure";
console.log("tehtävä 3:", library.book1);

library.book1["onAvailable"] = true;
console.log(library.book1);

/* Tehtävä 4
Määritä konstruktorifunktio nimeltä `Kirja`, joka voi luoda uusia kirja-olioita ominaisuuksilla `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit`.
Käyttäen `Kirja`-konstruktoria, luo uusi kirja-olio annetuilla syöttöarvoilla ja lisää se `kirjasto`-kokoelmaan.
Определите функцию-конструктор под названием «Книга», которая может создавать новые объекты Книги со свойствами «название», «автор», «год публикации» и «типы жанра».
Используя конструктор «Book», создайте новый объект книги с заданными входными значениями и добавьте его в коллекцию «library».
*/
// Sinun koodisi tähän
class Book {
  constructor(title, autor, year, genretypes) {
    this.title = title;
    this.autor = autor;
    this.year = year;
    this.genretypes = genretypes;
  }
}
library.book3 = new Book("The Cherry Orchard", "A.P. Chehov", "1994", "Drama");

console.log("tehtävä 4:", library);

/* Tehtävä 5
Kirjoita funktio nimeltä `luoKirja`, joka ottaa parametrit `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit` (taulukko).
Funktion tulisi palauttaa uusi kirja-olio näillä ominaisuuksilla.
Testaa `luoKirja`-funktiota luomalla uusi kirja-olio käyttäjän antamilla syötteillä ja kirjaa uusi kirja-olio konsoliin.
Напишите функцию createBook, которая принимает параметры «название», «автор», «год публикации» и «типы жанров» (таблица).
Функция должна возвращать новый объект книги с этими свойствами.
Протестируйте функцию luoKirja, создав новый объект книги с входными данными, предоставленными пользователем, и зарегистрируйте новый объект книги в консоли.
*/
// Sinun koodisi tähän
function createBook(title, autor, year, genretypes) {
  return {
    title: title,
    autor: autor,
    year: year,
    genretypes: genretypes,
  };
}

library.book4 = new createBook(
  "Myavka and Tyavka",
  "Timo Parvela",
  "2021",
  "For children"
);
console.log("tehtävä 5:", library.book4);

/* Tehtävä 6
Muunna `kirjasto`-kokoelma JSON-merkkijonoksi ja kirjaa se konsoliin.
Tee JSON-merkkijonosta JavaScript-olio ja kirjaa ensimmäisen kirjan otsikko konsoliin.
Преобразуйте коллекцию библиотеки в строку JSON и запишите ее на консоль.
Превратите строку JSON в объект JavaScript и запишите название первой книги в консоль.
*/
// Sinun koodisi tähän

const libraryString = JSON.stringify(library);
console.log("tehtävä 6:", libraryString);

const libraryObject = JSON.parse(libraryString);
console.log(libraryObject.book1.title);
