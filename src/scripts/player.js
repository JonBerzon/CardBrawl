import { DeckHand } from "./deckHand";
import { Card } from "./card"


export class Player{
    constructor(game){
        this.hp = 10;
        this.mana = 3;
        this.shield = 0;
        this.game = game;
        this.deckHand = new DeckHand(this.game, this.game.board)

    }

    populateDeck() {
        for (let i = 0; i < 4; i++) {
            this.deckHand.deck.push(new Card("weakAttack", 1, 0, 1, this.deckHand, "src/img/cards/weaka.png"));
        }


        for (let i = 0; i < 4; i++) {
            this.deckHand.deck.push(new Card("weakDef", 0, 1, 1, this.deckHand, "src/img/cards/weakd.png"));
        }

        this.deckHand.deck.push(new Card("strongAttack", 3, 0, 2, this.deckHand, "src/img/cards/stronga.png"));
        this.deckHand.deck.push(new Card("stronDef", 0, 3, 2, this.deckHand, "src/img/cards/strongd.png"));
    }



    calculations(mana, damage, shield){  
        if (!this.useMana(mana)){
            this.mana += mana
            this.greyMana();
            alert("You used too much mana, try again.")
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

    fullReset(){
        this.reset();
        
    }

    nonGreyShields(){
        for (let i = 1; i < this.shield + 1; i++) {
            document.getElementById(`shield-${i}`).style.removeProperty('filter')
        }
    }
    

    updateShields(){
        for (let i = 4; this.shield < i ; i--) {
            document.getElementById(`shield-${i}`).style.filter = "grayscale(1)"
        }
        for (let j = 1; j < this.shield + 1; j++) {
            document.getElementById(`shield-${j}`).style.removeProperty('filter')  
        }
    }

    greyMana(){
        for (let i = 1; i < 3 - this.mana + 1; i++) {
            document.getElementById(`mana-${i}`).style.filter = "grayscale(1)"
        }
    }

    nonGreyMana(){
        for (let i = 1; i < 4; i++) {
            document.getElementById(`mana-${i}`).style.removeProperty('filter')
        }
    }

    greyHealth(){
        for (let i = 1; i < 10 - this.hp + 1; i++) {
            document.getElementById(`player-heart-${i}`).style.filter = "grayscale(1)";   
        }
    }

    nonGreyHealth(){
        for (let i = 1; i < 11; i++) {
            document.getElementById(`player-heart-${i}`).style.removeProperty('filter')
        }
    }

    reset(){
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

    endReset(){
        this.mana = 3;
        this.shield = 0;
        this.updateShields();
        this.nonGreyMana();
        this.deckHand.deselect();
        this.deckHand.dealCards();
        this.game.board.renderCards();

    }

    addShield(num){
        this.shield += num;  
    }

    // takeDamage(num){
        
    //     if (!this.isAlive()) alert("You died")
    // }

    dealDamage(num){
        this.game.monster.takeDamage(num)
        this.game.monster.isAlive();
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
        if (!this.isAlive()) alert("You died")

        this.greyHealth();
    }

    useMana(num){
        this.mana -= num;
        if (this.mana < 0){
            return false;
        }  else {
            return true
        }
    }

    isAlive(){
        if (this.hp > 0) {
            return true;
        } else {
            return false;
        }
    }
}