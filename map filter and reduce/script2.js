// we can access the variibale defined inside the script.js in script2.js 
// console.log(Months);


// accumalator is starting value of the array if we did not provide any value in callback then it will take the very first value of the array ,and the current valus is the first value of  the array if accumalator is passed if not then it will be the second value of the array

const num = [1,2,3,4,5,6,7]

num.reduce((accumalator,current,index,array)=>{
    debugger;
      console.log(accumalator,current,index);
      
      return accumalator + current;  // accumalator will increase every time as current iis added to it
})

