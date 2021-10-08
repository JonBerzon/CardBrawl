document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext('2d')

    canvas.width = 1237; //1237 - 1650 - 1080 vs 1440 respectively
    canvas.height = 750; // 750 - 1000 - 1080 vs 1440 respectively

    let cardSlots = [];

    canvas.addEventListener('click', function(event){
        let x = event.pageX - canvas.offsetLeft // off by 660 pixels
        let y = event.pageY - canvas.offsetTop  // off by 173 pixels
        console.log(x,y)

    })

    function placeImages(img, x, y, num, dist, times, src){
        for (let i = 0; i < times; i++) {
            img.addEventListener('load', function () {
                ctx.drawImage(img, x, y, img.width / num, img.height / num);
                x += dist
            })
            img.src = src          
        }
    }
    const placeHolder = new Image();
    placeImages(placeHolder, 290, 440, .6, 180, 5, './src/img/testCard.png');

    const cardBack = new Image();
    placeImages(cardBack, 45, 440, .6, 20, 3, './src/img/testCardBack.png');
    
    // const button = new Image();
    // placeImages(button, 300, 595, 2, 515, 2, './src/img/button.png');
    let i = 1

    // function attackAnimation() {
    //     let intervalId = setInterval(()=>{
    //         if (i === 9){
    //             i = 1;
    //             clearInterval(intervalId)

    //         } 
    //         ctx.clearRect(327, 114, 400, 200);
    //         let skeleton = new Image();
    //         placeImages(skeleton, 400, 60, .4, 0, 1, `./src/img/skel_attack/Sattack${i}.png` )
    //         i += 1;
            
    //     }, 50);
    // }

    // attackAnimation()
    let j = 1;
    setInterval(() => {
        if (j === 7) {
            j = 1;
        }
        ctx.clearRect(427, 14, 600, 400);
        let demon = new Image();
        placeImages(demon, 600, 60, .4, 0, 1, `./src/img/demon_idle/${j}.png`)
        j += 1;

    }, 70);

   

    

    

    
});