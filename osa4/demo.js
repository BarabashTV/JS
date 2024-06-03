
//извлечение элементов из dom:
const text = document.querySelector('h1');
const text2 = document.querySelector('#first');
const text3 = document.querySelector('.second');

const longText = document.querySelectorAll('p');

console.log(text.textContent);
console.log(text2.textContent);
console.log(text3.textContent);
console.log(longText);

// определение функции:
const myFunction1 = () => alert('onclick event, funktio sisällytetty HTML-elementtiin');

const myFunction2 = () => alert('addeventlistener eli tapahtumankäsittelijä esimerkki');

// вот как выбирается элемент кнопки:
const button = document.querySelector('#myButton');

// используем обработчик событий:
button.addEventListener("click", myFunction2);

    <script src="script.js"></script>
  </body>
</html>