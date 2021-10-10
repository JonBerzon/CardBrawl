export class Board{
    constructor(canvas, ctx, game){
        this.canvas = canvas;
        this.ctx = ctx;
        this.game = game;
        this.imgSet = {}
        this.j = 1;
    }

    placeImages(x, y, dist, src) {
        let that = this;
        for (let i = 0; i < src.length; i++) { 
            that.imgSet[src + i] = new Image();
            let img = that.imgSet[src + i];
            
            img.addEventListener('load', function () {
                that.ctx.drawImage(img, x + (dist * i), y);
            });
            img.src = src[i];
            
            
        }
        this.game.remove();
    }

    demonAnimation(){
        let j = 1;
        setInterval(() => {
            if (j === 7) {
                j = 1;
            }
            this.ctx.clearRect(600, 60, 400, 350);
            this.placeImages(600, 60, 0, [`./src/img/demon_idle/${j}.png`])
            j += 1;

        }, 70);
    }

    renderCards(){
        let arr = [];
        this.game.player.deckHand.hand.forEach(card=>{
            arr.push(card.src)
        });
        this.placeImages(45, 440, 20, ['./src/img/cards/cback.png']);

        // this.placeImages(290, 440, .6, 180, arr);
        this.game.noLoadPos.forEach(pos=>{
            arr[pos] = ""
        })
        this.placeImages(290, 440, 180, arr);
        this.game.remove();

    }

    highlight(index){
        let x = 290 + (index * 180);
        this.placeImages(x, 440, 0, ['./src/img/cards/highlight.png'])
        this.game.remove();

    }

    clearHighlight(){
        for (let i = 0; i < 5; i++) {
            this.ctx.clearRect(279, 434, 1000, 1000)
        }
        this.renderCards();
        this.game.remove();

    }

    


}


