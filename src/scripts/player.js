import { DeckHand } from "./deckHand";
import { Card } from "./card"
import { htmlUtil } from "./htmlUtil";


export class Player {
    constructor(game) {
        this.hp = 10;
        this.mana = 3;
        this.shield = 0;
        this.game = game;
        this.deckHand = new DeckHand(this.game, this.game.board);
        this.cardArr = this.game.board.renderedCards;
        this.populateDeck();
        this.deckHand.shuffleDeck();
    }

    populateDeck() {
        for (let i = 0; i < 4; i++) {
            this.deckHand.deck.push(new Card("weakAttack", 1, 0, 1, this.deckHand, this.cardArr[4]));
        }


        for (let i = 0; i < 4; i++) {
            this.deckHand.deck.push(new Card("weakDef", 0, 1, 1, this.deckHand, this.cardArr[5]));
        }

        this.deckHand.deck.push(new Card("strongAttack", 3, 0, 2, this.deckHand, this.cardArr[2]));
        this.deckHand.deck.push(new Card("stronDef", 0, 3, 2, this.deckHand, this.cardArr[3]));
    }



    calculations(mana, damage, shield) {
        if (!this.useMana(mana)) {
            this.mana += mana
            this.greyMana();
            const manaOverlay = document.getElementById("mana-overlay")
            
            manaOverlay.style.display = "";
            htmlUtil.overlayBlurOn();
        } else {
            this.greyMana();
            this.addShield(shield)
            this.updateShields();
            this.dealDamage(damage);
            this.game.removeCard();
        }
        mana = 0;
        damage = 0;
        shield = 0;
    }

    fullReset() {
        this.reset();

    }

    nonGreyShields() {
        for (let i = 1; i < this.shield + 1; i++) {
            document.getElementById(`shield-${i}`).style.removeProperty('filter')
        }
    }


    updateShields() {
        for (let i = 4; this.shield < i; i--) {
            document.getElementById(`shield-${i}`).style.filter = "grayscale(1)"
        }
        for (let j = 1; j < this.shield + 1; j++) {
            document.getElementById(`shield-${j}`).style.removeProperty('filter')
        }
    }

    greyMana() {
        for (let i = 1; i < 3 - this.mana + 1; i++) {
            document.getElementById(`mana-${i}`).style.filter = "grayscale(1)"
        }
    }

    nonGreyMana() {
        for (let i = 1; i < 4; i++) {
            document.getElementById(`mana-${i}`).style.removeProperty('filter')
        }
    }

    greyHealth() {
        for (let i = 1; i < 10 - this.hp + 1; i++) {
            document.getElementById(`player-heart-${i}`).style.filter = "grayscale(1)";
        }
    }

    nonGreyHealth() {
        for (let i = 1; i < 11; i++) {
            document.getElementById(`player-heart-${i}`).style.removeProperty('filter')
        }
    }

    reset() {
        this.mana = 3;
        this.shield = 0;
        this.updateShields();
        this.nonGreyMana();
        this.deckHand.deselect();
        this.deckHand.dealCards();
        this.game.board.renderCards();
        this.hp = 10;
        this.nonGreyHealth();
    }

    endReset() {
        this.mana = 3;
        this.shield = 0;
        this.updateShields();
        this.nonGreyMana();
        this.deckHand.deselect();
        this.deckHand.dealCards();
        this.game.board.renderCards();

    }

    addShield(num) {
        this.shield += num;
    }


    dealDamage(num) {
        this.game.monster.takeDamage(num)
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
        if (!this.isAlive()) {
            const gameLostOverlay = document.getElementById("game-lost-overlay")
            htmlUtil.overlayBlurOn();
            gameLostOverlay.style.display = ""
        }

        this.greyHealth();
    }

    useMana(num) {
        this.mana -= num;
        if (this.mana < 0) {
            return false;
        } else {
            return true
        }
    }

    isAlive() {
        if (this.hp > 0) {
            return true;
        } else {
            return false;
        }
    }
}