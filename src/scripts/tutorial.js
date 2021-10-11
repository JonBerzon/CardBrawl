import { htmlUtil } from "./htmlUtil"

const Tutorial = {
    first: ()=>{
        const tutorial1 = document.getElementById("tutorial-1");
        tutorial1.style.display = "";
        htmlUtil.tutorial1BlurOn();
    },

    second: ()=>{
        const tutorial1 = document.getElementById("tutorial-1");
        tutorial1.style.display = "none";
        htmlUtil.tutorial1BlurOff();
        const tutorial2 = document.getElementById("tutorial-2");
        tutorial2.style.display = "";
        htmlUtil.tutorial2BlurOn();
    },

    third: ()=>{
        const tutorial2 = document.getElementById("tutorial-2");
        tutorial2.style.display = "none";
        htmlUtil.tutorial2BlurOff();
        const tutorial3 = document.getElementById("tutorial-3");
        tutorial3.style.display = "";
        htmlUtil.tutorial3BlurOn();
    }


}

export {Tutorial}