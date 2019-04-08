/*
card game first attempt to pet project
 */


//card variables
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];


//dom variables
let textArea = document.getElementById(`text-area`);
let newGameButton = document.getElementById(`new-game-button`);
let hitButton = document.getElementById(`hit-button`);
let stayButton = document.getElementById(`stay-button`);


//game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];


hitButton.style.display = `none`;
stayButton.style.display = `none`;
showStatus();



//functions

function createDeck() {
    let deck = [];
    for (let idxSuits = 0; idxSuits < suits.length; idxSuits++) {
        for (let idxValues = 0; idxValues < values.length; idxValues++) {
            let card = {
                suit: suits[idxSuits],
                value: values[idxValues]
            };
            deck.push(card);
        }
    }
    return deck;
}

function suffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}

function getCardString(card) {
    return card.value + " of " + card.suit;
}


function getNextCard() {
    return deck.shift();
}

function getCardNumericValue(card){
    switch (card.value) {
        case `Ace`:
            return 1;
        case `Two`:
            return 2;
        case `Three`:
            return 3;
        case `Four`:
            return 4;
        case `Five`:
            return 5;
        case `Six`:
            return 6;
        case `Seven`:
            return 7;
        case `Eight`:
            return 8;
        case `Nine`:
            return 9;
        default:
            return 10;
    }
}

function getScore(cardsArray) {
    let score = 0;
    let hasAce = false;
    for(let i =0; i < cardsArray.length; i++){
        let card = cardsArray[i];
        score += getCardNumericValue(card);
        if(card.value === `Ace`){
            hasAce = true;
        }
    }
    if(hasAce && score + 10 <= 21){
        return score + 10;
    }
    return score;
}

function updateScore(){
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function checkForEndOfGame() {
    
}


function showStatus() {
    if (!gameStarted) {
        textArea.innerText = "Welcome to Blackjack";
        return;
    }
    let dealerCardString = "";
    for(let i = 0; i < dealerCards.length; i++){
        dealerCardString += getCardString(dealerCards[i]) + `\n`;
    }
    let playerCardString = "";
    for(let i = 0; i < playerCards.length; i++){
        playerCardString += getCardString(playerCards[i]) + `\n`;
    }

    updateScore();

    textArea.innerText =
        "Dealer has:\n " +
        dealerCardString +
        "(score " + dealerScore + ")\n\n" +

        "Player has:\n " +
        playerCardString +
        "(score " + playerScore + ")\n\n";

    if(gameOver){
        if(playerWon){
            textArea.innerText += "YOU WIN!";
        } else{
            textArea.innerText += "THE DEALER WINS!";
        }
        newGameButton.style.display = `inline`;
        hitButton.style.display = `none`;
        stayButton.style.display = `none`;
    }
}

//actions (listeners)

newGameButton.addEventListener(`click`, function () {
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    suffleDeck(deck);
    playerCards = [getNextCard(), getNextCard()];
    dealerCards = [getNextCard(), getNextCard()];


    newGameButton.style.display = `none`;
    hitButton.style.display = `inline`;
    stayButton.style.display = `inline`;
    showStatus();
});

hitButton.addEventListener(`click`, function () {
   playerCards.push(getNextCard());
   checkForEndOfGame();
   showStatus();
});

stayButton.addEventListener(`click`, function () {
   gameOver = true;
   checkForEndOfGame();
   showStatus();
});







