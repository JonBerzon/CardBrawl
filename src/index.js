import { Board } from "./scripts/board";
import { DeckHand } from "./scripts/deckHand"
import { Card } from "./scripts/card"
import { Game } from "./scripts/game";
import { htmlUtil } from "./scripts/htmlUtil";
import { Tutorial } from "./scripts/tutorial";
import { LandingPage } from "./scripts/landingPage";

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext('2d')
    canvas.onselectstart = function () { return false; }

    canvas.width = 1237; 
    canvas.height = 750; 

    let g = new Game(canvas,ctx)
    g.basicStartup();

    let lp = new LandingPage();
    lp.startup();
    lp.startup1();

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
        let x = event.pageX - canvas.offsetLeft;
        let y = event.pageY - canvas.offsetTop;  
        console.log(x,y);
        cardSlots.forEach(function (ele, index){
            if (y > ele[2] && y < ele[2] + ele[1] && x > ele[3] && x < ele[3] + ele[0]) {
                if (!g.noLoadPos.includes(index)) g.player.deckHand.hand[index].select();
                
            }
        });
        
    });

    const playCardsButton = document.getElementById("play-cards-button");
    playCardsButton.addEventListener('click', ()=>{
        g.sendSelected();
    });

    const resetButton = document.getElementById("reset-button")
    resetButton.addEventListener('click', ()=>{
        g.fullReset();
    });

    const endTurnButton = document.getElementById("end-turn-button")
    endTurnButton.addEventListener('click', ()=>{
        g.endTurn();
    });

    const oomButton = document.getElementById("oom-button")
    const manaOverlay = document.getElementById("mana-overlay")
    oomButton.addEventListener('click', ()=>{
        manaOverlay.style.display="none";
        htmlUtil.overlayBlurOff();
    });

    const playAgainButton = document.getElementById("play-again-button")
    const gameWonOverlay = document.getElementById("game-won-overlay")
    playAgainButton.addEventListener('click', ()=>{
        gameWonOverlay.style.display = "none";
        g.fullReset();
        htmlUtil.overlayBlurOff();
    });

    const playAgainButton1 = document.getElementById("play-again-button1")
    const gameLostOverlay = document.getElementById("game-lost-overlay")
    playAgainButton1.addEventListener('click', () => {
        gameLostOverlay.style.display = "none";
        g.fullReset();
        htmlUtil.overlayBlurOff();
    });

    const tutorialButton = document.getElementById("tutorial-button")
    tutorialButton.addEventListener('click', ()=>{
        Tutorial.first();
    });

    const tutorialButton1 = document.getElementById("tutorial-button-1")
    tutorialButton1.addEventListener('click', () => {
        Tutorial.second();
    });

    const tutorialButton2 = document.getElementById("tutorial-button-2")
    tutorialButton2.addEventListener('click', () => {
        Tutorial.third();
    });

    const tutorialButton3 = document.getElementById("tutorial-button-3")
    tutorialButton3.addEventListener('click', () =>{
        Tutorial.fourth();
    })

    const tutorialButton4 = document.getElementById("tutorial-button-4")
    tutorialButton4.addEventListener('click', () => {
        Tutorial.fifth();
    })

    const tutorialButton5 = document.getElementById("tutorial-button-5")
    tutorialButton5.addEventListener('click', () => {
        Tutorial.sixth();
    })

    const tutorialButton6 = document.getElementById("tutorial-button-6")
    tutorialButton6.addEventListener('click', () => {
        Tutorial.seventh();
    })

    const tutorialButton7 = document.getElementById("tutorial-button-7")
    tutorialButton7.addEventListener('click', () => {
        const tutorial7 = document.getElementById("tutorial-7");
        tutorial7.style.display = "none";
        htmlUtil.tutorial4BlurOff();
    })

    const startButton = document.getElementById("start-button")
    startButton.addEventListener('click', () =>{
        const startup = document.getElementById("startup-div");
        const main = document.getElementsByClassName("main")[0]
        startup.style.display ="none"
        main.style.display = ""

    })

    const playGame = document.getElementById("intro-play-button")
    playGame.addEventListener('click', ()=>{
        const tutorial1 = document.getElementById("tutorial-1");
        tutorial1.style.display = "none";
        htmlUtil.tutorial1BlurOff();
    })

});