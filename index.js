// Creating two random numbers b/w 1-6

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Storing the random dice image name as a string

var dicee1 = "images/dice"+randomNumber1+".png";
var dicee2 = "images/dice"+randomNumber2+".png";

//Changing src attribute of dice image

document.querySelector(".img1").setAttribute("src",dicee1);
document.querySelector(".img2").setAttribute("src",dicee2);

//Choosing the winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🎉Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "✨Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "It's a draw!!";
}