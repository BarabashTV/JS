/**Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma
 * antaa satunnaisen vastauksen 8-pallosta. Toteuta ohjelma käyttämällä ehtolauseita valitsemaan ja näyttämään yksi useista ennalta määritellyistä vastauksista. */

let text = prompt("Mitä haluat tietää?");
let randomNumber = Math.floor(Math.random() * 8);
let ball = " ";
switch (randomNumber) {
  case 0:
    ball = "Yes definitely";
    break;
  case 1:
    ball = "You may rely on it";
    break;
  case 2:
    ball = "Without a doubt";
    break;
  case 3:
    ball = "Ask again later";
    break;
  case 4:
    ball = "Very doubtful";
    break;
  case 5:
    ball = "Outlook not so good";
    break;
  case 6:
    ball = "My sources say no";
    break;
  case 7:
    ball = "Concentrate and ask again";
    break;
}

console.log(`The Magic Eight balls answer is: ${ball}`);
