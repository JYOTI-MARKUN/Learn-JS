// debugger
// // const username = 5>2?"jyoti":"markun";

// const gender  ="F"
// const usermessage = `${gender==="F"?"she":"he"}is a college student` 

const result = " "?"jyoti":"markun"; // first will print in case of truthy value
console.log(result);

const result2 = ""?"jojo":""?"m":"markun";  // here it will check for first condition like in this case we have empty string which is a falsy value so jojo will not print and it will move ahead then it will check for another ternary operator again if it is true m will print otherwise markun will print to the window
console.log(result2);