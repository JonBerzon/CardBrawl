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
            this.addShield(shield)
            this.takeDamage(damage)
        }
        
        
    }

    fullReset(){
        this.reset();
        this.hp = 10;

    }

    greyShields(){
        for (let i = 1; i < 5; i++) {
            document.getElementById(`shield-${i}`).style.filter = "grayscale(1)"
        }
    }

    reset(){
        this.mana = 3;
        this.shield = 0;
        this.greyShields();
        
    }

    addShield(num){
        // let test = document.getElementById("shieldTest")
        // test.style.filter = "grayscale(1)"
        // test.style.addProperty()
        // console.log(test)
        this.shield += num;
        for (let i = 1; i < this.shield + 1; i++) {
            document.getElementById(`shield-${i}`).style.removeProperty('filter')
        }
    }

    takeDamage(num){
        let combinedHealth = this.shield + this.hp;
        combinedHealth -= num;
        if (this.hp > combinedHealth) this.hp = combinedHealth;
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