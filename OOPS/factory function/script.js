const user = {
    firstName :"jyoti",
    lastName :"Markun",
    age: 25,
    getUserBirthYear:function (){
        return new Date().getFullYear()-user.age
   },
   // this can alos we write as  js shortcut
//    getUserBirthYear(){
//     return new Date().getFullYear()-user.age
// }

}


// encapcualtion (data hiding): kept in a object 

// adstraction : hiding the complexity

// FACTORY FUNCTION 

// function createUser(firstName,lastName,age){
//     const user = {
//         firstName :firstName,
//         lastName :lastName,
//         age: age,
//     }
//     return user
// }

// createUser("jojo","markun",25)


// wehen we have the same key and value pair then we can add obky value it will auto create the key

function createUser(firstName,lastName,age){
    const user = {
        firstName,
       lastName,
       age,
       getUserBirthYear(){
        return new Date().getFullYear()-user.age
       }
    }
    return user
}

const user1 = createUser("jojo","markun",25);
const user2 = createUser("jyoti","markun",35);

console.log(user1.getUserBirthYear() === user2.getUserBirthYear()) // will give false as for both of the users getUserBirthYear sav in different loaction although they are doing the same thing so ths is not suppose to be a gooding pratice so to solve this problem we need constructor function

// we know array methods are same for evry array that means they are pointing to the same memory location in the memory so they do not consume much memeory
