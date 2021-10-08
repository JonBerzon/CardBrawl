import DeckHand from "./deckHand"
export class Card{
    constructor(name, atk, def, mana, deckHand, src, pos){
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.mana = mana;
        this.deckHand = deckHand;
        this.src = src;
        this.pos = pos;
        this.isSelected = false;
    }

    select(){
        this.deckHand.deselect();

        this.isSelected === false ? this.isSelected = true : this.isSelected = false;

    }
}