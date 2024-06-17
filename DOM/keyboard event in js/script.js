// there are three type of event key down key up and key press

// const h1 = document.querySelector("h1");
// const input = document.querySelector("input")

// to make keypress event work we need a focusable element input is focusable element bydefault

// input.addEventListener("keypress",(e)=>{
//   console.log(e.key)
// })

// but to make h1 as focusable element we need to apple tabindex = 0
// h1.addEventListener("keypress",(e)=>{
//     console.log(e.key)
//   })


// usualy we apply keydown event to a window 

// window.addEventListener("keypress",(e)=>{
//     // console.log(e);
//     console.log('key value',e.key);
//     console.log('Key code',e.code);

// })


// KEY UP
// window.addEventListener("keyup",(e)=>{
//     console.log("Value",e.key);
//     console.log("key code",e.code);
// })

// key dwon
window.addEventListener("keydown",(e)=>{
    console.log("Value",e.key);
    console.log("key code",e.code);
})