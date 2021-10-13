export class LandingPage{
    constructor(){
        this.knight = new Image();
        this.knight.src = "./src/img/animation/2.png"
        this.canvas = document.getElementById("startup-canvas");
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = 1440;
        this.canvas.height = 488;
        this.dx = 75;
        this.dx1 = 1350;
        this.demon1 = new Image();
        this.demon1.src = "./src/img/animation/1.png"
    }
    startup(){
        let j = 0;
        const intervalId = setInterval(() => {
            if (j === 6) {
                j = 0;
            }
            if (this.dx >= 480){
                clearInterval(intervalId);
                this.animation2();
                // this.animation3();
            }
            this.ctx.clearRect(this.dx, 150, 225, 225);
            this.ctx.drawImage(this.knight, 0 + (j * 64), 64 , 64, 64, this.dx, 150, 225, 225)

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
            if (this.dx1 <= 750) {
                clearInterval(intervalId);
                // this.animation2();
                this.animation3();
                document.getElementById("start-button").style.display = "";
            }
            this.ctx.clearRect(this.dx1, 0, 750, 750);
            this.ctx.drawImage(this.demon1, 0 + (j * 160), 0, 155, 130, this.dx1, 0, 360, 338)

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
            this.ctx.clearRect(480, 150, 225, 225);
            this.ctx.drawImage(this.knight, 0 + (j * 64), 0, 64, 64, 480, 150, 225, 225)
            
            

            j += 1;
            
        }, 100);
    }

    animation3(){
        let i = 0;

        const intervalId = setInterval(() => {
            
            if (i === 6) {
                i = 0;
            }
            this.ctx.clearRect(750, 0, 360, 338);
            this.ctx.drawImage(this.demon1, 0 + (i * 160), 0, 155, 130, 750, 0, 360, 338)
            i += 1;

        }, 100)
    }

}