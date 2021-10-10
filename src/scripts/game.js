import { DeckHand } from "./deckHand"
import { Board } from "./board"
import { Player } from "./player";
import { Monster } from "./monster";

export class Game{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.board = new Board(this.canvas, this.ctx, this);
        // this.deckHand = new DeckHand(this, this.board);
        this.player = new Player(this);
        this.monster = new Monster(this);
        this.cardClear = [];
        this.noLoadPos = [];
    }

    basicStartup(){
        this.board.demonAnimation();
        this.player.populateDeck();
        this.player.deckHand.shuffleDeck();
        this.monster.populateDeck();
        this.monster.deckHand.shuffleDeck();
        this.player.deckHand.dealCards();
        this.board.renderCards();
        this.monster.showCurrentCard();

        // console.log(this.deckHand.hand)
        // console.log(this.deckHand.deck)
    }

    sendSelected() {
        let mana = 0;
        let damage = 0;
        let shield = 0;
        this.player.deckHand.hand.forEach(card => {
            if (card.isSelected) {
                damage += card.atk;
                shield += card.def;
                mana += card.mana;
            }
        })
        this.player.calculations(mana, damage, shield);
        this.player.deckHand.deselect();
    }

    fullReset(){
        this.resetRemoveCard();
        this.player.reset();
        this.monster.reset(); 
        
    }

    removeCard(){
        let pos = null;
        this.player.deckHand.hand.forEach(card=>{
            if (card.isSelected) pos = card.pos
        })
        if (pos !== null){
            this.cardClear.push(()=>this.ctx.clearRect(290 + (pos * 180), 440, 174, 218))
            this.noLoadPos.push(pos);
        }
        this.remove();
        
    }
    remove(){
        for (let i = 0; i < this.cardClear.length; i++) {
            this.cardClear[i]();
        }
    }

    resetRemoveCard(){
        this.cardClear = [];
        this.noLoadPos = [];
    }

    endTurn(){
        this.resetRemoveCard();
        this.monster.monsterTurn();//NEEDS TO BE WRITTEN
        this.player.endReset();
        


        
    }
}