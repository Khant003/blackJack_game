// let firstCard = undefined;
// let secondCard = undefined;
let total = 0;
let cards = []
let message = ""
let isAlive = false;
let hasBlackJack = false;
let player = 
{
    name : "Kaze",
    chip : 387
}

let MessageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardEl = document.querySelector(".card-el");
let playerEl = document.querySelector(".player-el");

playerEl.innerHTML = player.name +" : "+ player.chip

function startGame () {
    isAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    total = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();
}

function renderGame () {
    cardEl.innerHTML = ""
    for (let i = 0; i < cards.length; i++) {
        cardEl.innerHTML += " " +cards[i]+ " ";
    }
    if(total < 21) {
        message = "Do you want to draw a new Card ?"
    } else if (total === 21) {
        message = "BLACK JACK WohOhh"
    } else {
        message = "your'r out of game"
        isAlive = false
    }
    MessageEl.innerHTML = message;

    sumEl.innerHTML = total;
}

function randomCard () {
     let randomCard = Math.floor(Math.random() * 13) + 1 ;
     if (randomCard > 10) {
        randomCard = 10
     }else if (randomCard === 1) {
        randomCard = 11
     }
     return randomCard;
}

function newCard () {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = randomCard();
        total += thirdCard;
        cards.push(thirdCard);
        renderGame();
    }
}

let hand = ["rock","paper","scissor"];

function getRandom () {
    let randomNum = Math.floor(Math.random() * 3);
    console.log(hand.randomNum);
    console.log(hand[randomNum]);
}
getRandom(); 