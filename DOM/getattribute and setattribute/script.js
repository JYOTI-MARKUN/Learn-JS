// attribute is defined inside the element execept the tag name anything else which is set as this equal to is called attribute 
// Example img has src attribute height ,width,class attribute id attribute 

// to get the value of a attribute with a perticular name 
let webdev = document.querySelector('[webdev]').attributes.webdev.value
console.log(webdev);

// another method 

const webdev1 = document.querySelector('[webdev]').getAttribute('webdev') // if attribute does not exist then it will give null

// setting attribute 
const setatrr = document.querySelector('h1').setAttribute("title","hellow") // we have to provide two string first one is key and the second one us value


// some attributes are directly accessible in js like id,title,className,href
document.querySelector("h1").id="hello"  // this will make value of id attribute as hello

// APPLY STYLES IN JS

document.querySelector("h1").style // using this syntax we can access all css property and here only the value of the properties that are defined inside js code is store not the properties that are used in css is stored
const h1 = document.querySelector("h1")
h1.style.color = "hotpink";
h1.style.backgroundColor = "pink";

const allAnchorTag = document.querySelectorAll("a");

// for (let i =0;i<allAnchorTag.length;i++){
//     allAnchorTag[i].style.color="teal";
// }

// usinf for of loop
for (const link of allAnchorTag){
    // link.style.color ="teal";
    // link.style.textDecoration="none";
    // link.style.fontWeight="700";
    // link.style.fontFamily="cursive";
    // link.style.fontSize="18px";

    // to apply all the above decoration in our text we can use short property in which we can apply styles as we can do in css

    //  link.style.cssText =`  color: teal;   
    //  text-decoration:"none" ;
    //  font-weight: 700 ;
    //  font-family: 'cursive';
    //  font-size: 18px;`

    // right way to do it apply a class and give all styles to that class in css
    // link.setAttribute("class","green-class")

    // adding multiple classes using classlist
    link.classList.add("green-class","wavy-link")
    // link.classList.remove("green-class","wavy-link") // to remove classes
    // link.classList.toggle("green-class","wavy-link") // to add or remove 

}







