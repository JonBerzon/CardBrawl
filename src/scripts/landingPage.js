export class LandingPage{
    constructor(){
        this.knight = new Image();
        this.knight.src = "./src/img/animation/2.png"
        this.canvas = document.getElementById("startup-canvas");
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = 1920;
        this.canvas.height = 750;
        this.dx = 100;
        this.dx1 = 1800
        this.demon1 = new Image();
        this.demon1.src = "./src/img/animation/1.png"
    }
    startup(){
        let j = 0;
        const intervalId = setInterval(() => {
            if (j === 6) {
                j = 0;
            }
            if (this.dx >= 640){
                clearInterval(intervalId);
                this.animation2();
                // this.animation3();
            }
            this.ctx.clearRect(this.dx, 200, 300, 300);
            this.ctx.drawImage(this.knight, 0 + (j * 64), 64 , 64, 64, this.dx, 200, 300, 300)

            j += 1;
            this.dx += 10;
        }, 50);
    }

    startup1(){
        let j = 0;
        const intervalId = setInterval(() => {
            if (j === 6) {
                j = 0;
            }
            if (this.dx1 <= 1000) {
                clearInterval(intervalId);
                // this.animation2();
                this.animation3();
            }
            this.ctx.clearRect(this.dx1, 0, 1000, 1000);
            this.ctx.drawImage(this.demon1, 0 + (j * 160), 0, 155, 130, this.dx1, 0, 480, 450)

            j += 1;
            this.dx1 -= 20;
        }, 70);

    }


    animation2(){
        let j = 0;
        
        const intervalId = setInterval(() =>{
            if (j === 6) {
                j = 0;
            }
            this.ctx.clearRect(640, 200, 300, 300);
            this.ctx.drawImage(this.knight, 0 + (j * 64), 0, 64, 64, 640, 200, 300, 300)
            
            

            j += 1;
            
        }, 100);
    }

    animation3(){
        let i = 0;

        const intervalId = setInterval(() => {
            
            if (i === 6) {
                i = 0;
            }
            this.ctx.clearRect(1000, 0, 480, 450);
            this.ctx.drawImage(this.demon1, 0 + (i * 160), 0, 155, 130, 1000, 0, 480, 450)
            i += 1;

        }, 100)
    }

}