// setTimeout is not the part od JS its Browser's part like alert
// setTimeout is a higher order function
// setTimeout('hi'); // will through an error like hi is not defined as setTimeout doest not treats a string as a string but it will treat it as javascripts's code

// to avoid the above error we can give string a varibale name like
const hiii ="hello"
setTimeout("hiii");


setTimeout("console.log(true)");

setTimeout("console.log('hellow');console.log('jyoti');",3000);

setTimeout(`console.log('hellow')
console.log('jyoti')`,3000);

// when you run setTimeout in console window then it will return a numeric value before printing the actual code this value is the return value  or ID of setTimeout function that is used to clear setTimeout using clearTimeout

const timer1 = setTimeout('console.log("hi")',1000);  // we are ususing varibale to store every setTimeout
const timer2 = setTimeout('console.log("hii")',2000);
const timer3 = setTimeout('console.log("hiii")',6000);

clearTimeout(timer3);

// defining function inside a setTimeout Fucntion
setTimeout(a,2000) // always remerber do not call function inside setTimeout otherwise it will not return anything (as when we call function inside settimeout then it will write its return value inside it which is undefined)
function a(){
    console.log("hellow my name is jyoti markun")
};

// NOTE : Always use quote when you are passing string inside a setTimeout function otherwise it will run at the same time


// 