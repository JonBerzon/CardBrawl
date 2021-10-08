export class Board{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
    }

    placeImages(img, x, y, num, dist, times, src) {
        let that = this;
        for (let i = 0; i < times; i++) {
            img.addEventListener('load', function () {
                that.ctx.drawImage(img, x, y, img.width / num, img.height / num);
                x += dist
            });
            img.src = src
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
            this.placeImages(demon, 600, 60, .4, 0, 1, `./src/img/demon_idle/${j}.png`)
            j += 1;

        }, 70);
    }

    renderCards(){
        const cardBack = new Image();
        this.placeImages(cardBack, 45, 440, .6, 20, 3, './src/img/testCardBack.png');

        const placeHolder = new Image();
        this.placeImages(placeHolder, 290, 440, .6, 180, 5, './src/img/testCard.png');
    }


}


