const userNameInput = document.querySelector("#username");
const para = document.querySelector("p");
const form = document.querySelector("form");

// onclicked
// userNameInput.addEventListener("click",()=>{
//     console.log("usernameinput is clicked");
// })


// on doubleClicked
// userNameInput.addEventListener("dblclick",()=>{
//     console.log("usernameinput is double clicked");
// })


// INPUT EVENT
// this is fired when something is given in the input, and to access the value we added in the input we need to add event object
// userNameInput.addEventListener("input",(e)=>{
//        inputValue = e.target.value;
//     para.innerText = inputValue;
//     console.log("input event fired");  
// })


// CHANGE EVENT
// this is fired when we change the value inside a input
// userNameInput.addEventListener("change",(e)=>{
//  console.log(e)
//     inputValue = e.target.value;
//  para.innerText = inputValue;
//  console.log("input changed event fired");  
// })



// FOCUS EVENT
// this is fired when we focus in the input
// userNameInput.addEventListener("focus",(e)=>{
//     console.log(e.type); // focus
//     inputValue = e.target.value;
//     para.innerText = inputValue;
//     console.log("input focus event fired");  
// })


// BLUR EVENT
// this is fired when we clicked outside the input box
// userNameInput.addEventListener("blur",(e)=>{
//     console.log(e.type); // blur type of focus event
//     console.log(e);
//     inputValue = e.target.value;
//     para.innerText = inputValue;
//     console.log("input blur event fired");  
// })




// EVENTS IN FORM
// form.addEventListener("click",(e)=>{
//     console.log(e);
// })


// SUBMIT EVENT
// form.addEventListener("submit",(e)=>{
//     // e.preventDefault();
//     console.log(e.)
//     console.log("form sumitted");
// })


form.addEventListener("click",(e)=>{
    e.preventDefault()  // by calling this function we can prevent our form to be submitted
    console.log(e.target) // it can be change
    console.log(e.currentTarget); // current target do not change
    console.log("clicked event");
})


// e.target is the element to which event is occurred e.target can be changed it can be anywhere where we have clicked the form
