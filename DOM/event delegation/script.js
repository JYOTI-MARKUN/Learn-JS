
const addCardBtn = document.querySelector('.add-card')
const container = document.querySelector('.container')

const cardList = document.querySelectorAll(".card");  // to get the list of all cards  ( this list will create when we reload the page but at that time there is no new card as we have bot yet click on addcardbtn )

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
    // adding event listenr to the new  card as soon as it is appended to the container

    // newCard.addEventListener("click",(e)=>{
    //     newCard.remove();
    // })
     // this approach of adding event listner to each card will work fine but it will consume too much memory so it is not consider a good practice, so we will use a different approch we will apply eventlistner to the container
})




// cardList.forEach((card)=>{ // running a foreach loop to each and every element of the array  (as we do not have any card in the cardlist so the loop will not run)
// console.log(card);
// card.addEventListener("click",()=>{  // ading event listner to every crad.
//     card.remove();
// })
// })

container.addEventListener("click",(e)=>{
    if (e.target !== container){
    console.log(e.target); // this will give the current target in which we have clicked 
    e.target.remove()}; 
})