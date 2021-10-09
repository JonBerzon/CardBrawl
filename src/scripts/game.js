import { DeckHand } from "./deckHand"
import { Board } from "./board"

export class Game{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.board = new Board(this.canvas, this.ctx, this);
        this.deckHand = new DeckHand(this, this.board);
    }

    basicStartup(){
        this.board.demonAnimation();
        this.deckHand.dealCards();
        this.board.renderCards();

        console.log(this.deckHand.hand)
    }
}