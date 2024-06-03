// Tehtävä 1: Olion luominen ja tulostaminen
// Задача 1: Создание и печать объекта

/*
Luo olio nimeltään `henkilö` ominaisuuksilla: `nimi` asetettuna "Aleksi" ja `ikä` asetettuna 30.
Tulosta tämä olio konsoliin.
*/

/*
Создайте объект с именем «person» со свойствами: для «name» установлено значение «Alex», а для «age» установлено значение 30.
Выведите этот объект на консоль.
*/

// Kirjoita olio tähän
// Записываем сюда объект

const person = {
  name: "Alex",
  age: 30,
};

console.log(person);

// Tehtävä 2: Olio-ominaisuuksien käyttäminen
// Задача 2: Использование свойств объекта
/*
Käytä ja kirjaa `nimi` ja `ikä` henkilö-oliosta.
Используйте и записывайте `name` и `age` из объекта person.
*/
// Kirjoita koodisi tähän

console.log(person.name);
console.log(person.age);

// Tehtävä 3: Olion ominaisuuksien muokkaaminen
// Задача 3: Редактирование свойств объекта
/*
Päivitä `henkilö`-olio: aseta `ikä` arvoon 31. Lisää sitten uusi ominaisuus `maa` asetettuna "Kroatia".
Kirjaa päivitetty olio.
*/
/*
Обновите объект `person`: установите для `age` значение 31. Затем добавьте новое свойство `country`, для которого установлено значение "Хорватия".
Зарегистрируйте обновленный объект.
*/
// Kirjoita koodisi tähän

(person.age = 31), (person.country = "Kroatia"), console.log(person);

// Tehtävä 4: Sisäkkäiset oliot
// Упражнение 4: Вложенные сущности
/*
Luo olio `opiskelija` ominaisuuksilla: `nimi` arvolla "Emilia" ja `tiedot` oliona, jossa ominaisuudet `ikä` asetettuna 22 ja `kurssi` asetettuna "JavaScript".
Kirjaa `opiskelijan` `kurssi`.
Odotettu tulos: "Kurssi: JavaScript"

Создайте объект «студент» со свойствами: «имя» как «Эмилия» и «данные» как объект со свойствами «возраст», установленными на 22, и «курс», установленными на «JavaScript».
Запишите ``студент'' ``курс''.
Ожидаемый результат: «Курс: JavaScript»
*/
// Kirjoita olio ja koodisi tähän

const student = {
  name: "Emilia",
  properties: {
    age: 22,
    course: "JavaScript",
  },
};
console.log("Course: ", student.properties.course);

// Tehtävä 5: Ominaisuuksien poistaminen
// Задача 5: Удаление свойств
/*
Poista `henkilö`-oliosta ominaisuus `ikä`. Kirjaa saatu olio.
Odotettu tulos: { nimi: "Aleksi", maa: "Kroatia" }
Удалите свойство age из объекта person. Зафиксируйте полученный объект.
Ожидаемый результат: {имя: «Алекси», страна: «Хорватия» }
*/
// Kirjoita koodisi tähän

delete person.age;
console.log(person);

// Tehtävä 6: Olion avaimet ja arvot
// Задача 6: Ключи и значения объекта
/*
Kirjaa kaikki ominaisuuden nimet (avaimet) `henkilö`-oliosta, sitten kirjaa kaikki ominaisuuden arvot.
Odotetut tulokset:
Avaimet: nimi, maa
Arvot: Aleksi, Kroatia

Запишите все имена свойств (ключи) из объекта person, а затем запишите все значения свойств.
Ожидаемые результаты:
Ключи: имя, страна
Ценности: Алекси, Хорватия
*/
// Kirjoita koodisi tähän

console.log("Avaimet:", Object.keys(person).join(", "));
console.log("Arvot:", Object.values(person).join(", "));

// Tehtävä 7: Olion metodien käyttäminen
// Задача 7: Использование методов объекта
/*
Määritä metodi `tervehdi` sisälle `henkilö`-olioon, joka palauttaa "Hei, nimeni on Aleksi".
Kutsu tätä metodia ja kirjaa tulos.
Odotettu tulos: "Hei, nimeni on Aleksi"

Определите метод Greet внутри объекта person, который возвращает «Привет, меня зовут Алекси».
Вызовите этот метод и запишите результат.
Ожидаемый результат: «Привет, меня зовут Алекси»
*/
// Muokkaa henkilö-oliota ja kirjoita metodin kutsuminen tähän
// Редактируем объект person и записываем сюда вызов метода

person.greet = function () {
  return `Hei, nimeni on ${this.name}`;
};
console.log(person.greet());
