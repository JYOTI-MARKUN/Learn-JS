const num1 = [1,2,3,4];
const num2 = [5,6,7,8];
const name = "jyoti"

// normal method to join two array
const joinedArray = num1.concat(num2);

// using spread operator
// spread operator in arrays
const joinArray = [...num1,...num2]
console.log(joinArray);
// spread array in strings
const joinString = [...name,...name]
console.log(joinString );

// spread operator in object

const userName = {
    name :"jyotiMarkun",
    age :26,
    occupation:"web developer"
}
const joinObject = {...userName,salary:30000}
console.log(joinObject);

// spread opeartor in function 

// spread operator is of great use when we pass a very large number of arrays in function called as argment

function add(){
    sum = 0
    console.log(arguments);
    for(let i =0;i<arguments.length;i++){
         sum+= arguments[i]
    }
    return sum
}


console.log(add(...joinArray));
console.log(add(...joinArray,25,455));
console.log(add(...joinString));


// not only iterabels can passed as argument in function call so we can not pass object