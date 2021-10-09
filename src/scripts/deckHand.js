import { Card } from "./card"
export class DeckHand{
    constructor(game, board){
        this.deck = [];
        this.hand = [];
        this.discard = [];
        this.populateDeck();
        this.shuffleDeck();
        this.game = game;
        this.board = board;
    }

    populateDeck(){
        for (let i = 0; i < 4; i++) {
            this.deck.push(new Card("weakAttack", 1, 0, 1, this, "src/img/testCard.png"));
        }


        for (let i = 0; i < 4; i++) {
            this.deck.push(new Card("weakDef", 0, 1, 1, this, "src/img/testCard2.png"));
        }

        this.deck.push(new Card("strongAttack", 3, 0, 2, this, "src/img/testCard1.png"));
        this.deck.push(new Card("stronDef", 0, 3, 2, this, "src/img/testCard3.png"));


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
            let j = Math.floor(Math.random() * 9);
            let k = Math.floor(Math.random() * 9);

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
    }

    hilightCard(){
        this.board.clearHighlight();
        let that = this;
        this.hand.forEach((card, index) =>{
            // debugger
            if (card.isSelected){
                that.board.highlight(index);
            }

        })
    }
}