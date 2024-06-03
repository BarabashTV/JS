/* 
Kirjoita JavaScript-koodi, joka lisää tapahtumankäsittelijän napille.

Kun nappia klikataan, funktion tulisi:
- Hakea arvo syötekentästä.
- Luoda uusi <li> elementti ja asettaa sen tekstisisältö syötekentän arvoksi.
- Lisätä uusi <li> elementti hedelmälistan <ul>-elementtiin.

Varmista, että syötekenttä tyhjennetään hedelmän lisäämisen jälkeen.
*/
/*
Напишите код JavaScript, который добавляет к кнопке обработчик событий.

При нажатии кнопки функция должна:
- Получите значение из поля ввода.
— Создайте новый элемент <li> и установите его текстовое содержимое в качестве значения поля ввода.
— Добавьте новый элемент <li> в элемент <ul> списка фруктов.

Убедитесь, что поле ввода очищено после добавления фруктов.
*/

const button = document.querySelector("addFruitBtn");

const addToList = () => {
  const fruitInput = document.querySelector("#fruitInput");
  const fruitList = document.querySelector("#fruitList");

  if (fruitInput.value) {
    const li = document.createElement("Li");
    li.textContent = FruitInput.value;
    fruitList.appendChild(li);
    fruitInput.value = "";
  } else {
    alert("Lisää hedelmän nimi, kiitos");
  }
};

button.addEventListener("click", addToList);
