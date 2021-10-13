import { htmlUtil } from "./htmlUtil"

const Tutorial = {
    first: () => {
        const tutorial1 = document.getElementById("tutorial-1");
        tutorial1.style.display = "";
        htmlUtil.tutorial1BlurOn();
    },

    second: () => {
        const tutorial1 = document.getElementById("tutorial-1");
        tutorial1.style.display = "none";
        htmlUtil.tutorial1BlurOff();
        const tutorial2 = document.getElementById("tutorial-2");
        tutorial2.style.display = "";
        htmlUtil.tutorial2BlurOn();
    },

    third: () => {
        const tutorial2 = document.getElementById("tutorial-2");
        tutorial2.style.display = "none";
        htmlUtil.tutorial2BlurOff();
        const tutorial3 = document.getElementById("tutorial-3");
        tutorial3.style.display = "";
        htmlUtil.tutorial3BlurOn();
    },

    fourth: () => {
        const tutorial3 = document.getElementById("tutorial-3");
        tutorial3.style.display = "none";
        htmlUtil.tutorial3BlurOff();
        const tutorial4 = document.getElementById("tutorial-4");
        tutorial4.style.display = "";
        htmlUtil.tutorial4BlurOn();
    },

    fifth: () => {
        const tutorial4 = document.getElementById("tutorial-4");
        tutorial4.style.display = "none";
        const tutorial5 = document.getElementById("tutorial-5");
        tutorial5.style.display = "";
    },

    sixth: () => {
        const tutorial5 = document.getElementById("tutorial-5");
        tutorial5.style.display = "none";
        const tutorial6 = document.getElementById("tutorial-6");
        tutorial6.style.display = "";

    },

    seventh: () => {
        const tutorial6 = document.getElementById("tutorial-6");
        tutorial6.style.display = "none";
        const tutorial7 = document.getElementById("tutorial-7");
        tutorial7.style.display = "";
    },

    intro: () => {

    }


}

export { Tutorial }