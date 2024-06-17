// 'use strict'

const fruits = ['apple','mango','banana','grapes','peach'];


// for of loop
for (const fruit of fruits){
    console.log(fruit);
}

console.log("******************")

// forEach method (actually it is a function but as we can use it using .(dot) that why it is called method)


fruits.forEach(function(fruit){  // here the parameter we are passing to forEach loop can be of any name of your choice but it is a good choice to give it a convient name
    console.log(fruit);
})

console.log("******************")

fruits.forEach((fruit)=>{
    console.log(fruit)
})

// note  forEach is a higher order function as it takes another function inside it 
// UNLIKE OTHER FCUNTIONS i.e. userdefined function the return value of forEach is undefined as it's js native code and we can only use it 
