// Alkuperäinen joukko tiimin jäseniä
let teamMembers = ["Jukka", "Emilia", "Miikka", "Saara"];

// Harjoitus 1: Käy läpi `teamMembers` ja kirjaa jokainen nimi konsoliin.
// Упражнение 1. Перебираем `teamMembers` и записываем каждое имя в консоль.
// Kirjoita koodisi tähän:
console.log("Nimit: ", teamMembers);

// Harjoitus 2: Poista ensimmäinen jäsen taulukosta.
// Упражнение 2. Удаление первого члена массива.
// Kirjoita koodisi tähän:
teamMembers.shift();
console.log("Nimit: ", teamMembers);

// Harjoitus 3: Poista taulukon viimeinen jäsen.
// Упражнение 3. Удаление последнего члена массива.
// Kirjoita koodisi tähän:
teamMembers.pop();
console.log("Nimit: ", teamMembers);

// Harjoitus 4: Lisää uusi jäsen "Aleksi" taulukon alkuun.
// Упражнение 4. Добавьте новый элемент «Алекс» в начало массива.
// Kirjoita koodisi tähän:
teamMembers.unshift("Aleksi");
console.log("Nimit: ", teamMembers);

// Harjoitus 5: Lisää uusi jäsen "Linda" taulukon loppuun.
// Упражнение 5. Добавьте в конец таблицы новый элемент «Линда».
// Kirjoita koodisi tähän:
teamMembers.push("Linda");
console.log("Nimit: ", teamMembers);

// Harjoitus 6: Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä.
// Упражнение 6. Создайте новый массив, не содержащий первых двух элементов.
// Kirjoita koodisi tähän:
let newTeamMembers = teamMembers.splice(2, 2);
console.log("Nimit: ", newTeamMembers);

// Harjoitus 7: Etsi "Miikka" indeksi taulukossa.
// Упражнение 7: Найдите индекс «Миикка» в таблице.
// Kirjoita koodisi tähän:
console.log(newTeamMembers.indexOf("Miikka"));

// Harjoitus 8: Yritä löytää "Jaakko" indeksi (joka ei ole taulukossa).
// Упражнение 8: Попробуйте найти индекс «Яакко» (которого нет в таблице).
// Kirjoita koodisi tähän:
console.log(newTeamMembers.indexOf("Jaakko"));

// Harjoitus 9: Käytä `splice` poistaaksesi "Miikka" ja lisätäksesi "Karoliina" ja "Bettina" hänen tilalleen.
// Упражнение 9. Используйте `splice`, чтобы удалить "Миикку" и добавить вместо нее "Каролиину" и "Беттину".
// Kirjoita koodisi tähän:
newTeamMembers.splice(0, 1, "Karoliina", "Bettina");
console.log("Nimit: ", newTeamMembers);

// Harjoitus 10: Liitä uusi jäsen "Hemmo" taulukon loppuun ja luo uusi taulukko.
// Упражнение 10. Добавьте новый элемент «Hemmo» в конец массива и создайте новый массив.
// Kirjoita koodisi tähän:
newTeamMembers.push("Hemmo");
let newTeamMembers2 = newTeamMembers;
console.log("New Nimit: ", newTeamMembers2);

// Harjoitus 11: Käyttäen `slice` kopioidaksesi koko taulukon
// Упражнение 11: Использование `slice` для копирования всего массива// Kirjoita koodisi tähän:
newTeamMembers2.splice(0, 0);
console.log("Copy array: ", newTeamMembers2);

// Harjoitus 12: Yhdistä taulukot käyttäen `concat`
// Oletetaan, että `newMembers`-taulukko on määritelty
// Упражнение 12. Объединение массивов с помощью `concat`
// Предположим, что массив `newMembers` определен
let newMembers = ["Tiina", "Daniel"];
// Kirjoita koodisi tähän:
let concatenatedArray = newTeamMembers2.concat(newMembers);
console.log("Concatenated Array: ", concatenatedArray);

// Harjoitus 13: Etsi kaikki Jukan esiintymät
// Упражнение 13. Найдите все экземпляры Juka
// Kirjoita koodisi tähän:
let quantityJuka = concatenatedArray.filter((elementti) => elementti == "Juka");
console.log("QuantityJuka: ", quantityJuka);

// Harjoitus 14: Muuta jäsenet `map` avulla kirjoitettavaksi ISOILLA KIRJAIMILLA
// Упражнение 14. Используйте `map` для преобразования членов в ВЕРХНИЙ РЕГИСТР
// Kirjoita koodisi tähän:

let bigNewTeamMembers2 = concatenatedArray.map((elementti) =>
  elementti.toUpperCase()
);
console.log("bigNewTeamMembers2: ", bigNewTeamMembers2);
