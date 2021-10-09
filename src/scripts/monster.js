export class Monster{
    constructor(){
        this.hp = 20;
        this.shield = 0;
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

}