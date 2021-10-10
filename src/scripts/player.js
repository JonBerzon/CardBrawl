export class Player{
    constructor(game){
        this.hp = 10;
        this.mana = 3;
        this.shield = 0;
        this.game = game;

    }
    calculations(mana, damage, shield){  
        if (!this.useMana(mana)){
            alert("You used too much mana, try again.")
        } else {
            this.greyMana();
            this.addShield(shield)
            this.updateShields();
            this.dealDamage(damage);
            this.game.removeCard();
            // this.takeDamage(damage)
            // this.updateShields();
            // this.greyHealth();
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
        // this.game.monster.reset(); 
        // this.game.basicStartup(); 
        this.game.deckHand.deselect();
        this.game.deckHand.dealCards();
        this.game.board.renderCards();
        console.log("hand test", this.game.deckHand.hand)
        this.hp = 10;
        this.nonGreyHealth();
    }

    addShield(num){
        this.shield += num;  
    }

    takeDamage(num){
        
        if (!this.isAlive()) alert("You died")
    }

    dealDamage(num){
        this.game.monster.takeDamage(num)
    }

    // takeDamage(num){
    //     let combinedHealth = this.shield + this.hp;
    //     combinedHealth -= num;
    //     if (this.hp >= combinedHealth) {
    //         this.hp = combinedHealth;
    //         this.shield = 0;
    //     } else {
    //         this.shield -= num;
    //     }
    //     if (!this.isAlive()) alert("You died")
    // }

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