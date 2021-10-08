import { Card } from "./card"
export class DeckHand{
    constructor(){
        this.deck = [];
        this.hand
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
}