// const and let stores in script and var stores in global or window object although both are global scope element but we can use window .variable name or window.functionName to access global varibale and function but we can not access the varibales that are defined using const and let in script scope

// laxical and global scope
const userName = "jyotiMarkun";  // global scope
let userAge = 25;
var a = 50;


function add(){
   const userName = "jojo";
   const x = 5;
   const y = 8;
   console.log(x+y);
   console.log(userName);
}

function subtract(){
    const b  = 25;
    const c= 50;
    const d = 20;
    console.log(b-c);
    console.log(userName);

    // when we define variable and function inside a function then we can access the varibales but we can not access the function untill we call it (here the function we are talking about is chind function)

    function child(){
        const childName = 'Golu';
        console.log(childName);
        console.log(d,b);  // when we use parent's varibale inside chile then it will make it a closure
    }
    // console.log(childName);  // will through an error as we are using child's varibale inside parents space
    child() // as child is defined inside subtract that why we can not call it outisde subtract function
}

add()
subtract()

console.log("program ended")


// laxical scope is a scope in js in which the inner function can access the variables of its outer function


// when we define a variable in js without using let var const then it will store into window object and to avoid that we can use a keyword 'use strict' that will not let us define a variable without using let const var