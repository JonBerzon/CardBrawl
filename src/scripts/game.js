import { DeckHand } from "./deckHand"
import { Board } from "./board"
import { Player } from "./player";

export class Game{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.board = new Board(this.canvas, this.ctx, this);
        this.deckHand = new DeckHand(this, this.board);
        this.player = new Player();
    }

    basicStartup(){
        this.board.demonAnimation();
        this.deckHand.dealCards();
        this.board.renderCards();

        console.log(this.deckHand.hand)
        console.log(this.deckHand.deck)
    }
}