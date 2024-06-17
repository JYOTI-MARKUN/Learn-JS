// function declaration 
// function square(num){
//     return num**2;  // can be hoisted
// }

// function expression

// const square = function(num){  // can not be hoisted as defined inside a variable
//     return num **2
// }


// Arrow function (expression)

const square = (num)=>{
    return num**2;  //explicit return
}

// another way of definning arrow function
const squareOf = (num)=> num**2 // implicit return (automatic)

const add  = (num1,num2)=> num1+num2

const multi = (a,b)=>{
    return a*b;
}

const multiply = (a,b)=> a*b  // implicit return 

const div = (c,d)=>{
    return c/d ; // note if you are writing return keyword then use block
}

const rand = ()=>{
    return Math.floor(Math.random()*10)+1
}
  