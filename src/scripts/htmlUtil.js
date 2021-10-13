const htmlUtil = {
    overlayBlurOn: ()=>{
        const backBlur = document.querySelectorAll(".mid > *:not(#overlay-div)")
        backBlur.forEach(ele => {
            ele.style.filter = "blur(4px)"
        })
        const elseBlur = document.querySelectorAll(".main > *:not(.mid)")
        elseBlur.forEach(ele => {
            ele.style.filter = "blur(4px)"
        })
        document.querySelector(".mid").style.position = "relative"


    },

    overlayBlurOff: ()=>{
        const backBlur = document.querySelectorAll(".mid > *:not(#overlay-div)")
        backBlur.forEach(ele => {
            ele.style.filter = ""
        })
        const elseBlur = document.querySelectorAll(".main > *:not(.mid)")
        elseBlur.forEach(ele => {
            ele.style.filter = ""
        })
        document.querySelector(".mid").style.position = "static"

        

    },

    blurAll: ()=>{
        const backBlur = document.querySelectorAll(".main")
        backBlur.forEach(ele=>{
            ele.style.filter = "blur(4px)"
        })
    },

    blurOff: () => {
        const backBlur = document.querySelectorAll(".main")
        backBlur.forEach(ele => {
            ele.style.filter = ""
        })
    },

    blurExceptLeft: ()=>{
        const midRightBlur = document.querySelectorAll(".main > *:not(.left)")
        midRightBlur.forEach(ele =>{
            ele.style.filter = "blur(4px)"
        })
    },

    blurExceptRight: () => {
        const midLeftBlur = document.querySelectorAll(".main > *:not(.right)")
        midLeftBlur.forEach(ele => {
            ele.style.filter = "blur(4px)"
        })
    },
    tutorial1BlurOn: () => {
        // const backBlur = document.querySelectorAll(".mid > *:not(#tutorial-div)")
        // backBlur.forEach(ele => {
        //     ele.style.filter = "blur(4px)"
        // })
        const elseBlur = document.querySelectorAll(".main > *:not(.mid)")
        elseBlur.forEach(ele => {
            ele.style.filter = "blur(4px)"
        })
    },

    tutorial1BlurOff: () => {
        // const backBlur = document.querySelectorAll(".mid > *:not(#tutorial-div)")
        // backBlur.forEach(ele => {
        //     ele.style.filter = ""
        // }) 
        const elseBlur = document.querySelectorAll(".main > *:not(.mid)")
        elseBlur.forEach(ele => {
            ele.style.filter = ""
        })
    },

    tutorial2BlurOn: () =>{
        const backBlur = document.querySelectorAll(".mid > *:not(#tutorial-div)")
        backBlur.forEach(ele => {
            ele.style.filter = "blur(4px)"
        });
        const elseBlur = document.querySelectorAll(".main > *:not(.left):not(.mid)")
        elseBlur.forEach(ele => {
            ele.style.filter = "blur(4px)"
        })
    },

    tutorial2BlurOff: () => {
        const backBlur = document.querySelectorAll(".mid > *:not(#tutorial-div)")
        backBlur.forEach(ele => {
            ele.style.filter = ""
        });
        const elseBlur = document.querySelectorAll(".main > *:not(.left):not(.mid)")
        elseBlur.forEach(ele => {
            ele.style.filter = ""
        })
    },

    tutorial3BlurOn: ()=>{
        const backBlur = document.querySelectorAll(".mid > *:not(#tutorial-div)")
        backBlur.forEach(ele => {
            ele.style.filter = "blur(4px)"
        });
        const elseBlur = document.querySelectorAll(".main > *:not(.right):not(.mid)")
        elseBlur.forEach(ele => {
            ele.style.filter = "blur(4px)"
        })
    },

    tutorial3BlurOff: () => {
        const backBlur = document.querySelectorAll(".mid > *:not(#tutorial-div)")
        backBlur.forEach(ele => {
            ele.style.filter = ""
        });
        const elseBlur = document.querySelectorAll(".main > *:not(.right):not(.mid)")
        elseBlur.forEach(ele => {
            ele.style.filter = ""
        })
    },

    tutorial4BlurOn: () =>{
        const backBlur = document.querySelectorAll(".mid > *:not(#tutorial-div)")
        backBlur.forEach(ele => {
            ele.style.filter = "blur(4px)"
        })
        const elseBlur = document.querySelectorAll(".main > *:not(.mid)")
        elseBlur.forEach(ele => {
            ele.style.filter = "blur(4px)"
        })
    },

    tutorial4BlurOff: () => {
        const backBlur = document.querySelectorAll(".mid > *:not(#tutorial-div)")
        backBlur.forEach(ele => {
            ele.style.filter = ""
        })
        const elseBlur = document.querySelectorAll(".main > *:not(.mid)")
        elseBlur.forEach(ele => {
            ele.style.filter = ""
        })
    }








}

export {htmlUtil}