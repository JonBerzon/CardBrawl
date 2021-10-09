export class Board{
    constructor(canvas, ctx, game){
        this.canvas = canvas;
        this.ctx = ctx;
        this.game = game;
        this.imgSet = {}
    }

    placeImages(img, x, y, num, dist, times, src) {
        let that = this;
        for (let i = 0; i < times; i++) { 
            that.imgSet[src + i] = new Image();
            let img = that.imgSet[src + i];
            
            img.addEventListener('load', function () {
                that.ctx.drawImage(img, x + (dist * i), y, img.width / num, img.height / num);
            });
            img.src = src[i];
            
        }
    }

    demonAnimation(){
        let j = 1;
        setInterval(() => {
            if (j === 7) {
                j = 1;
            }
            this.ctx.clearRect(600, 60, 400, 350);
            let demon = new Image();
            this.placeImages(demon, 600, 60, .4, 0, 1, [`./src/img/demon_idle/${j}.png`])
            j += 1;

        }, 70);
    }

    renderCards(){
        let arr = [];
        this.game.deckHand.hand.forEach(card=>{
            arr.push(card.src)
        });
        let cardBack = new Image();
        this.placeImages(cardBack, 45, 440, .6, 20, 3, ['./src/img/testCardBack.png', './src/img/testCardBack.png', './src/img/testCardBack.png']);

        let placeHolder = new Image();
        this.placeImages(placeHolder, 290, 440, .6, 180, 5, arr);
    }

    highlight(index){
        const highlight = new Image();
        let x = 290 + (index * 180);
        this.placeImages(highlight, x,440, .6, 0, 1, ['./src/img/yellow.png'])
    }

    clearHighlight(){
        for (let i = 0; i < 5; i++) {
            this.ctx.clearRect(279, 434, 1000, 1000)
        }
        this.renderCards();
    }

    


}


