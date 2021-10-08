document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext('2d')

    canvas.width = 1237; //1237 - 1650
    canvas.height = 750; // 750 - 1000

    let cardSlots = [];

    canvas.addEventListener('click', function(event){
        let x = event.pageX - 660 // off by 660 pixels
        let y = event.pageY - 173 // off by 173 pixels
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
    placeImages(placeHolder, 290, 350, 4.5, 170, 5, './src/img/alien.png');

    const cardBack = new Image();
    placeImages(cardBack, 45, 350, 4.5, 20, 3, './src/img/back.png')
    
    const button = new Image();
    placeImages(button, 300, 595, 2, 515, 2, './src/img/button.png')
});