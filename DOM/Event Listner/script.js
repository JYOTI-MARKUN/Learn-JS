//  event listner needs a function that is created by js it self if we do not provide a name and all the code we have provided it it will store ut inside that function

// adding event can have three method first define it inside html
// second define it in js 

const h1 = document.querySelector("h1");
const container =document.querySelector(".container")

function sayHi(){
    console.log("hellow");
}


function second(){
    console.log("seconf heloow")
}

 // second method 
// h1.onclick= sayHi
// h1.onclick =  second // using this we can apply only one event listner



// thrid method
h1.addEventListener('click',sayHi)
h1.addEventListener('click',function (){
    console.log("second")
})


const card = document.querySelector(".card")

card.addEventListener("click",addACard);

let count = 1

function addACard(){
    const newCard = document.createElement("div");
    newCard.classList.add ("new-card");
    newCard.innerText = count++;
    container.append(newCard);
}