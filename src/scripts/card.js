export class Card{
    constructor(name, atk, def, mana, pos){
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.mana = mana;
        this.pos = pos;
        this.isSelected = false;
    }

    select(){
        this.isSelected === false ? this.isSelected = true : this.isSelected = false;
    }
}