import { DeckHand } from "./deckHand"
import { Card } from "./card"
import { htmlUtil } from "./htmlUtil";


export class Monster {
    constructor(game) {
        this.hp = 20;
        this.shield = 0;
        this.game = game;
        this.deckHand = new DeckHand(this.game, this.game.board)
        this.populateDeck();
        this.deckHand.shuffleDeck();

    }

    populateDeck() {
        for (let i = 0; i < 2; i++) {
            this.deckHand.deck.push(new Card("weakAttack", 2, 0, 1, this.deckHand, "src/img/boss_cards/atk4.png"));
        }

        for (let i = 0; i < 2; i++) {
            this.deckHand.deck.push(new Card("weakAttack+Heal", 2, 1, 1, this.deckHand, "src/img/boss_cards/atk1.png"));
        }


        for (let i = 0; i < 3; i++) {
            this.deckHand.deck.push(new Card("medAttack", 3, 0, 1, this.deckHand, "src/img/boss_cards/atk2.png"));
        }

        this.deckHand.deck.push(new Card("strongAttack", 5, 0, 2, this.deckHand, "src/img/boss_cards/atk3.png"));
        this.deckHand.deck.push(new Card("stronHeal", 0, 3, 2, this.deckHand, "src/img/boss_cards/shield1.png"));
    }

    showCurrentCard() {
        document.getElementById("monster-card-slot").src = `${this.deckHand.deck[0].src}`
    }

    takeDamage(num) {
        let combinedHealth = this.shield + this.hp;
        combinedHealth -= num;
        if (this.hp >= combinedHealth) {
            this.hp = combinedHealth;
            this.shield = 0;
        } else {
            this.shield -= num;
        }
        this.isAlive();
        this.greyHealth();
    }

    reset() {
        this.hp = 20;
        this.nonGreyHealth();
        this.deckHand.shuffleDeck();
        this.showCurrentCard();
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

    updateHp() {
        for (let i = 20; this.hp < i; i--) {
            document.getElementById(`monster-heart-${i}`).style.filter = "grayscale(1)"
        }
        for (let j = 1; j < this.hp + 1; j++) {
            document.getElementById(`monster-heart-${i}`).style.removeProperty('filter')
        }
    }

    monsterTurn() {
        // console.log(this)
        this.monsterAttack();
        this.monsterHeal();
        this.deckHand.shuffleDeck();
        this.showCurrentCard();
        //NEEDS TO BE WRITTEN
    }

    monsterHeal() {
        let heal = this.deckHand.deck[0].def;
        // debugger
        this.hp += heal;
        if (this.hp > 20) this.hp = 20;
        this.nonGreyHealth();
        this.greyHealth();
    }

    monsterAttack() {
        let dmg = this.deckHand.deck[0].atk;
        this.game.player.takeDamage(dmg);
    }

    isAlive() {
        if (this.hp <= 0) {
            htmlUtil.overlayBlurOn();
            document.getElementById("game-won-overlay").style.display = "";
        }
    }

}