// When we assign same value to more than one variable then they will point to the same address (this concept is same for arrays and object as well)


// let userName1 = "Jyoti";
// let userName2 =userName1;
// userName2 = userName1 + "Markun";


// methods to copy an array and assign some new value to another array without any change in the original array


const fruit = ["apple","mango","banana"];

// const myFruits =[];
// Object.assign(myFruits,fruit); // using object assign method as array is nothing but a object

const myFruits =[...fruit]; //spread operator
// const myFruits = [].concat(fruit); // using concat
// const myFruit = fruit.slice();//using slice method


// using this original array will also change if we made any change in another array

// const myFruits = fruit;

// myFruits.push("Dates");
// myFruits.push("Grapes");






// methods to copy an object and assign some new value to another object without any change in the original object

// const user1 ={
//     firstName : "JOjo",
//     lastName: "Markun"
// };

// const user2=user1;

// user2.lastName="Sharma"; // changing an object like this will change the last name from user1 object also 

// correct way of creating another object from an object that already exist in the memory

const user1 ={
    firstName : "JOjo",
    lastName: "Markun"
};

// const user2 ={};

// Object.assign(user2,user1); // old method to create an object 

const user2 ={...user1}; // spread operator
user2.lastName = "Sharma";


// in  case of multidimentional object
const user = {
    firstName :"Anurag",
    lastName :"sharma",
    pata :{
        city:"Ambala",
        state:"haryana"
    }
};

const user0 ={...user}