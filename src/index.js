import { Board } from "./scripts/board";
import { DeckHand } from "./scripts/deckHand"

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext('2d')

    canvas.width = 1237; 
    canvas.height = 750; 

    let b = new Board(canvas, ctx)
    let d = new DeckHand()

    canvas.addEventListener('click', function(event){
        let x = event.pageX - canvas.offsetLeft
        let y = event.pageY - canvas.offsetTop  
        console.log(x,y)
    })

   
    b.dealCards();
    b.demonAnimation()
    d.populateDeck()
    console.log(d.deck)
    d.shuffleDeck()
    console.log(d.deck)
    // d.dealCards()
    // console.log(d.deck)
    // console.log(d.hand)




   

    

    

    
});