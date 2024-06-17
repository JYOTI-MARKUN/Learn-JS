const colors = ["red","green","yellow","pink","black","white","orange"];

// // normal 
// const color1 = colors[1];
// const color2 = colors[2];
// const color3 = colors[3];

// sunig destructuring 
const [color1,color2,color3] = colors;

// if you want direct fourth color from the array use this
const [,,,color4] = colors;

// destrucring array using object
const { 5:color6, 4:color5} = colors

// destructuring in object
const user ={
    name:"jyotiMarkun",
    age:25,
    address:{
city :"Bangalore",
state:"karnataka",    
    },
}

// geeting values normally
// const name = user.name;
// const age = user.age;

// using destructuring
const {name,age} = user

//in case od ibject destructuring if you do not want the variable to have the same name then you can access it they with same key but assign that key to a different variable like

// const {name:username,age:userage} = user


// MULTI LEVEL DESTRUCRING
// to access value of a key that exist inside another object  


// const {address} = user;
// const {city} = address;

// you can do the above thing in single line

const {address:{city}} = user; // uisng this a extra variable address will not created in memory

// note if the property you want to destructure does not exist in the array or object then it will give undefined

// destrucring in function  (indestrucring afunction order does not matter)
// passing object as parameter
function intro({age,name}){
    console.log(age,name)
}

intro(user)

// passing array as parameter
function printcolor([,,color1]){
    console.log(color1)
}

printcolor(colors);