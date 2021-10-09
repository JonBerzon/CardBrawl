export class Player{
    constructor(){
        this.hp = 10;
        this.mana = 3;
        this.shield = 0;

    }
    calculations(mana, damage, shield){
        if (!this.useMana(mana))
            this.reset();
    }

    reset(){
        this.mana = 3;
        this.shield = 0;
    }

    shield(num){
        this.shield += num;
    }

    takeDamage(num){
        this.shield - num;
    }

    useMana(num){
        this.mana -= num;
        if (this.mana < 0){
            return false;
        }  else {
            return true
        }
    }


}