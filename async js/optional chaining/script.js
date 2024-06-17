const user = {
    fisrtName :"jyoti",
    lastName :"markun",
    age:26,
    address :{
   city:"hydrabad"
    },
    // getFullName :()=>{
    //     return user.fisrtName +' '+ user.lastName
    // }

}

const a = "city"
// id we try to access the value of a property that does not exist in user we will get an error so to avoid error
// console.log(user.address.city);

// first method
if (user.address) {
console.log(user.address.city)
}

// second method
console.log(user.address && user.address.city)  // this code will check for the fisrt value if it is a falsy value then it will not move ahead

// third method (optinoal chaining)
console.log(user.address?.city) 
console.log(user.address?.[a])  // this will check wether user.address exist or not if not then give undefined


console.log(user.getFullName?.())