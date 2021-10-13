

export class Board {
    constructor(canvas, ctx, game, scale) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.game = game;
        this.scale = scale;
        this.imgSet = {}
        this.j = 0;
        this.demonIdle = new Image();
        this.demonIdle.src = "./src/img/animation/1.png"
        this.renderedCards = [];
        this.cardImg();

        console.log(this.renderedCards)
    }

    cardImg() {
        const cback = new Image();
        cback.src = "./src/img/cards/cback.png"
        const highlight = new Image();
        highlight.src = "./src/img/cards/highlight.png"
        const stronga = new Image();
        stronga.src = "./src/img/cards/stronga.png"
        const strongd = new Image();
        strongd.src = "./src/img/cards/strongd.png"
        const weaka = new Image();
        weaka.src = "./src/img/cards/weaka.png"
        const weakd = new Image();
        weakd.src = "./src/img/cards/weakd.png"
        const blank = new Image();
        blank.src = "./src/img/cards/blank.png"


        this.renderedCards.push(cback, highlight, stronga, strongd, weaka, weakd, blank)
    }

    placeImages(x, y, dist, src) {
        let that = this;
        for (let i = 0; i < src.length; i++) {
            that.imgSet[src + i] = new Image();
            let img = that.imgSet[src + i];
            img.src = src[i];

            img.addEventListener('load', function () {
                that.ctx.drawImage(img, x + (dist * i), y);
            });



        }
    }


    demonAnimation(bool) {
        let j = 0;
        const intervalId = setInterval(() => {
            if (j === 6) {
                j = 0;
                if (bool) {
                    clearInterval(intervalId);
                }
            }
            this.ctx.clearRect(500 * this.scale, 20 * this.scale, 400 * this.scale, 350 * this.scale);
            this.ctx.drawImage(this.demonIdle, 0 + (j * 160), 0, 155, 130, 500 * this.scale, 20 * this.scale, 380 * this.scale, 350 * this.scale)
            j += 1;
        }, 80);
    }


    renderCards() {
        let arr = [];
        this.game.player.deckHand.hand.forEach(card => {
            arr.push(card.src)
        });
        // this.placeImages(45, 440, 20, ['./src/img/cards/cback.png']);
        this.ctx.drawImage(this.renderedCards[0], 45 * this.scale, 440 * this.scale, this.renderedCards[0].width * this.scale, this.renderedCards[0].height * this.scale);


        // this.placeImages(290, 440, .6, 180, arr);
        this.game.noLoadPos.forEach(pos => {
            arr[pos] = ""
        })
        // this.placeImages(290, 440, 180, arr);
        arr.forEach((img, i) => {
            img ||= this.renderedCards[6]
            this.ctx.drawImage(img, 290 * this.scale + ((180 * this.scale) * i), 440 * this.scale, img.width * this.scale, img.height * this.scale);
        })


        this.game.remove();

    }

    highlight(index) {
        let x = (290 * this.scale) + (index * (180 * this.scale));
        this.ctx.drawImage(this.renderedCards[1], x, 440 * this.scale, this.renderedCards[1].width * this.scale, this.renderedCards[1].height * this.scale);

        // this.placeImages(x, 440, 0, ['./src/img/cards/highlight.png'])
        this.game.remove();

    }

    clearHighlight() {
        for (let i = 0; i < 5; i++) {
            this.ctx.clearRect(279 * this.scale, 434 * this.scale, 1000 * this.scale, 1000 * this.scale)
        }
        this.renderCards();
        this.game.remove();
    }




}


