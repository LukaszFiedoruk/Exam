// Create a solution that will tell us what poker set we have. The solution is to deal us 5 cards from the standard 52 card deck at random.
// Based on cards on our hand the program should tell us what is the best poker set.

const suits = ["♤", "♡", "♢", "♧"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];



class Deck {
    constructor(cards=freshDeck()){
        this.cards = cards;
    }
    shuffle () {
        for (let i = this.cards.length -1; i > 0; i--) {
            const index = Math.floor(Math.random() * (i+1));
            const oldValue = this.cards[index];
            this.cards[index] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
}

function freshDeck () {
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(suit, value)
        })
    })
}

class Card {
    constructor(suit, value) {
        this.value = value;
         this.suit = suit;
    }
       
}

const deck = new Deck();


deck.shuffle();

let hand = [];
function giveHand () {    
    for (i = 0; i < 5; i++) {
        let newIndex  = Math.floor(Math.random() * deck.cards.length);
        hand.unshift(deck.cards[newIndex]);
    } 
}
giveHand();
console.log(hand);

