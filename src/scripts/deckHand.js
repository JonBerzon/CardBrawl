import { Card } from "./card"
export class DeckHand{
    constructor(game, board){
        this.deck = [];
        this.hand = [];
        this.discard = [];
        // this.shuffleDeck();
        this.game = game;
        this.board = board;
    }

    

    

    dealCards(){
        this.clearHandPosition();
        this.discardCards();
        if (!this.deck.length) this.shuffleDeck();
        for (let i = 0; i < 5; i++) {
            this.hand.push(this.deck.shift()); 
        }
        this.setHandPosition();
    }

    shuffleDeck(){
        if (!this.deck.length){
            while (this.discard.length) {
                this.deck.push(this.discard.shift());
            }
        }
        for (let i = 0; i < 20; i++) {
            let j = Math.round(Math.random() * (this.deck.length - 1));
            let k = Math.round(Math.random() * (this.deck.length - 1));

            [this.deck[j], this.deck[k]] = [this.deck[k], this.deck[j]];
        }
    }

    discardCards(){
        while (this.hand.length){
            this.discard.push(this.hand.shift());
        }

    }

    setHandPosition(){
        for (let i = 0; i < this.hand.length; i++) {
            this.hand[i].pos = i; 
        }
    }

    clearHandPosition(){
        for (let i = 0; i < this.hand.length; i++) {
            this.hand[i].pos = NaN;
            
        }
    }

    deselect(){
        this.hand.forEach(card =>{
            card.isSelected = false;
        });
        this.board.clearHighlight();
    }

    highlightCard(){
        this.board.clearHighlight();
        let that = this;
        this.hand.forEach((card, index) =>{
            if (card.isSelected){
                that.board.highlight(index);
            }

        })
    }

    
}