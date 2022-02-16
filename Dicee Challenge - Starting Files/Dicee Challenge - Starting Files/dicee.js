// for image 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  
var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage ;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);

// for image 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource);

// If player 1 wins

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";   //If player 2 wins
}
else {
  document.querySelector("h1").innerHTML = "Draw!";  // If draw
}