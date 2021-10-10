import { DeckHand } from "./deckHand"
import { Card } from "./card"


export class Monster{
    constructor(game){
        this.hp = 20;
        this.shield = 0;
        this.game = game;
        this.deckHand = new DeckHand(this.game, this.game.board)

    }

    populateDeck() {
        for (let i = 0; i < 4; i++) {
            this.deckHand.deck.push(new Card("weakAttack", 3, 0, 1, this.deckHand, "src/img/cards/weaka.png"));
        }


        for (let i = 0; i < 4; i++) {
            this.deckHand.deck.push(new Card("weakDef", 0, 3, 1, this.deckHand, "src/img/cards/weakd.png"));
        }

        this.deckHand.deck.push(new Card("strongAttack", 5, 0, 2, this.deckHand, "src/img/cards/stronga.png"));
        this.deckHand.deck.push(new Card("stronDef", 0, 5, 2, this.deckHand, "src/img/cards/strongd.png"));
    }

    takeDamage(num){
        let combinedHealth = this.shield + this.hp;
        combinedHealth -= num;
        if (this.hp >= combinedHealth) {
            this.hp = combinedHealth;
            this.shield = 0;
        } else {
            this.shield -= num;
        }
        this.greyHealth();
    }

    reset(){
        this.hp = 20;
        this.nonGreyHealth();
    }

    greyHealth() {
        for (let i = 1; i < 20 - this.hp + 1; i++) {
            document.getElementById(`monster-heart-${i}`).style.filter = "grayscale(1)";
        }
    }

    nonGreyHealth() {
        for (let i = 1; i < 21; i++) {
            document.getElementById(`monster-heart-${i}`).style.removeProperty('filter')
        }
    }

    monsterTurn(){
        monsterAttack();
        //NEEDS TO BE WRITTEN
    }

    monsterAttack(){
        //NEEDS TO BE WRITTEN
    }

}