var randomNumber1 = Math.ceil(Math.random() * 6);
var randomDice = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var randomNumber2 = Math.ceil(Math.random() * 6);
var randomDice2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Refresh again pls!";
} else {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  }
}
