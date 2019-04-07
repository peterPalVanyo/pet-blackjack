/*
card game first attempt to pet project
 */

let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];

let textArea = document.getElementById(`text-area`);
let newGameButton = document.getElementById(`new-game-button`);
let hitButton = document.getElementById(`hit-button`);
let stayButton = document.getElementById(`stay-button`);

hitButton.style.display = `none`;
stayButton.style.display = `none`;
newGameButton.addEventListener(`click`, function () {
    textArea.innerText = `Let us start the game....`;
    newGameButton.style.display = `none`;
    hitButton.style.display = `inline`;
    stayButton.style.display = `inline`;
});

function createDeck() {
    let deck = [];
    for (let idxSuits = 0; idxSuits < suits.length; idxSuits++) {
        for (let idxValues = 0; idxValues < values.length; idxValues++) {
            let card = {
                suit: suits[idxSuits],
                value: values[idxValues]
            };
            deck.push( card );
        }
    }
    return deck;
}

let deck = createDeck();

function getNextCard(){
    return deck.shift();

}
function getCardString(card){
    return card.value + " of " + card.suit;

}

// for(let i = 0; i < deck.length; i++){
//     console.log(deck[i]);
// }

let playerCards = [getNextCard(), getNextCard()];

console.log("your cards: ");
console.log("  " + getCardString(playerCards[0]) );
console.log("  " + getCardString(playerCards[1]) );

