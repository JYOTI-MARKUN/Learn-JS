const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const form = document.querySelector("form")

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})


// // click event simulator using this we can add as many card as possible using js 

// const intervalID =  setInterval(()=>{
//     if (count > 1000){
//         clearInterval(intervalID);
//     }
//     addCardBtn.click()},10)  // this will add 1001 card to the screen as after checking condition it will run atleast once 


// focus event simulator to focus in the input field automatically// 

// setTimeout(()=>{
//     input1.focus()  // will focus to the textarea
//     console.log("Input Focused");
// },1000)


// blur event simulator

// setTimeout(()=>{
//     input1.blur()  // will release focus from textarea
//     console.log("Input blurred");
// },2000)


// submit form simulator
// setTimeout(() => {
//     form.submit()
// console.log("form submitted")
// }, 1000);



// reset form simulator

    // form.reset();