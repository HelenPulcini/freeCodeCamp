let firstCard = random();
let secondCard = random();
let cardArr = [firstCard, secondCard];
let sum = firstCard + secondCard;

let isOut = false;
let hasBlackJack = false;
let message = ""
let sumbox = document.querySelector("#sum");
let cards = document.querySelector("#cards");

document.getElementById("startgame").addEventListener("click", game);
document.getElementById("newcard").addEventListener("click", pick);

function startGame() {
    game()
}

function random() {
    let num = Math.floor(Math.random()*13)+1; // still give 13 to have a more realistic random output
    if (num === 1) { // A value is 11
        return 11
    }
    else if (num > 10) {// all face cards [11,12,13] are worth 10
        return 10
    }
    else {
        return num
    }
    
}

function game() {
    cards.innerHTML = "Cards: ";

    for (let i = 0; i < cardArr.length; i++) {
        cards.innerHTML += cardArr[i] + " "
    };
        
    sumbox.innerHTML = "Sum: " + sum;

        if (sum <= 20) {
            message = ("Do you want to draw a new card?");
        }
        else if (sum === 21) {
            message = ("Wohoo! Blackjack!");
            hasBlackJack = true     // the booleans allow you to set the condition for picking a further card
        }
        else {
            message = ("You're out of the game");
            isOut = true;
        }
        document.getElementById("message").innerHTML = message;
}

function pick() {
    if (isOut === false && hasBlackJack === false) {
        let newCard = random(); //if this var is assigned outside the function .push will keep pushing the same again and again
        sum += newCard;
        cardArr.push(newCard);
        game();  
    }
}









