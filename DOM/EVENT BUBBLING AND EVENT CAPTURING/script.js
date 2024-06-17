const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");


// EVENT BUBBLING (inside to outside propagation)
// green.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     console.log("green event clicked")
// });

// pink.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     console.log("pink event clicked")
// });

// blue.addEventListener("click",(e)=>{
//     console.log("blue event clicked")
// });

// document.body.addEventListener("click",(e)=>{
//     console.log("body event clicked")
// });

// document.addEventListener("click",(e)=>{
//     console.log("document event clicked")
// });

// window.addEventListener("click",(e)=>{
//     console.log("window event clicked")
// });


// when we click inside a child element the events of the parents also get clicked this is called event bubbling and to stop this we need to use event.stoppropagation() this will stop propagation at that point 

// event capturing is coming outside to inside yhat is from parent to child for this we need to take the third argument of the eventlistner i.e. capture:true

green.addEventListener("click",(e)=>{
    // e.stopPropagation()
    console.log("green event clicked")
},true);

pink.addEventListener("click",(e)=>{
    // e.stopPropagation()
    console.log("pink event clicked")
},true);

blue.addEventListener("click",(e)=>{
    console.log("blue event clicked")
},true);

document.body.addEventListener("click",(e)=>{
    console.log("body event clicked")
},true);

document.addEventListener("click",(e)=>{
    console.log("document event clicked")
},true);

window.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("window event clicked")
},true);




// once : wil print only once

// green.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     console.log("green event clicked")
// },{once:true});


// blue.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     console.log("blue event clicked")
// },{once:true});