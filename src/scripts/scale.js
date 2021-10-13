export class Scale {
    constructor(scale) {
        scale ||= 1
        this.scale = scale;
        this.arr = [];
    }

    scaled() {
        const overlay = document.querySelectorAll(".overlay")
        overlay.forEach(ele => {
            ele.style.display = ""
        })

        const allImg = document.querySelectorAll("img")
        allImg.forEach(img => {
            let height = img.clientHeight;
            img.style.height = height * this.scale + "px"
            img.style.width = "auto"
        })

        overlay.forEach(ele => {
            ele.style.display = "none";
        })

        const left = document.getElementsByClassName("left")[0]
        const right = document.getElementsByClassName("right")[0]
        left.style.width = 225 * this.scale + "px"
        right.style.width = 225 * this.scale + "px"
        left.style.height = 688 * this.scale + "px"
        right.style.height = 688 * this.scale + "px"

        document.querySelectorAll(".overlay").forEach(ele => {
            ele.style.fontSize = 40 * this.scale + "px"
        })

        document.getElementById("tutorial-1").style.width = 500 * this.scale + "px"

        if (this.scale === .75) {
            const buttons = document.querySelectorAll(".myButton")
            const links = document.querySelectorAll(".links")
            buttons.forEach(button => {
                button.style.marginTop = "2px";
                button.style.fontSize = "10px";

            })
            links.forEach(link => {
                link.style.paddingRight = "10px"
                link.style.paddingLeft = "10px"
            })
        }
    }





}