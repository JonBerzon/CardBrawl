import { Card } from "./card"
export class DeckHand{
    constructor(){
        this.deck = [];
        this.hand = [];
        this.discard = [];
    }

    populateDeck(){
        for (let i = 0; i < 4; i++) {
            this.deck.push(new Card("weakAttack", 1, 0, 1));
        }

        for (let i = 0; i < 4; i++) {
            this.deck.push(new Card("weakDef", 0, 1, 1));
        }

        this.deck.push(new Card("strongAttack", 3, 0, 2));
        this.deck.push(new Card("stronDef", 0, 3, 2));
    }

    dealCards(){
        this.discardCards();
        if (!this.deck.length) this.shuffleDeck();
        for (let i = 0; i < 5; i++) {
            this.hand.push(this.deck.shift()); 
        }
    }

    shuffleDeck(){
        if (!this.deck.length){
            while (this.discard.length) {
                this.deck.push(this.discard.shift());
            }
        }
        for (let i = 0; i < 10; i++) {
            // debugger
            let j = Math.floor(Math.random() * 9)
            let k = Math.floor(Math.random() * 9)

            // debugger
            [this.deck[j], this.deck[k]] = [this.deck[k], this.deck[j]]
        }
    }

    discardCards(){
        while (this.hand.length){
            this.discard.push(this.hand.shift());
        }

    }
}