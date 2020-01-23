var randomNumber1 = 6;
var randomNumber2 = 6;

document.querySelector(".btn").onclick = function() {rollDice()};


function rollDice () {
    randomNumber1 = Math.floor(6 * Math.random()) + 1;
    randomNumber2 = Math.floor(6 * Math.random()) + 1;
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
    changeHeading(randomNumber1, randomNumber2);
}

function changeHeading (randomNumber1, randomNumber2) {
    if (randomNumber1 > randomNumber2) {
        document.querySelector(".header").innerHTML = "Player 1 wins!";

    }else if (randomNumber2 > randomNumber1) {
        document.querySelector(".header").innerHTML = "Player 2 wins!";
    }else{
        document.querySelector(".header").innerHTML = "Everybody wins!";
    }

}