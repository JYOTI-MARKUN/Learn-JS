
const userName ="jyotiMarkun";  // when we use const keyword then it will go to script in scope 

let age = 25;
var occupation ="web developer"; // when we use var keyword then it will go to global scope


sayHi();
function sayHi(){   // here function will create and it will store into global 
    console.log("hellow")
    add();
}
function add(){
    a=5;
    b=10;
    sub(8,9);
    return a+b
  
}

function sub(x,y){
    return x-y
}

// firts we run a js code first memory is created for all code and we can not stope it and saw it but when code execution phase is is run at that time we can debug the code and saw it as memory is created in the very beginning that why we can call a function before it is defined in the code 
// when a function is defined inside a js code then it is creted and store as it is in the global scope and when our code execution phase reaches at the function then functions own EXECUTION CONETXT IS RUN (ITS MEMORY CREATION PART AND CODE EXECUTION PART AND IF A FUNCTION IS NESTED INSIE OIT THEN AGAIN ITS NESTED FUNCTION'S EXECUTION CONTEXR IS RUN)

// call stack is when ever js code is run firstly global execution context is run(also called anonymous ) then if it has a function then functions local execution context and so on it is called call stack  (it is based on stacked datastruction last in first out when our call stack gets empty our program ends)


// hoisting in js when we can use var and function before their declaration and they are not  showing error then this is called hoisting like function and varibale defined using var

// const and ket is also hoisted but they stored in temporal dead zone so these are not hoisted

// a function can be definition in two ways 
// 1 function definition  (can be hoisted)
// 2. function expresiion (can not hoisted)
// when we create a function using variable then it behaves same as normal function i.e will through an error that can not use variable before initialization if we use const and let AND in case of var as var hoisting is undefined so it will through an error that undefines is not a function 

// a function without name is called anonymous function


