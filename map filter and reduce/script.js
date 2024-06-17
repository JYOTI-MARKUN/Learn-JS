const Months  =['January','February','March','April','May',"December"];

// as we know that forEach array method does not return anything and its return value is undefined
// map function has a return value and it store it inplace of the map function as the normal function do, we have to return value for map function if do not return in map function that it will store undefined array that have the same number of undefined as the value sin the array

Months.map((month)=>{
console.log(month);
})  // when we run this code in console window then we get 
// January
// VM311:2 February
// VM311:2 March
// VM311:2 April
// VM311:2 May
// (5) [undefined, undefined, undefined, undefined, undefined]
// this so to return a value we have to return it inside map function


// const capitalMOnths = Months.forEach((month)=>{
//     console.log(month);
//     return month.toUpperCase();
// })  // result will be undefined

const capitalMOnths = Months.map((month)=>{
    console.log(month);
    return month.toUpperCase();
})

console.log(capitalMOnths);


// using index and array argument 
const capitalmonths = Months.map((month,index,array)=>{
    console.log(index+1,month);
    console.log(array);
    return month.toUpperCase();
})

// note index keyword ca also be used in forEach loop and it will give the smae results as it is gicing in map
console.log(capitalMOnths);


console.log("**************************************")

// filter 
const filterMonth = Months.filter((month,index,array)=>{  
     console.log(month.toLowerCase().includes("m"));  
     return month.toLowerCase().includes("m");
})


// filtr using index
const filterMONTH = Months.filter((month,index,array)=>{
      return index >= 3;
})


const students = [
    {
    name :"Akash",
    age :21
},
{
    name :"Adarsh",
    age :17
},
{
    name :"Amir",
    age :18
}
,
{
    name :"Aradhya",
    age :28
}
]


const adultStudent = students.filter((student)=>{
     return student.age>=18
}).map((student)=>{
     return student.name.toLowerCase()
}).filter((student)=>{
    return student.includes("k");
})