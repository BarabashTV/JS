// Harjoitus 1: Määritä taulukon pituus ja ehto tarkistus
// Упражнение 1. Определение длины массива и проверка условия
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
/*
Luo funktio nimeltä myAlphabetLength, joka kirjaa taulukon pituuden.
Sisällytä myös if-lauseke tarkistaaksesi, onko taulukon pituus alle 5.
Odotettu tulos: 
"Taulukon myAlphabet pituus: 7"
"Taulukon pituus on suurempi tai yhtä suuri kuin 5."
*/
/*
Создайте функцию myAlphabetLength, записывающую длину массива.
Также включите оператор if, чтобы проверить, меньше ли длина массива 5.
Ожидаемый результат:
"Длина таблицы myAlphabet: 7"
«Длина массива больше или равна 5».
*/
// Kirjoita funktiosi tähän

let myAlphabetLength = myAlphabet.length;
console.log("Taulukon myAlphabet pituus: ", myAlphabetLength);
if (myAlphabetLength >= 5) {
  console.log("Taulukon pituus on suurempi tai yhtä suuri kuin 5");
} else {
  console.log("Tauluko on lyhyt");
}

// Harjoitus 2: Käy läpi taulukko ja kirjaa jokainen alkio sen indeksillä
// Упражнение 2. Проходим по массиву и записываем каждый элемент по его индексу
const planets = ["Merkurius", "Venus", "Maa", "Mars", "Jupiter"];
/*
Kirjaa jokainen planeetta taulukossa yhdessä sen indeksin kanssa.
Odotetut tulokset:
"Planeetta: Merkurius, Indeksi: 0"
...
"Planeetta: Jupiter, Indeksi: 4"
*/
/*
Запишите каждую планету в таблицу вместе с ее индексом.
Ожидаемые результаты:
«Планета: Меркурий, Индекс: 0»
...
«Планета: Юпитер, Индекс: 4»
*/
// Kirjoita koodisi tähän
planets.forEach((item, index) => {
  console.log(`Planet: ${item}, index: ${index}`);
});

// Harjoitus 3: Kirjaa taulukon alkiot niiden tyyppeineen
// Упражнение 3. Регистрация элементов массива по их типам
const wowDatatypes = [1, "text", false, null, undefined];
/*
Käy läpi taulukko, kirjaten jokaisen alkion, sen indeksin ja datatyypin.
Odotetut tulokset:
"Alkio: 1, Indeksi: 0, Tyyppi: number"
"Alkio: text, Indeksi: 1, Tyyppi: string"
...
"Alkio: undefined, Indeksi: 4, Tyyppi: undefined"
*/
/*
Выполните итерацию по массиву, отмечая каждый элемент, его индекс и тип данных.
Ожидаемые результаты:
«Элемент: 1, Индекс: 0, Тип: число»
«Элемент: текст, Индекс: 1, Тип: строка»
...
«Элемент: неопределенный, Индекс: 4, Тип: неопределенный»
*/
// Kirjoita koodisi tähän
wowDatatypes.forEach((item, index) => {
  console.log(`Item: ${item}, index: ${index}, type: ${typeof item}`);
});

// Harjoitus 4: Kirjaa taulukon alkiot ilman silmukkaa
// Упражнение 4. Регистрация элементов массива без цикла
let myArr = [1, 2, "One", true];
/*
Kirjaa jokainen alkio tässä taulukossa metodin avulla eli ilman silmukkaa.
Odotetut tulokset: 1, 2, "One", true
*/
/*
Запишите каждый элемент этого массива с помощью метода, т. е. без цикла.
Ожидаемые результаты: 1, 2, «Один», верно.
*/
// Kirjoita koodisi tähän
myArr.forEach((item) => console.log(item));
console.log(myArr.toString());
console.log(myArr.join());

// Harjoitus 5: Etsi yhteiset kurssit kahden opiskelijan välillä
// Упражнение 5. Найдите общие курсы между двумя студентами
let student1Courses = ["Matematiikka", "Englanti", "Ohjelmointi"];
let student2Courses = ["Maantieto", "Espanja", "Ohjelmointi"];
/*
Tunnista ja kirjaa ylös kaikki kurssit, jotka ovat yhteisiä sekä student1Courses- että student2Courses-taulukossa.
Odotettu tulos: "Yhteinen kurssi: Ohjelmointi"
*/
/*
Определите и запишите все курсы, которые являются общими для таблиц Student1Courses и Student2Courses.
Ожидаемый результат: «Общий курс: Программирование»
*/
// Kirjoita koodisi tähän
const yhteinenKurssi = student1Courses.filter((item) =>
  student2Courses.includes(item)
);
console.log("Yhteinen kurssi: ", yhteinenKurssi.toString());

// Harjoitus 6: Kirjaa jokainen taulukon alkion kirjain
// Упражнение 6. Запишите каждую букву элемента массива
let furniture = ["Pöytä", "Tuolit", "Matto"];
/*
Kirjaa ylös jokainen kirjain furniture-taulukon jokaisesta alkioista.
Odotetut tulokset:
"Kirjaimet 'Pöytä'-sanassa: P, ö, y, t, ä"
...
"Kirjaimet 'Matto'-sanassa: M, a, t, t, o"
*/
/*
Запишите каждую букву с каждого элемента мебельного стола.
Ожидаемые результаты:
«Буквы в слове «Таблица»: П, ö, y, t, ä»
...
«Буквы в слове «Ковер»: М, а, т, т, о»
*/
// Kirjoita koodisi tähän

furniture.forEach((item) => {
  console.log(`${item} - sanassa:`, item.split(""));
});

// Harjoitus 7: Suodata positiiviset lämpötilat
// Упражнение 7. Фильтрация положительных температур
let temperatures = [-5, 3, -1, 22, -40, 5, 18];
/*
Kirjoita getPositiveTemperatures-funktio siten, että se palauttaa taulukon, joka sisältää positiiviset lämpötilat (lämpötilat, jotka ovat yli 0).
Odotettu tulos: [3, 22, 5, 18]
*/
/*
Напишите функцию getPositiveTemperatures так, чтобы она возвращала массив, содержащий положительные температуры (температуры больше 0).
Ожидаемый результат: [3, 22, 5, 18]
*/
// Kirjoita koodisi tähän
let getPositiveTemperatures = temperatures.filter((item) => item > 0);
console.log(getPositiveTemperatures);

// Harjoitus 8: Suodata parittomat vuodet
/*
Täydennä getOddYears-funktio siten, että se palauttaa kaikki vuodet, jotka ovat parittomia saamistaan vuosiparametreista. 
Vuodet annetaan taulukkona.
Odotetut tulokset:
getOddYears([2019, 2020, 2021]) -> [2019, 2021]
getOddYears([2000, 2015, 2018, 2020]) -> [2015]
*/
// Упражнение 8. Фильтрация нечетных лет
/*
Завершите функцию getOddYears, чтобы она возвращала все годы, нечетные из полученных параметров года.
Годы указаны в таблице.
Ожидаемые результаты:
getOddYears([2019, 2020, 2021]) -> [2019, 2021]
getOddYears([2000, 2015, 2018, 2020]) -> [2015]
*/
// Kirjoita koodisi tähän

let getOddYears = (arr) => arr.filter((item) => item % 2 !== 0);

// Testaus - Poista alta kommenttimerkinnät, niin voit testata funktion toimintaa
// Тестирование. Раскомментируйте ниже, чтобы можно было протестировать функциональность.

console.log(getOddYears([2019, 2020, 2021]));
console.log(getOddYears([2000, 2015, 2018, 2020]));
