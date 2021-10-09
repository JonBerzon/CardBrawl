export class Player{
    constructor(){
        this.hp = 10;
        this.mana = 3;
        this.shield = 0;

    }
    calculations(mana, damage, shield){
        
        if (!this.useMana(mana)){
            alert("You used too much mana, try again.")
        } else {
            this.greyMana();
            this.addShield(shield)
            this.updateShields();
            this.takeDamage(damage)
            this.updateShields();
            this.greyHealth();
        }
        
        
    }

    fullReset(){
        this.reset();
        this.hp = 10;
        this.nonGreyHealth();


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
        
    }

    addShield(num){
        this.shield += num;  
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