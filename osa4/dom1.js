/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin tekstisisällön painamalla nappia tekstiksi "Hei, maailma!".
Напишите код JavaScript, который выбирает идентификатор содержимого с помощью метода getElementById.
Напишите функцию, которая обновляет текстовое содержимое выбранного элемента при нажатии кнопки на текст «Привет, мир!».
*/

const changeText = () => {
  const textPlacement = document.getElementById("content");
  textPlacement.innerHTML = "Hei, maailma!";
};

// Saman voi ilmaista myös ilman muuttujaa näin
/*
const changeText = () => {
  document.getElementById('content').textContent= "Hei, maailma!";
}
*/
