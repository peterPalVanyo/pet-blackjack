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


newGameButton.addEventListener(`click`, function () {
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    suffleDeck(deck);
    playerCards = [getNextCard(), getNextCard()];
    dealerCards = [getNextCard(), getNextCard()];

    for (let i = 0; i < deck.length; i++) {
        textArea.innerText += `\n` + getCardString(deck[i]);
    }

    newGameButton.style.display = `none`;
    hitButton.style.display = `inline`;
    stayButton.style.display = `inline`;
    showStatus();
});



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

function showStatus() {
    if (!gameStarted) {
        textArea.innerText = "Welcome to Blackjack";
    }
}


function getNextCard() {
    return deck.shift();
}

// for(let i = 0; i < deck.length; i++){
//     console.log(deck[i]);
// }






