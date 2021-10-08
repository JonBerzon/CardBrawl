import { Board } from "./scripts/board";
import { DeckHand } from "./scripts/deckHand"
import { Card } from "./scripts/card"
import { Game } from "./scripts/game";

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext('2d')

    canvas.width = 1237; 
    canvas.height = 750; 

    // let b = new Board(canvas, ctx)
    // let d = new DeckHand()
    let g = new Game(canvas,ctx)
    g.basicStartup();

    let cardSlots = [];
    let left = 290;
    for (let i = 0; i < 5; i++) {
        let width = 160;
        let height = 200;
        let top = 440;
        let ele = [width, height, top, left];
        cardSlots.push(ele);
        left += 180;
        
        
    }
    canvas.addEventListener('click', function(event){
        let x = event.pageX - canvas.offsetLeft //sets x to
        let y = event.pageY - canvas.offsetTop  
        console.log(x,y)
        cardSlots.forEach(function (ele, index){
            if (y > ele[2] && y < ele[2] + ele[1] && x > ele[3] && x < ele[3] + ele[0]) {
                console.log(g.deckHand.hand[index])
                g.deckHand.hand[index].select();
                g.deckHand.hilightCard()
                // console.log(d.hand[index])
                // console.log("hand", d.hand)
            }
        });
        
    });

    // while (true){
        
    // }
    // ctx.beginPath();
    // ctx.rect(289, 440, 169, 213);
    // ctx.strokeStyle = "yellow";
    // ctx.lineWidth = "4";
    // ctx.stroke();
    // ctx.clearRect(284, 434, 177, 222);
    

    

   
    
    // b.demonAnimation();
    // b.renderCards();
    // console.log("deck", d.deck);
    // d.dealCards()
    // d.dealCards()
    // d.dealCards()
    // d.dealCards()
    // d.dealCards()
    // d.dealCards()
    // d.dealCards()

    // d.dealCards()
    // console.log("deck", d.deck);
    // console.log("hand", d.hand);
    // console.log("discard", d.discard);


    // d.shuffleDeck();
    // d.shuffleDeck();
    // console.log(d.deck);
    // d.dealCards()
    // console.log(d.deck)
    // console.log(d.hand)




   

    

    

    
});