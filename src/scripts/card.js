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
       
        if (this.isSelected === false){
            this.deckHand.deselect();
            this.isSelected = true;
            this.deckHand.highlightCard();
        } else {
            this.isSelected = false;
            this.deckhand.deselect();
        } 
    }  

    
}