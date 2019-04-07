/*
card game first attempt to pet project
 */

let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];

let deck = [];


for (let idxSuits = 0; idxSuits < suits.length; idxSuits++) {
    for (let idxValues = 0; idxValues < values.length; idxValues++) {
        deck.push(values[idxValues]  + " of " + suits[idxSuits]);
    }
}

for(let i = 0; i < deck.length; i++){
    console.log(deck[i]);
}
