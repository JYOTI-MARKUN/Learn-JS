'use strict'  // use this keyword so that we always declare variable using var const or let

const fruits =['banana','apple','peach','mango','grapes'];

for (let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
console.log("*********************")

// for of loop
// always use const and  var in for of loop as these have local scope and they get destroy as soon as block is ended thus saves memory
for (const fruit of fruits){
    
    console.log(fruit);
}  

// for of loop can be used in string as well 
const user = "jyoti markun"
for (const letter of user){
      console.log(letter)
}

// for of loop can not be used in object that why se use for in
// for in loop

const person ={
    firstName : "jyoti",
    lastName :"markun",
    age:25,
    eyeColor:"black",
    city:"Banglore"
};

for (const key in person){
    console.log(key,":",person[key]);
}  // for in loop is not good for large project so we use indirect way to use for of loop in person object

const personKeys = Object.keys(person);  // to get the key of an object
const personvalues = Object.values(person); // to get the values of an object
const personEntries = Object.entries(person); // to get the array of keys and value of an object

for (const keys of personKeys){
    console.log(keys);
}

for (const keys of personvalues){
    console.log(keys);
}

for(const keys of personEntries){
    console.log(keys);
}