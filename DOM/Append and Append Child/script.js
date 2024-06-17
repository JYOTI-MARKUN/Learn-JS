const container = document.querySelector(".container");
const card = document.querySelector(".card");
const h1 =document.querySelector("h1");  

// append : adding something to the end of the written document
// to append a child inside other do this

// const appendh1 = container.appendChild(h1);  // this will remove h1 from body and put it inside div

// to copy and paste element we need to use cloneNode by default it will copy only the element not the text inside it so to to copy it we have to set h1.copyNode(?deep) this deep to true

// NOTE WE CAN NOT APPNED PARENT NODE THE CHILD USING appendChild


const clonecard1 = container.appendChild(card.cloneNode(true));  // copy with text
// for (let i = 2;i<=100;i++){
//     const clonecards =  (container.appendChild(card.cloneNode())).innerText= [i];
  
// }
 // copy without text
const cloneNodeh1 = container.appendChild(h1.cloneNode(true));

// append is used to append many thing at a time
const manythingsAdd = container.append("hello using append",h1,"world using using append")


// DIFFERENCE BETWEEN APPEND AND APPEND CHILD IS
// RETURN VALUE OF APPNED IS UNDEFINED BUT RETURN VAlUE OF APPEND CHILD IS NODE IT SELF 
// USING APPEND WE CAN APPEND MULTIPLE THING BUT USING APPEND CHILD WE CAN APPNED ONLY ONE NODE AT A TIME (it will ignore the second one)
// USING APPEND WE CAN APPEND STINGS BUT USING APPENDCHILD WE CAN NOT DIRECTLY APPEND A STRING BUT FOR THAT WE HAVE TO CREATE A TEXT NODE FIRST THEN like below
const textNode = document.createTextNode("hellow using appendChild");

container.appendChild(textNode);