import { DeckHand } from "./deckHand"
import { Board } from "./board"
import { Player } from "./player";
import { Monster } from "./monster";
import { Tutorial } from "./tutorial";

export class Game {
    constructor(canvas, ctx, scale) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.scale = scale
        this.board = new Board(this.canvas, this.ctx, this, this.scale);
        // this.deckHand = new DeckHand(this, this.board);
        this.player = new Player(this);
        this.monster = new Monster(this);
        this.cardClear = [];
        this.noLoadPos = [];

    }

    basicStartup() {
        this.board.demonAnimation();
        this.player.deckHand.dealCards();
        // this.board.renderCards();
        this.monster.showCurrentCard();
        Tutorial.first();
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

    fullReset() {
        this.resetRemoveCard();
        this.player.reset();
        this.monster.reset();

    }

    removeCard() {
        let pos = null;
        this.player.deckHand.hand.forEach(card => {
            if (card.isSelected) pos = card.pos
        })
        if (pos !== null) {
            this.cardClear.push(() => this.ctx.clearRect(290 * this.scale + (pos * (180 * this.scale)), 440 * this.scale, 174 * this.scale, 218 * this.scale))
            this.noLoadPos.push(pos);
        }
        this.remove();

    }
    remove() {
        for (let i = 0; i < this.cardClear.length; i++) {
            this.cardClear[i]();
        }
    }

    resetRemoveCard() {
        this.cardClear = [];
        this.noLoadPos = [];
    }

    endTurn() {
        this.resetRemoveCard();
        this.monster.monsterTurn();//NEEDS TO BE WRITTEN
        this.player.endReset();




    }
}